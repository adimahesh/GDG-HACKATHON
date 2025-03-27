import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express()
app.use(express.static(path.join(__dirname, 'Frontend')));
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/Frontend/index.html")
})
app.post("/content",(req,res)=>{
    res.sendFile(__dirname+"/Frontend/first.html")
})
app.post("/main1",(req,res)=>{
    res.sendFile(__dirname+"/Frontend/main.html")
    
})

app.post("/main2",(req,res)=>{
    res.sendFile(__dirname+"/Frontend/scheme.html")
})
app.post("/main3",(req,res)=>{
    res.sendFile(__dirname+"/Frontend/BloodGrp.html")
})
app.post("/main4",(req,res)=>{
    res.sendFile(__dirname+"/Frontend/Apostiv.html")
})
app.post("/main5",(req,res)=>{
    res.sendFile(__dirname+"/Frontend/consultency.html")
})
app.post("/main6",(req,res)=>{
    res.sendFile(__dirname+"/Frontend/constele.html")
})
app.post("/main7",(req,res)=>{
    res.sendFile(__dirname+"/Frontend/consappoint.html")
})

app.listen(port,()=>{
    console.log("server started")
})
