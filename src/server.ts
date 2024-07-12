import * as dotenv from "dotenv";
dotenv.config();
import commentRoutes from "./routes/comment.routes";
const express = require('express');
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());

app.use('/comment', commentRoutes);

app.listen(3000, ()=>{
    console.log("Iniciado na rota 3000");
})