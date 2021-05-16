import dotenv from 'dotenv';
dotenv.config();

const { API_URL, API_USER_EMAIL, API_USER_PASSWORD } = process.env;

export async function post(req) {
  const url = API_URL;
  const auth = Buffer.from(`${API_USER_EMAIL}:${API_USER_PASSWORD}`).toString('base64');

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
    },
    // body: JSON.stringify(req.body),
  });
  const data = await res.json();

  return {
    status: data.code,
    body: data
  }
}