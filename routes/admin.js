// All Requires
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Handling The Router For The Admin Login
router.post("/login", adminController.adminLogin);

// Exporting The Router
module.exports = router;
