import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/user", (req, res) => {
  res.send({
    firstName: "Courage",
    lastName: "Francis",
    Email: "fran@gmail.com",
    createdAt: "17-03-2004",
    updatedAt: "o9-11-2026",
  });
});

app.get("/user/1", (req, res) => {
  res.status(200).json({
    id: 1,
    firstName: "Courage",
    lastName: "Francis",
    Email: "fran@gmail.com",
    createdAt: "17-03-2004",
    updatedAt: "o9-11-2026",
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
