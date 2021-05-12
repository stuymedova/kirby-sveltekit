import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const { KIRBY_URL, KIRBY_USER_EMAIL, KIRBY_USER_PASSWORD } = process.env;

export async function post(req) {
  const url = KIRBY_URL;
  const auth = Buffer.from(`${KIRBY_USER_EMAIL}:${KIRBY_USER_PASSWORD}`).toString('base64');

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
    },
    // body: JSON.stringify(req.body),
  })
  const data = await res.json();

  return {
    status: data.code,
    body: data
  }
}