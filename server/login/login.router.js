const  webFramework = require("express");
const router = webFramework.Router();

const loginController = require("./login.controller");

router.post("/getToken", loginController.getToken);
router.get("/getUserData", loginController.getUserData);

module.exports = router;