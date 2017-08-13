const express = require("express");
const Item = require("../models/item");

const router = express.Router();

router.get("/item", (req, res) => {
  Item.find().then((items) => {
    res.json(items);
  });
});

router.get("/item/:id", (req, res) => {
  Item.findById(req.params.id).then((item) => {
    res.json(item);
  })
})

module.exports = router;