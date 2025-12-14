import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import cors from 'cors';

const corsMiddleware = cors({ origin: '*' });

function runMiddleware(
  req: VercelRequest,
  res: VercelResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  await runMiddleware(req, res, corsMiddleware);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER,
      subject: `Contacto Portfolio: ${name}`,
      text: `Email: ${email}\n\n${message}`,
      replyTo: email,
    });

    res.status(200).json({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Error enviando correo' });
  }
}
