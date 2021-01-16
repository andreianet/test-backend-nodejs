const express = require('express');
const app = express();
const cors = require('cors');


const database = require('./models/repository');
database.conect();

app.use(cors());
app.use(express.json());

const index = require('./routes/index');

app.use("/", index);


module.exports = app;