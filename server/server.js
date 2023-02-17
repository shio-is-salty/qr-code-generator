const express = require('express');
const app = express();

const QRCode = require('qrcode');

const PORT = 4000;
// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.body)
  next();
});

let qr = ""

app.post('/api/qr', (req, res) => {
  qr = req.body.text;
  QRCode.toDataURL(qr, function (err, url) {
    res.status(200).json({qr: url});
  })
})

app.listen(PORT, () => {
  console.log(`Listening of port: ${PORT}`);
});
