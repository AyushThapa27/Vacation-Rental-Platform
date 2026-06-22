const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  comment: {
    type: String,
  },
  rating: {
    type: String,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
