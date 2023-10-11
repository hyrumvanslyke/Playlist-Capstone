const express = require("express");
const ViteExpress = require("vite-express");
const db = require('./util/database')
const app = express();


app.use(express.json())

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});



ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
