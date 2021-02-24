const express = require("express");
const catsService = require("./cats-service");
const router = express.Router();

router
  .get("/cats", (req, res) => {
    const cat = catsService.getCat();
    return res.status(200).json(cat);
  })
  .delete("/cats", (req, res) => {
    catsService.dequeue();
    res.status(200).end();
  });

module.exports = router;
