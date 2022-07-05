const express = require("express");
const path = require("path");
const ejs = require("ejs");
const fs = require("fs");
const expressejslayouts = require("express-ejs-layouts");
const body_parser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public", "css")));
app.use("/deneme-tool", (req, res) => {
  var tool_source;
  fs.readFile(path.join("public/js/deneme.txt"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    tool_source = data;
  });
  res.render("tool-ui", { tool_source: tool_source });
});
app.use("/", (req, res) => {
  let tool_url = "deneme-tool";

  let tools = [
    {
      tool_url: `/${tool_url}`,
      tool_img: "../images/demo-img.jpg",
      tool_name: "tool",
      tool_description: "its tool",
    },
    {
      tool_url: `/${tool_url}`,
      tool_img: "/images/demo-img.jpg",
      tool_name: "tool 2",
      tool_description: "its tool 2",
    },
  ];
  let categories = [{ category_url: "/", category_name: "category" }];
  let top_ten_tool = [{ tool_url: "/", tool_name: "tool" }];
  let authors = [{ author_profile_url: "/", author_name: "author" }];
  res.render("main", {
    tools: tools,
    categories: categories,
    top_ten_tool: top_ten_tool,
    authors: authors,
  });
});
app.use(expressejslayouts);
app.listen(3000, "127.0.0.1", (error) => {
  if (error) {
    console.log("An error among us");
  }
  console.log("server is running on 3000 port server is 127.0.0.1");
});
