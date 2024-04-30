const express = require("express");
const { getContact } = require("../controllers/contact.Controller");

const router = express.Router();

router.post("/", getContact);

module.exports = router;
