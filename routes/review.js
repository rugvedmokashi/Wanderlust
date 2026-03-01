const express = require("express");
const router = express.Router({ mergeParams: true }); 
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview,isLoggedIn,isReviewAuthor } = require("../middlewares.js");
const reviewController = require("../controllers/reviews.js");
const review = require("../models/review.js");


// 1. Define validateReview HERE, before the routes use it

// 2. Now the POST route can successfully use validateReview
router.post("/", validateReview, wrapAsync(reviewController.createReview));

// DELETE Route 
router.delete("/:reviewId",isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;