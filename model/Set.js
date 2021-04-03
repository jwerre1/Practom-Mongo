const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  members: [{ type: Schema.Types.ObjectId, ref: 'Subset' }]
});

module.exports = mongoose.model('Set', setSchema);