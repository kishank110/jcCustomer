const customerModel = require("../model/Customer");
const addCustomer = async (req, res) => {
  try {
    const {
      FirstName,
      LastName,
      Mob_No,
      Email_address,
      Notes,
      Address,
      Credit_card,
    } = req.body;

    const client = await customerModel.create({
      FirstName,
      LastName,
      Mob_No,
      Email_address,
      Notes,
      Address,
      Credit_card,
    });
    if (client) {
      res.status(200).json(client);
      const result = client.toJSON();
      console.log(result);
    }
  } catch (error) {
    res.json(error.message);
  }
};

const updateCustomerById = async (req, res) => {
  await customerModel
    .updateOne(
      { _id: req.params.id },
      {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Mob_No: req.body.Mob_No,
        Email_address: req.body.Email_address,
        Notes: req.body.Notes,
        Address: req.body.Address,
        Credit_card: req.body.Credit_card,
      }
    )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: err.message });
    });
};

const deleteCustomerById = async (req, res) => {
  await customerModel
    .deleteOne({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: err.message });
    });
};
const getCustomer = async (req, res) => {
  await customerModel
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: err.message });
    });
};
const getCustomerById = async (req, res) => {
  await customerModel
    .find({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: err.message });
    });
};
const updateAddressById = async (req, res) => {
  await customerModel
    .findOneAndUpdate({ _id: req.params.id }, { Address: req.body.Address })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ msg: err.message });
    });
};
module.exports = {
  getCustomerById,
  getCustomer,
  addCustomer,
  updateCustomerById,
  deleteCustomerById,
  updateAddressById,
};
