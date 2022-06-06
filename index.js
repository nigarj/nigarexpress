const express = require('express')
const fs =require("fs")


const app = express()



app.get("/",(req, res)=>{
    fs.readFile('./array.json','utf-8',(err,data)=>{
        res.send(data)
    })
})

app.get("/about",(req,res)=>{
    res.send("This is my about")
})



const PORT =5000
app.listen(PORT,(error)=>{
if(!error){
    console.log(`Server is running on the port ${PORT} `)
}
else{
    console.log("Error");
}
})