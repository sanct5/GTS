const express =  require("express");
const gameSchema = require("./model");

const router = express.Router();

//--------------------------------- Filtros preestablecidos --------------------------------//

//Obtener todos los juegos de la base de datos
router.get("/getallgames",(req,res) => {
    gameSchema
    .find()
    .limit(200)
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
})

//Obtener juegos mejor valorados
router.get("/getmejorvotados", (req, res) => {
    gameSchema
    .find()
    .sort({ positive: -1 }) 
    .limit(200) 
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//Obtener juegos mas descargados
router.get("/getmasdescargados", (req, res) => {
    gameSchema
        .find()
        .sort({ owners: -1 })
        .limit(200)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

//Obtener juegos más recietes
router.get("/getmasrecientes", (req, res) => {
    gameSchema
    .find()
    .sort({ release_date: -1 }) 
    .limit(200)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//Obtener juegos disponibles en todas las plataformas
router.get("/getmasdisponibles", (req, res) => {
    gameSchema
    .find({ "platforms.windows": true, "platforms.mac": true, "platforms.linux": true })
    .limit(200)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//---------------------------- Filtros ---------------------------------------//

//Obtener juegos filtrados por nombre
router.get("/getpornombre", (req, res) => {
    gameSchema
    .find()
    .limit(1)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//Obtener juegos filtrados por desarrollador
router.get("/getpordesarrollador", (req, res) => {
    gameSchema
    .find()
    .limit(2)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;