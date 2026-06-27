const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

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

async function initDB() {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6a3e87e76cc47748e0358fcb",
  }));
  await Listing.insertMany(initData.data);
  console.log(initData.data);
}

initDB();
