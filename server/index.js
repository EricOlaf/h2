require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");

const { getUser, getPosts } = require("./controller");

const serverPort = 3005;

const app = express();

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use(json());

//Endppoints
app.post("/api/auth/login", getUser);
app.get("/api/dashboard/posts", getPosts);

app.listen(serverPort, () => {
  console.log(`Whistle Tippin on port ${serverPort}`);
});
