const express = require("express");
const app = express();
const PORT = 5001;

const predefinedStocks = ["APL", "GGL", "AMZ", "MS", "TATA"];

const getRandomPrice = () => {
  return (Math.random() * 1000).toFixed(2);
};
// Define API endpoint to fetch stock prices.
app.get("http://localhost:3000/", (req, res) => {
  const stockPrices = {};

  predefinedStocks.forEach((stock) => {
    stockPrices[stock] = getRandomPrice();
  });

  res.json(stockPrices);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
