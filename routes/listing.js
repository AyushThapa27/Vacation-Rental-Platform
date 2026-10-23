const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const { storage, cloudinary } = require("../cloudconfig.js");

const multer = require("multer");
const upload = multer({ storage });

const Listing = require("../models/listing.js");
const {
  index,
  renderNewForm,
  showListing,
  createListing,
  renderEditForm,
  updateListing,
  deleteListing,
} = require("../controllers/listing.js");

//all listing route
router.get("/", wrapAsync(index));

//new route
router.get("/new", isLoggedIn, renderNewForm);

//show route
router.get("/:id", wrapAsync(showListing));

// //create route
router.post(
  "/",
  isLoggedIn,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(createListing),
);

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(renderEditForm));

//update route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(updateListing),
);

//delete route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(deleteListing));

module.exports = router;
