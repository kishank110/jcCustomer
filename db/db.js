const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/jcnew")
  .then(() => {
    console.log("SUCCESS DB");
  })
  .catch((err) => {
    console.log(err);
  });
