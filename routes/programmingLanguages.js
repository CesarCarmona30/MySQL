const express = require("express");
const router = express.Router();
const programingLanguages = require("../services/programmingLanguages");

router.get("/", async function (req, res, next) {
  try {
    res.json(await programingLanguages.read(req.query.page));
  } catch (err) {
    console.error(`Este es el error: ${err.message}`);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await programingLanguages.create(req.body));
  } catch (err) {
    console.error(`Este es el error: ${err.message}`);
    next(err);
  }
});

router.put("/", async function (req, res, next) {
  try {
    res.json(await programingLanguages.update(req.body.id, req.body));
  } catch (err) {
    console.error(`Este es el error: ${err.message}`);
    next(err);
  }
});

router.delete("/", async function (req, res, next) {
  try {
    res.json(await programingLanguages.delete_(req.query.position));
  } catch (err) {
    console.log(`Este es el error: ${err.message}`);
    next(err);
  }
});

module.exports = router;
