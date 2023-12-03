const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// const adnanMiddleWare = (req, res, next) => {
//   console.log(req);
//   next();
// };

app.use(express.static(path.join(__dirname, "public")));
// app.use(adnanMiddleWare);

app.get("/hello/:name", (req, res) => {
  res.send("Hello World! How are you "+ req.params.name);
});

app.get("/about", (req, res) => {
  //   res.send("This is the about page");
  //   res.sendFile(path.join(__dirname, "index.html"));
  //   res.status(500);
  res.json({ adnan: 22, college: "Chandigarh University" });
});

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
