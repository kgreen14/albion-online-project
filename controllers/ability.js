const express = require("express");
const Ability = require("../models/ability");

const router = express.Router();

router.get("/", (req, res) => {
  Ability.find().then((abilities) => {
    res.json(abilities);
  });
});

router.get("/:id", (req, res) => {
  Ability.findById(req.params.id).then((ability) => {
    res.json(ability);
  })
})

module.exports = router;