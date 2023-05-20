const express =  require("express");
const gameSchema = require("./model");

const router = express.Router();

//Obtener todos los juegos de la base de datos
router.get("/getallgames",(req,res) => {
    gameSchema
    .find()
    .limit(200)
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
})

module.exports = router;