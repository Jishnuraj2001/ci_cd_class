const app=require("express")();

app.get("/",(req,res)=>{
    res.send("Hello World!");
})


app.listen(4080,()=>{
    console.log("running at port 4080");
})