//ECRIRE npm run dev POUR SE CONNECTER A MONGODB car c'est ce que le gars de la video a fait un code dans ce ses

const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

//A l'interieur il y a nos différentes routes handlers qui sont liés aux taskControllers.js
const routes = require("./routes/TaskRoutes")

const cors= require("cors");

const app= express()

const PORT = process.env.PORT | 5000; // should listen here: http://localhost:5000

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB Connected...'))
.catch((err)=>console.log(err)); //If there is an error it will log err

//on appelle la variable route qui importe toutes les routes handlers du file TaskRoutes
app.use("/api",routes);//SO NOW THE URL WILL BE /api/get

//ecrire à la fin du script
app.listen(PORT, ()=>console.log(`Listening at ${PORT}`))//Va ecrire Listening to Port 5000 quand le server sera connecté

