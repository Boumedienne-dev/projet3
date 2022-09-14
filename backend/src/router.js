const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const regionControllers = require("./controllers/regionControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/regions", regionControllers.browse);
router.get("/regions/:id", regionControllers.read);
router.put("/regions/:id", regionControllers.edit);

module.exports = router;
