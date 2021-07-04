const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then((budgetDB) => {
      res.json(budgetDB);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then((budgetDB) => {
      res.json(budgetDB);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then((budgetDB) => {
      res.json(budgetDB);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = router;
