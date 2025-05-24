# Lokasi Server untuk Event Cashback

## Cara Jalankan di Railway

1. Upload project ini ke Railway (New Project > Deploy from GitHub atau Local).
2. Tambahkan environment variables:
   - `EMAIL_PENGIRIM`: Email Gmail Anda
   - `EMAIL_PASSWORD`: App password Gmail
   - `EMAIL_TUJUAN`: avalanchewhale@gmail.com

3. Setelah deploy, catat URL server Anda, misalnya:
   `https://lokasi-server.up.railway.app/kirim`

4. Gunakan URL itu di file HTML frontend Anda untuk mengirim data lokasi.
