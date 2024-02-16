// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/company");

// const express = require("express");
// const employeeRouter = require("./router/employee.router");
// const employeeRouter=require("./router/employee.router");
// app.use("/",employeeRouter)



// app.listen(3000, function () {
//     console.log("server is run");
// })
const mongoose = require("mongoose");
const express = require("express");
const employeeRouter = require("./router/employee.router");
const cors=require("cors");
mongoose.connect("mongodb://127.0.0.1:27017/company");

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))
//comment for git hub by siddhi
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/", employeeRouter);

//function for launching
app.listen(3000, function () {
    console.log("server is running");
});

