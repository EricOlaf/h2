// import { register } from "../src/serviceWorker";
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");

const {
  getUser,
  getPosts,
  posted,
  deleted,
  editPost,
  registerUser
} = require("./controller");

const serverPort = 3005;

const app = express();

app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use(json());

//Endppoints
app.post("/api/auth/login", getUser);
app.get("/api/dashboard/posts", getPosts);
app.post("/api/newpost", posted);
app.delete("/api/dahsboard/delete:id", deleted);
app.put("/api/posts/edit:id", editPost);
app.post("/api/register", registerUser);

app.listen(serverPort, () => {
  console.log(`Whistle Tippin on port ${serverPort}`);
});
