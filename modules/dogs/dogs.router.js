const express = require("express");

const Pets = require("../pets/pets.service");

const router = express.Router();

router.get("/dogs", (req, res) => {
  const cat = Pets.getDog();
  return res.status(200).json(cat);
});

module.exports = router;
