const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructionSchema = new Schema({
  member: {
    type: String,
    required: true
  },
  subset: { type: Schema.Types.ObjectId, ref: 'Subset' },
});

module.exports = mongoose.model('Instruction', instructionSchema);

