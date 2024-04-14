const  webFramework = require("express");
const router = webFramework.Router();

const gkitemController = require("./gkitem.controller");

router.get("/", gkitemController.getAllgkitem);
router.get("/:id", gkitemController.getgkitemById);

module.exports = router;