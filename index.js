const express = require("express");
const app = express();

app.listen(5001, () => {
  console.log("API running on port 5001");
});

app.get("/", (req, res) => {
  return res.statusCode(200).json({ message: "AWS Api running" });
});
