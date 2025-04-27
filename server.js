const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/price', (req, res) => {
  res.json({
    token: "USDT.s",
    price_usd: 1.00
  });
});

app.listen(port, () => {
  console.log(`USDT.s price API running at http://localhost:${port}`);
});
