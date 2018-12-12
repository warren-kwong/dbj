const mongoose = require('mongoose');
require('../').mongodb;

const spreadSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user'
    }
    // isArchived: boolean // true = hidden
    // type: ['Calendar', 'photo']
  },
  { timestamps: true }
);

const Spread = mongoose.model('spread', spreadSchema);

module.exports = Spread;
