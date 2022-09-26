const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const lineControllers = require("./controllers/lineControllers");
const regionControllers = require("./controllers/regionControllers");
const cityControllers = require("./controllers/cityControllers");
const activityControllers = require("./controllers/activityControllers");
const themeControllers = require("./controllers/themeControllers");

const userControllers = require("./controllers/userControllers");

const { hashPassword, verifyPassword, verifyToken } = require("./Auth");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/themes", themeControllers.getAll);
router.get("/themes/:id", themeControllers.getById);
router.put("/themes/:id", themeControllers.update);
router.post("/themes", themeControllers.post);
router.delete("/themes/:id", themeControllers.destroy);

router.get("/lines", lineControllers.getAll);
router.get("/lines/:id", lineControllers.getById);
router.get("/regions/:id/lines", lineControllers.getWithIdRegion);
router.put("/lines/:id", lineControllers.edit);
router.post("/lines", lineControllers.add);
router.delete("/lines/:id", lineControllers.destroy);

router.get("/cities", cityControllers.getAll);
router.get("/cities/:id", cityControllers.getById);
router.get("/lines/:id/cities", cityControllers.getWithIdLine);
router.put("/cities/:id", cityControllers.edit);
router.post("/cities", cityControllers.add);
router.delete("/cities/:id", cityControllers.destroy);

router.get("/regions", regionControllers.browse);
router.get("/regions/:id", regionControllers.read);
router.put("/regions/:id", regionControllers.edit);

router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.editWithoutPass);
router.post("/users", hashPassword, userControllers.add);

router.get("/users/:id", userControllers.read);
router.delete("/users/:id", userControllers.destroy);

router.get("/cities/:id/activities", activityControllers.getActivityWithCityId);

router.get("/users", userControllers.browse);
router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);
// MUR
router.use(verifyToken);

module.exports = router;
