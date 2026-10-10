const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

const { createReview, deleteReview } = require("../controllers/review.js");

//Reviews
//create review
router.post("/", isLoggedIn, validateReview, wrapAsync(createReview));

//delete review
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(deleteReview),
);

module.exports = router;
