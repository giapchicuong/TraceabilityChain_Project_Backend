require("dotenv").config();
// import express from "express";
// import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";
// import initApiRoutes from "./routes/api";
// import configCors from "./config/cors";
// import connection from "./config/connectDB";
const express = require("express");
const bodyParser = require("body-parser").config();
const cookieParser = require("cookie-parser").config();
const initApiRoutes = require("./routes/api");
const configCors = require("./config/cors");
const connection = require("./config/connectDB");

const app = express();

const PORT = process.env.PORT || 8080;

// config corn
configCors(app);

// config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config cookie parser
app.use(cookieParser());

//test connection
connection();

// init api routes
initApiRoutes(app);

app.use((req, res) => {
  return res.send("404 not found");
});

app.listen(PORT, () => {
  console.log("JWT Backend running on the port = " + PORT);
});
