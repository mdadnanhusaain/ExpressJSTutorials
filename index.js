const express = require("express");
const engine = require("express-handlebars");

const app = express();
const port = 3000;
const path = require("path");

app.engine("handlebars", engine.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "routes/blog.js")));

app.listen(port, () => {
  console.log(`Blog App is listening at http://localhost:${port}`);
});
