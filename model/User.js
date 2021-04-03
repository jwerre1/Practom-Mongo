const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 225
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 225
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 1024
  },
  date: {
    type: Date,
    default: Date.now()
  },
  sets: [{ type: Schema.Types.ObjectId, ref: 'Set' }]
});

module.exports = mongoose.model('User', userSchema);