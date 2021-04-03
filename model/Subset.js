const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subsetSchema = new Schema({
  subtitle: {
    type: String,
    required: true
  },
  set: { type: Schema.Types.ObjectId, ref: 'Set' },
  members: [{ type: Schema.Types.ObjectId, ref: 'Instruction' }]
});

module.exports = mongoose.model('Subset', subsetSchema);