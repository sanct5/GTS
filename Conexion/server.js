const express = require('express'); 
const mongoose = require('mongoose');
const routes = require('./querys/routes');

const app = express();  
const port = process.env.PORT || 3001;  


//middlewares

app.use("/",routes)
//Rutas
app.get("/",(req,res) => {
    res.send("Servidor ejecutado");
});

//Conexión con mongodb

mongoose.connect('mongodb+srv://invitado:BtPL5T0AxBiI9qlG@cluster0.kdttu6h.mongodb.net/Proyecto?retryWrites=true&w=majority');

app.listen(port, () => console.log("Escuchando desde el puerto",port));