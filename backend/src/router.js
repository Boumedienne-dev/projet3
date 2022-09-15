const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const lineControllers = require("./controllers/lineControllers");
const regionControllers = require("./controllers/regionControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/lines", lineControllers.getAll);
router.get("/lines/:id", lineControllers.getById);
router.get("/regions/:id/lines", lineControllers.getWithIdRegion);
router.put("/lines/:id", lineControllers.edit);
router.post("/lines", lineControllers.add);
router.delete("/lines/:id", lineControllers.destroy);

router.get("/regions", regionControllers.browse);
router.get("/regions/:id", regionControllers.read);
router.put("/regions/:id", regionControllers.edit);

module.exports = router;
