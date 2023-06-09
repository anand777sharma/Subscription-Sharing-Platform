import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./db.js";


const app = express();

app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));


const PORT = 8000;

Connection();

app.listen(PORT,()=>console.log(`your server is running Successfully on PORT ${PORT}`));