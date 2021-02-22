const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/api", require("../people/people.router"));
app.use("/api", require("../pets/pets.router"));
app.use("/api", require("../cats/cats.router"));
app.use("/api", require("../dogs/dogs.router"));

module.exports = app;
