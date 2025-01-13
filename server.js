const express = require('express');
require("dotenv").config();

const app = express();
const dbConfig = require('./config/dbConfig');

const portfolioRoute = require("./routes/portfolioRoutes");

app.use(express.json());

app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})