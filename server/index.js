require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");

const port = 3005;

const app = express();

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use(json());

app.listen(port, () => {
  console.log(`Whistle Tippin on port ${port}`);
});
