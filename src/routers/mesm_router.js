const router = require("express").Router();

const mesmCtrl = require("../controller/mesm_ctrl");

router.get("/",mesmCtrl.views.index);
module.exports = router;