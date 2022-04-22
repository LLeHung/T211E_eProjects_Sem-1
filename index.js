const express = require("express");
const app = express();
const port = process.env.PORT | 2603;

app.listen(port,function (){
    console.log("server is running...");
});



app.set("view engine","ejs");

app.use(express.static("public"));

app.get("/trang-chu",function (req,res){
    res.render("home");
});

app.get("/san-pham",function (req,res){
    res.render("menu");
});

app.get("/chi-tiet",function (req,res){
    res.render("product");
});

app.get("/gioi-thieu",function (req,res){
    res.render("about");
});

app.get("/lien-he",function (req,res){
    res.render("contact");
});

app.get("/tim-kiem",function (req,res){
    res.render("search");
});

app.get("/cam-on",function (req,res){
    res.render("thank");
});

app.get("/gio-hang",function (req,res){
    res.render("cart");
});


app.get("/loc",function (req,res){
    res.render("filter");
});

app.get("/thanh-toan",function (req,res){
    res.render("payment");
});
