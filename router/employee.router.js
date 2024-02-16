// const express=require("express");
// const employeeRouter=express();

// const bodyParser=require("body-parser");
// employeeRouter.use(bodyParser.json());
// employeeRouter.use(bodyParser.urlencoded({extended:true}));

// employeeRouter.set("view engine","ejs");
// employeeRouter.set("views","./views");

// const employeecontroller=require("../controllers/employeecontroller");

// employeeRouter.get("/register",function(req,res){
// res.render("register");
// });

// employeeRouter.post("/register",employeecontroller.insertEmployee);
// module.exports=employeeRouter;

const express = require("express");
const employeeRouter = express.Router();
const employeeController = require("../controllers/employeecontroller");


employeeRouter.post("/register", employeeController.insertEmployee);

module.exports = employeeRouter;
