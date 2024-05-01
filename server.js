const express=require("express");

const app=express();

app.use(express.json());
app.use("/user",require("./routes/user"));
app.use("/product",require("./routes/product"));
app.set("view engine","ejs");

app.listen(5000,(err)=>err?console.log(err):console.log("serveur is runnig successfuly"));