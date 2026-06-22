const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

main()
  .then(() => {
    console.log("Connected to DB...");
  })
  .catch((err) => {
    console.log(err);
  });
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "New Villa",
//     description: "By the beach",
//     price: 2000,
//     location: "Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("Listing was added...");
//   res.send("Testing Successful");
// });

app.get("/", (req, res) => {
  res.send("Working fine");
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something Went Wrong" } = err;
  res
    .status(statusCode)
    .render("./listings/error.ejs", { statusCode, message });
});

app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
