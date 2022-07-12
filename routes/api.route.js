const {
  addCustomer,
  getCustomer,
  getCustomerById,

  updateCustomerById,
  deleteCustomerById,
  updateAddressById,
} = require("../controllers/customers");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.route("/addCustomer").post(addCustomer);
router.route("/getCustomer").get(getCustomer);
router.route("/getCustomerById/:id").get(getCustomerById);
router.route("/updateCustomerById/:id").put(updateCustomerById);

router.route("/updateAddressById/:id").patch(updateAddressById);
router.route("/deleteCustomerById/:id").delete(deleteCustomerById);
module.exports = router;
