const express = require('express')   
const app = express()                      
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://invitado:BtPL5T0AxBiI9qlG@cluster0.kdttu6h.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString)
.then(client => {
    console.log(`Connected to Database`)
    const db = client.db('Proyecto')
    const tasksCollection = db.collection('Games')
})

//CRUD requests

.catch(error => console.error(error))