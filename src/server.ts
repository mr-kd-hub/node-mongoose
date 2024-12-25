import express from "express";
import mongoose from "mongoose";
import * as userService from "./service/user.service";
import * as todoService from "./service/todo.service";
import auth from "./auth.middleware";
const app = express();
app.use(express.json());

//mongodb://localhost:27017
app.use((req, res, next) => {
  console.log(`Request ${req.method} and api ${req.url}`);
  next();
});
app.post("/reg", userService.registerUser);
app.post("/login", userService.login);
app.post("/upsert",auth, todoService.upsertToDo);
app.post("/list",auth, todoService.fetchTodo);
mongoose
  .connect("mongodb://localhost:27017/tododB")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
  });

app.listen(8000, () => {
  console.log("server is running", 8000);
});
