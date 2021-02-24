const express = require("express");
const dogsService = require("./dogs-services");
const router = express.Router();

router
  .get("/dogs", (req, res) => {
    const cat = dogsService.getDog();
    return res.status(200).json(cat);
  })

  .delete("/dogs", (req, res) => {
    dogsService.dequeue();
    res.status(200).end();
  });

module.exports = router;
