const voitures = require("../server.js")
var router = require("express").Router();

router.get("/cars",voitures.findCar)



