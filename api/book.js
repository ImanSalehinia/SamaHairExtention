import { createBookingToken, respondLink, sendMail, emailLayout } from './_lib.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, date, time, notes } = req.body || {};

    if (!name || !email || !service || !date || !time) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    const booking = { name, email, phone: phone || '', service, date, time, notes: notes || '' };
    const token = createBookingToken(booking);
    const approveUrl = respondLink(token, 'approve');
    const declineUrl = respondLink(token, 'decline');

    const adminHtml = emailLayout(`
      <h2 style="color:#C9A84C;margin:0 0 16px;">New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || '—'}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Notes:</strong> ${notes || '—'}</p>
      <div style="margin-top:28px;">
        <a href="${approveUrl}" style="display:inline-block;background:#C9A84C;color:#0F0F0F;padding:12px 28px;text-decoration:none;font-weight:bold;border-radius:4px;margin-right:12px;">Approve</a>
        <a href="${declineUrl}" style="display:inline-block;background:transparent;color:#C9A84C;padding:12px 28px;text-decoration:none;font-weight:bold;border-radius:4px;border:1px solid #C9A84C;">Decline</a>
      </div>
      <p style="margin-top:20px;font-size:12px;color:#9E9E9E;">This link expires in 14 days.</p>
    `);

    const customerHtml = emailLayout(`
      <h2 style="color:#C9A84C;margin:0 0 16px;">Thanks, ${name}!</h2>
      <p>Your booking request has been received:</p>
      <p><strong>Service:</strong> ${service}<br/>
      <strong>Date:</strong> ${date}<br/>
      <strong>Time:</strong> ${time}</p>
      <p>Sama will confirm your appointment shortly — you'll get a follow-up email once it's approved.</p>
    `);

    await sendMail({
      to: process.env.GMAIL_USER,
      subject: `New booking request — ${name} (${date})`,
      html: adminHtml,
    });

    await sendMail({
      to: email,
      subject: 'Your booking request — Sama Hair Extensions',
      html: customerHtml,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('book.js error:', err);
    return res.status(500).json({ error: 'Failed to send booking request' });
  }
}
