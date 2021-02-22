const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/pets", (req, res) => {
  // Return all pets currently up for adoption.
  let response = Pets.get();
  res.json(response);
});

router.delete("/pets", json, (req, res) => {
  // Remove a pet from adoption.
  const { type } = req.body;
  Pets.dequeue(type);
  const pets = Pets.get();
  return res.status(201).json(pets);
});

module.exports = router;
