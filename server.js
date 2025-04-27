const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Root route
app.get('/', (req, res) => {
  res.send('✅ USDT.s Price API is live. Visit /price to get the current price.');
});

// Price endpoint
app.get('/price', (req, res) => {
  res.json({
    token: "USDT.s",
    price_usd: 1.00
  });
});

app.listen(port, () => {
  console.log(`USDT.s price API running at http://localhost:${port}`);
});
