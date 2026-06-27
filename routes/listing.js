const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const Listing = require("../models/listing.js");

//all listing route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    let allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
  }),
);

//new route
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new");
});

//show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id)
      .populate("reviews")
      .populate("owner");
    if (!listing) {
      req.flash("error", "Requested Listing does not exists");
      return res.redirect("/listings");
    }
    console.log(listing);
    res.render("./listings/show.ejs", { listing });
  }),
);

//create route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res) => {
    let listing = req.body.listing;
    let newListing = new Listing(listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
  }),
);

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Requested Listing does not exists");
      return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  }),
);

//update route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
  }),
);

//delete route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing deleted...");
    res.redirect("/listings");
  }),
);

module.exports = router;
