const mongoose = require("mongoose");

var SchemaDefined = mongoose.Schema;

var SchemaObject = new SchemaDefined ({
  name: {
    type: String,
    trim: true
  },

  date: {
    type: Date,
    default: Date.now
  },

  value: {
    type: Number
  }

});

const newSchema = mongoose.model("", SchemaObject);

module.exports = newSchema;
