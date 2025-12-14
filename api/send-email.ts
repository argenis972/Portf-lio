import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import cors from 'cors'; // Necesario para peticiones desde GitHub Pages


// api/send-email.ts


// 1. Configuração de CORS
// Adicione a URL base do seu GitHub Pages AQUi
const allowedOrigins = [
    'https://argenis972.github.io', // Não mude este, pois é a origem
    'https://argenis972.github.io/Portf-lio', // Não precisa, pois o CORS usa apenas a raiz
    'http://localhost:5173'
];

const corsMiddleware = cors({
    origin: (origin, callback) => {
        // ... (O restante da lógica de CORS que você já tem) ...
        if (!origin) return callback(null, true);
        // Usamos startsWith para cobrir caminhos como /Portf-lio/
        if (allowedOrigins.includes(origin) || origin.startsWith('https://argenis972.github.io/')) { 
            return callback(null, true);
        }
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
    },
    methods: ['POST'],
    optionsSuccessStatus: 200,
});


// 2. Handler principal de Vercel
export default async function (req: VercelRequest, res: VercelResponse) {
  // Aplicar CORS
  try {
    await runMiddleware(req, res, corsMiddleware);
  } catch (error) {
    return res.status(403).json({ success: false, message: 'CORS check failed.' });
  }

  // Solo aceptar peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // 3. Validación básica
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields: name, email, or message.' });
  }

  // 4. Configuración del Transporter de Nodemailer con OAuth2
  // Las credenciales se obtienen de las variables de entorno de Vercel
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USER, // Tu correo de Gmail
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN, // Opcional, pero recomendado
    },
  } as nodemailer.TransportOptions); // Usamos 'as' para evitar problemas de tipado con Vercel/Node

  // 5. Opciones del correo
  const mailOptions = {
    from: `"Portafolio Contacto" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER, // Te lo envías a ti mismo
    subject: `Nuevo mensaje de ${name} desde tu portafolio`,
    html: `
      <h2>Nuevo Mensaje</h2>
      <p><strong>De:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  };

  // 6. Envío del correo
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email.', error: (error as Error).message });
  }
}