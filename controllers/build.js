const express = require("express");
const Build = require("../models/build");

const router = express.Router();

router.get("/", (req, res) => {
  Build.find().then((builds) => {
    res.json(builds);
  });
});

router.get("/:id", (req, res) => {
  Build.findById(req.params.id).then((build) => {
    res.json(build);
  })
})

module.exports = router;