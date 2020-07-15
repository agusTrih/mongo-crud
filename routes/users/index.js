const express = require("express");
const router = express.Router();

const routes = require("./controller");
const { update } = require("../../models/User");

// router.get("/", routes.getRegistration);
router.post("/", routes.userRegistration);
// router.put("/", routes.updateRegistration);

module.exports = router;
