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

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const pageRoutes = require('./routes/page');
const verifyToken = require('./routes/validate');

app.use(express.json());

app.use('/auth', authRoutes);

app.use('/admin', verifyToken, adminRoutes);

app.use('/main', verifyToken, pageRoutes);

app.listen(3000, () => console.log("server running"));