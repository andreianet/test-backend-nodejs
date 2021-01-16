const express = require('express');
const app = express();
const cors = require('cors');

const database = require('./models/repository');
database.connect();

app.use(cors());
app.use(express.json());

const index = require('./routes/index');
const product = require('./routes/productsRoutes');

app.use("/", index);
app.use("/product", product);

module.exports = app;