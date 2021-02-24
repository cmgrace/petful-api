const express = require("express");
const cors = require("cors");
const { CLIENT_ORIGIN } = require("../../config");

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

app.use(function errorHandler(error, req, res, next) {
  let response;
  console.error(error);
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
