const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Data portofolio Joko Pitoyo / Arwis
const portfolioData = {
  name: "Joko Pitoyo",
  title: "Profesional IT",
  experienceYears: 10,
  education: "Sistem Informasi — Universitas Terbuka (2027)",
  bio: "Lulusan Sistem Informasi Universitas Terbuka dengan pengalaman 10 tahun sebagai staf IT office di lingkungan ritel. Terbiasa bekerja teliti, menjaga koordinasi, serta tetap fokus dan adaptif saat menghadapi tekanan maupun perubahan prioritas.",
  skills: ["Node.js", "VB.NET", "MySQL", "Microsoft Office", "System Administration", "Problem Solving"],
  whatsapp: "6287833072945",
  whatsappFormatted: "0878 3307 2945",
  awards: [
    {
      number: "01",
      title: "Best Officer",
      organization: "Indomaret",
      image: "https://lh3.googleusercontent.com/d/1iy57qluWRUY1h5yG3bwyzR9qS3pzu_5M=w1200",
      href: "https://drive.google.com/file/d/1iy57qluWRUY1h5yG3bwyzR9qS3pzu_5M/view?usp=drive_link"
    },
    {
      number: "02",
      title: "Best Officer",
      organization: "Indomaret",
      image: "https://lh3.googleusercontent.com/d/1LYk6KOYqPSiEn2mDZHFAMR9WhTuhXgmu=w1200",
      href: "https://drive.google.com/file/d/1LYk6KOYqPSiEn2mDZHFAMR9WhTuhXgmu/view?usp=drive_link"
    }
  ]
};

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); // Atau kita pakai HTML biasa/SSR ringan

// Route API data untuk frontend interaktif jika dibutuhkan
app.get('/api/data', (req, res) => {
  res.json(portfolioData);
});

app.listen(PORT, () => {
  console.log(`Server portofolio berjalan di http://localhost:${PORT}`);
});
