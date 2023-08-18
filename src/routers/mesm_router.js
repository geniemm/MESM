const router = require("express").Router();

const mesmCtrl = require("../controller/mesm_ctrl");

router.get("/", mesmCtrl.views.index);
router.get("/mypage", mesmCtrl.views.Mypage);
router.get("/list", mesmCtrl.views.List);

router.get("/insert", mesmCtrl.process.Insert);
router.get("/modify", mesmCtrl.process.Modify);
router.get("/delete", mesmCtrl.process.Delete);

module.exports = router;