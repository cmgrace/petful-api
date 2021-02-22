const express = require("express");

const Pets = require("../pets/pets.service");

const router = express.Router();

router.get("/cats", (req, res) => {
  const cat = Pets.getCat();
  return res.status(200).json(cat);
});

module.exports = router;
