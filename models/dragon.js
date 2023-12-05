const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DragonSchema = new Schema({
  name: { type: String, required: true, minLength: 1, maxLength: 40 },
  price: { type: Number,  required: true, min: 1, max: 100000 },
  description: { type: String, required: true, minLength: 1, maxLength: 300 },
  category: { type: String, enum: ['Egg', 'Young', 'Adolescent', 'Adult' ], required: true },
  url: {type: String, required: true}
});

// Virtual for Dragon's URL
DragonSchema.virtual("pageurl").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/dragon/${this._id}`;
});

// Export model
module.exports = mongoose.model("Dragon", DragonSchema);
