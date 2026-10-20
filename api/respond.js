import { verifyBookingToken, sendMail, emailLayout } from './_lib.js';

function htmlPage({ title, message, ok }) {
  return `<!doctype html>
<html lang="en-GB"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${title}</title></head>
<body style="margin:0;background:#F5F0EB;font-family:Georgia,serif;">
  <div style="max-width:480px;margin:60px auto;background:#1A1A1A;border-radius:6px;padding:40px 32px;text-align:center;color:#F5F0EB;">
    <div style="color:${ok ? '#C9A84C' : '#E08'};font-size:40px;margin-bottom:16px;">${ok ? '✓' : '✕'}</div>
    <h1 style="color:#C9A84C;font-size:22px;margin:0 0 12px;">${title}</h1>
    <p style="line-height:1.6;color:#F5F0EB;">${message}</p>
  </div>
</body></html>`;
}

export default async function handler(req, res) {
  const { token, action } = req.query;

  const booking = verifyBookingToken(token);
  if (!booking) {
    res.setHeader('Content-Type', 'text/html');
    return res.status(400).send(htmlPage({
      title: 'Link expired or invalid',
      message: 'This booking link is no longer valid. Please contact the client directly if needed.',
      ok: false,
    }));
  }

  if (action !== 'approve' && action !== 'decline') {
    res.setHeader('Content-Type', 'text/html');
    return res.status(400).send(htmlPage({
      title: 'Invalid action',
      message: 'This link is malformed.',
      ok: false,
    }));
  }

  const approved = action === 'approve';

  try {
    const customerHtml = emailLayout(approved ? `
      <h2 style="color:#C9A84C;margin:0 0 16px;">Your appointment is confirmed!</h2>
      <p><strong>Service:</strong> ${booking.service}<br/>
      <strong>Date:</strong> ${booking.date}<br/>
      <strong>Time:</strong> ${booking.time}</p>
      <p>We look forward to seeing you. If you need to reschedule, just reply to this email or reach out on WhatsApp.</p>
    ` : `
      <h2 style="color:#C9A84C;margin:0 0 16px;">About your booking request</h2>
      <p>Unfortunately the requested slot (<strong>${booking.date} at ${booking.time}</strong>) isn't available.</p>
      <p>Please get in touch so we can find a time that works — reply to this email or message on WhatsApp.</p>
    `);

    await sendMail({
      to: booking.email,
      subject: approved ? 'Your appointment is confirmed! — Sama Hair Extensions' : 'About your booking request — Sama Hair Extensions',
      html: customerHtml,
    });

    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(htmlPage({
      title: approved ? 'Booking approved' : 'Booking declined',
      message: `${booking.name} has been emailed and the appointment is now ${approved ? 'confirmed' : 'declined'}.`,
      ok: true,
    }));
  } catch (err) {
    console.error('respond.js error:', err);
    res.setHeader('Content-Type', 'text/html');
    return res.status(500).send(htmlPage({
      title: 'Something went wrong',
      message: 'The client could not be emailed automatically. Please contact them directly.',
      ok: false,
    }));
  }
}
