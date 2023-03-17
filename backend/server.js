const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser")
const routes = require("./routes/toDoRoute");
const cors = require("cors");

require("dotenv").config();

const app = express();
PORT = process.env.port || 5000;

// app.use(bodyParser.urlencoded());

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.Mongodb_URL, { useNewUrlParser: true })
  .then(() => console.log("successfully running"))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`listening on: ${PORT}`));
