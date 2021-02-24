const express = require("express");
const json = require("body-parser").json();

const People = require("./people.service");

const router = express.Router();

router
  .get("/people", (req, res) => {
    const allPeople = People.get();
    return res.status(200).json(allPeople);
  })

  .post("/people", json, (req, res) => {
    const { name } = req.body;
    const person = name;

    People.enqueue(person);
    res.status(201).json(person);
  })
  .delete("/people", (req, res) => {
    People.dequeue();
    const people = People.get();
    return res.status(201).json(people);
  });

module.exports = router;
