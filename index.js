const express = require("express");
const app = express();
const port = 3000;
const name = "King Robert";

app.get("/login", (req, res) =>
  res.send(`Hello ${name} welcome to Login Page`)
);

const SignupPage = (req, res) => {
  res.send(`Welcome ${name} to Sign Up Page`);
};

app.post("/signup", SignupPage);

app.put("/update", (req, res) =>
  res.status(200).json(`Hello ${name} Data is updated successfully`)
);

app.put("/delete:id", (req, res) =>
  res.send(`Hello ${name} Data is Deleted Successfully`)
);

app.patch("/books/update:id", (req, res) =>
  res.send(`Hello ${name} Books is Updated Successfully`)
);

app.use("*", (req, res) =>
  res.status(404).send(`Hello ${name} Sorry, Page not found`)
);

app.listen(port, () => console.log(`Server Started on port ${port}!`));
