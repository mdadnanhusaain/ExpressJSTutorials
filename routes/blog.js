const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/blog", (req, res) => {
  res.render("blogHome", {
    blogs: blogs,
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/blogpost/:slug", (req, res) => {
  myBlog = blogs.filter((ele) => {
    return ele.slug == req.params.slug;
  });

  res.render("blogPage", {
    title: myBlog[0].title,
    content: myBlog[0].content,
    language: myBlog[0].language,
  });
});

module.exports = router;
