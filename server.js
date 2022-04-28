const express = require('express');
const Contenedor = require('./Contenedor');

const PORT = 8080;

const app = express();

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})


const c = new Contenedor;


app.get('/', (req, res) => {
    res.send({ mensaje: 'Hola,Bienvenido a la pagina web de Rodrigo' })
})

app.get('/productos', (req, res) => {
    res.send(c.getAll())
})

app.get('/productoRandom', (req, res) => {
    res.send(c.random());
})