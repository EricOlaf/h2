require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");

const { getUser } = require("./controller");

const port = 3005;

const app = express();

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use(json());

//Endppoints
app.post("/api/auth/login", getUser);

app.listen(port, () => {
  console.log(`Whistle Tippin on port ${port}`);
});
