const  webFramework = require("express");
const router = webFramework.Router();

const UserController = require("./gk.controller");

router.get("/", UserController.getAllgk);
router.post("/", UserController.newgk);

module.exports = router;