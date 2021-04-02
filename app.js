const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to db")
);

const userRoutes = require('./routes/user');
const pageRoutes = require('./routes/page');
const verifyToken = require('./routes/validate');

app.use(express.json());

app.use('/user', userRoutes);

app.use('/main', verifyToken, pageRoutes);

app.listen(3000, () => console.log("server running"));