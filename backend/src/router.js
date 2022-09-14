const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const lineControllers = require("./controllers/lineControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/lines", lineControllers.browse);
router.get("/lines/:id", lineControllers.read);
router.put("/lines/:id", lineControllers.edit);
router.post("/lines", lineControllers.add);
router.delete("/lines/:id", lineControllers.destroy);
module.exports = router;
