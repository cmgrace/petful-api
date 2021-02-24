const express = require("express");
const cors = require("cors");
// const { CLIENT_ORIGIN } = require("../../config");

const app = express();

//app.use(cors());
app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);

app.use("/api", require("../people/people.router"));
app.use("/api", require("../pets/pets.router"));
app.use("/api", require("../cats/cats.router"));
app.use("/api", require("../dogs/dogs.router"));

module.exports = app;
