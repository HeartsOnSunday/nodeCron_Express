const express = require("express");
const router = express.Router();
const mainWorker = require("../workers/mainWorker.js");

router.get("/", (req, res) => {
  res.json({ Status: "Main Squeeze" });
});

router.get("/start", (req, res) => {
  if (mainWorker.running) {
    return res.json({ status: "Started Worker" });
  }
  mainWorker.start();
  res.json({ status: "Work it" });
});

router.get("/stop", (req, res) => {
  mainWorker.stop();
  res.json({ status: "Do not work it" });
});

module.exports = router;
