const express = require("express");
// require("dotenv").config();
const now = new Date();
const fs = require("fs");
const app = express();
const port = 3000;


app.use(express.json());

function Requestdetails(req, res, next) {
  const data = `${now.getTime()} \n ${req.method} \n ${req.url} \n ${req.ip} \n ${req.headers["user-agent"]} \n ${req.hostname} \n ${req.protocol}`;
  fs.appendFile("file.txt", data + "\n", (err) => {
    if (err) {
      console.log(err);
    }
  });
  next();
}

app.get("/",Requestdetails, (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
