import crypto from 'node:crypto';
import nodemailer from 'nodemailer';

const SITE_URL = process.env.SITE_URL || 'https://samahair.co.uk';
const TOKEN_TTL_MS = 14 * 24 * 60 * 60 * 1000; // 14 days

function base64url(input) {
  return Buffer.from(input).toString('base64url');
}

function sign(payloadB64) {
  const secret = process.env.BOOKING_SECRET;
  if (!secret) throw new Error('BOOKING_SECRET is not set');
  return crypto.createHmac('sha256', secret).update(payloadB64).digest('base64url');
}

export function createBookingToken(booking) {
  const payload = { ...booking, exp: Date.now() + TOKEN_TTL_MS };
  const payloadB64 = base64url(JSON.stringify(payload));
  const sig = sign(payloadB64);
  return `${payloadB64}.${sig}`;
}

export function verifyBookingToken(token) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return null;
  const [payloadB64, sig] = token.split('.');
  const expectedSig = sign(payloadB64);
  const sigBuf = Buffer.from(sig || '');
  const expectedBuf = Buffer.from(expectedSig);
  if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) {
    return null;
  }
  const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8'));
  if (!payload.exp || Date.now() > payload.exp) return null;
  return payload;
}

export function respondLink(token, action) {
  return `${SITE_URL}/api/respond?token=${encodeURIComponent(token)}&action=${action}`;
}

let transporter;
export function getTransporter() {
  if (!transporter) {
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    if (!user || !pass) throw new Error('GMAIL_USER / GMAIL_APP_PASSWORD not set');
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });
  }
  return transporter;
}

export async function sendMail({ to, subject, html }) {
  const user = process.env.GMAIL_USER;
  await getTransporter().sendMail({
    from: `Sama Hair Extensions <${user}>`,
    to,
    subject,
    html,
  });
}

export function emailLayout(bodyHtml) {
  return `
  <div style="font-family:Georgia,serif;background:#F5F0EB;padding:32px 16px;">
    <div style="max-width:480px;margin:0 auto;background:#1A1A1A;border-radius:6px;overflow:hidden;">
      <div style="background:#0F0F0F;padding:24px 28px;border-bottom:2px solid #C9A84C;">
        <span style="color:#C9A84C;font-size:20px;letter-spacing:2px;">SAMA HAIR EXTENSIONS</span>
      </div>
      <div style="padding:28px;color:#F5F0EB;font-family:Georgia,serif;line-height:1.6;">
        ${bodyHtml}
      </div>
    </div>
  </div>`;
}
