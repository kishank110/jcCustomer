const mongoose = require("mongoose");
const cusSchema = mongoose.Schema({
  FirstName: String,
  LastName: String,
  Mob_No: Number,
  Email_address: String,
  Notes: String,
  Address: [{ Line1: String, Line2: String, City: String }],
  Credit_card: [{ type: Number }],
});

const customer = mongoose.model("Customer", cusSchema);
module.exports = customer;
