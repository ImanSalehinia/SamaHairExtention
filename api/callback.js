const SITE_URL = process.env.SITE_URL || 'https://samahair.co.uk';

function htmlEscape(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

export default async function handler(req, res) {
  const { code, error, error_description: errorDescription } = req.query;
  res.setHeader('Content-Type', 'text/html');

  if (error) {
    return res.status(400).send(`<p>Authentication error: ${htmlEscape(errorDescription || error)}</p>`);
  }

  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return res.status(500).send('<p>OAUTH_CLIENT_ID / OAUTH_CLIENT_SECRET are not set</p>');
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: `${SITE_URL}/api/callback`,
      }),
    });
    const tokenData = await tokenRes.json();

    if (tokenData.error) {
      return res.status(400).send(`<p>Authentication error: ${htmlEscape(tokenData.error_description || tokenData.error)}</p>`);
    }

    const payload = JSON.stringify({ token: tokenData.access_token, provider: 'github' });

    const content = `
      <!doctype html>
      <html><body>
      <script>
        (function() {
          function receiveMessage(message) {
            window.opener.postMessage(
              'authorization:github:success:${payload}',
              message.origin
            );
            window.removeEventListener('message', receiveMessage, false);
          }
          window.addEventListener('message', receiveMessage, false);
          window.opener.postMessage('authorizing:github', '*');
        })();
      </script>
      </body></html>
    `;

    return res.status(200).send(content);
  } catch (err) {
    console.error('callback.js error:', err);
    return res.status(500).send('<p>Something went wrong completing sign-in. Please try again.</p>');
  }
}
