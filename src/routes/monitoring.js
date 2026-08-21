const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("App Web Monitoring.");
});

router.get("/about", (req, res) => {
  res.send("System Monitor - Proyecto de monitoreo");
});
module.exports = router;