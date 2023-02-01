const express = require("express");
const app = express();

app.use(express.static("./public"));
app.set("views", __dirname);
app.set("view engine", "ejs");

const equipmentsDb = require("./equipments~db");
const accessoriesDb = require("./accessories~db");
const supplies = require("./suppplies~db");
const parts = require("./parts~db");

app.get("/", (req, res) => res.sendFile("public/index.html", { root: "./" }));

//equipment
app.get("/equipment-dark-room", (req, res) => {
  res.render("product-grid.ejs", equipmentsDb.darkRoom);
});
app.get("/equipment-exam-room", (req, res) => {
  res.render("product-grid.ejs", equipmentsDb.examRoom);
});

//accessories
app.get("/accessories-lead-marker", (req, res) => {
  res.render("product-grid.ejs", accessoriesDb.leadMarker);
});
app.get("/accessories-exam-room", (req, res) => {
  res.render("product-grid.ejs", accessoriesDb.examRoom);
});

//supplies
app.get("/supplies", (req, res) => {
  res.render("simple-product-grid.ejs", supplies);
});
app.get("/parts", (req, res) => {
  res.render("simple-product-grid.ejs", parts);
});

//parts

const PORT = 3000;
app.listen(PORT, () => console.log("listening in port", PORT));
