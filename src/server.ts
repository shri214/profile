import express from 'express';
import path from 'path';

const app = express();
const port = 3001;

const pdfPath = path.join(__dirname,'profile', 'src','Components','Resume', 'resume.pdf');

app.get('/download/:filename', (req, res) => {
  const { filename } = req.params;
  res.download(pdfPath, `${filename}.pdf`);
});

app.get('/open/:filename', (req, res) => {
  const { filename } = req.params;
  res.sendFile(pdfPath, { headers: { 'Content-Type': 'application/pdf' } });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
