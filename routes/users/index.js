const express = require("express");
const router = express.Router();

const routes = require("./controller");
const { update } = require("../../models/User");

// router.get("/", routes.getRegistration);
router.post("/", routes.userRegistration);
router.get("/", routes.getAllUsers);
router.get("/:id", routes.getUser);
router.delete("/:id", routes.deleteUser);
router.put("/:id", routes.editUser);
// router.put("/", routes.updateRegistration);

module.exports = router;
