module.exports = (app) =>{
    const pageRouter = require("../routers/mesm_router");
    app.use("/",pageRouter);

    const router = require("express").Router();
    router.get("/",(req,res)=>{
        res.send("기본페이지 연동");

    })
    return router;
}