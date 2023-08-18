const views = {
    index : (req,res)=>{
        res.send("index연동");
    },
    Mypage : (req,res)=>{
        res.render("mypage");
    },
    List : (req, res) => {
        res.render("list");
    },
    
}

const process ={
    Insert : (req, res) => {
        res.render("insert");
    },
    Modify : (req, res) => {
        res.render("modify");
    },
    Delete : (req, res) => {
        res.render("delete");
    }
}

module.exports = {views, process}