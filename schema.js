const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BookSchema = new Schema({
  String: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  date: {
    type: Date,
    default: Date.now
  }

  
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
