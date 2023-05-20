const express = require('express'); 
const mongoose = require('mongoose');
const routes = require('./querys/routes');
const cors = require('cors');
require("dotenv").config();

const app = express();  
const port = process.env.PORT || 3001;  

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api",routes);
//Rutas
app.get("/",(req,res) => {
    res.send("Servidor ejecutado");
});

//Conexión con mongodb
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado exitosamente"))
    .catch((error) => console.error(error))

app.listen(port, () => console.log("Escuchando desde el puerto",port));