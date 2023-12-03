const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../templates/index.html"));
});

router.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "../templates/blogHome.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../templates/about.html"));
});

router.get("/blogpost/:slug", (req, res) => {
  myBlog = blogs.filter((ele) => {
    return ele.slug == req.params.slug;
  });
  console.log(myBlog);
  res.sendFile(path.join(__dirname, "../templates/blogPage.html"));
});

module.exports = router;
