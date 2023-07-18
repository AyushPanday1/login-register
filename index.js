const express = require("express");
const route = require("./page/route");
const mongoose = require("mongoose");
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://AyushPanday:AyushPan123@cluster0.eixapeq.mongodb.net/?retryWrites=true&w=majority",
    { UseNewUrlParser: true }
  )
  .then(() => console.log("Mongo-Db is connected"))
  .catch((err) => console.log(err.message));

app.use("/", route);

app.listen(process.env.PORT || 3001, function () {
  console.log("listening at " + (process.env.PORT || 3001));
});