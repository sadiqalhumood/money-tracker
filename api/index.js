const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/transactions.js');
const app = express();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
  res.json('test ok');
});

app.post('/api/transaction', async (req, res) => {
  await mongoose.connect('process.env.MONGO_URL');
  const { name, desc, datetime } = req.body;
  const transaction = await Transaction.create({ name, desc, datetime })
  res.json(transaction);
});

app.listen(4040);

