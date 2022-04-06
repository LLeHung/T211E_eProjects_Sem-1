const express = require("express");
const app = express();
const port = process.env.PORT | 2603;

app.get("/",function (req,res){
    res.render("home");
});

app.get("/danh-muc",function (req,res){
    res.render("danh muc");
});
app.get("/login",function (req,res){
    res.render("login");
});