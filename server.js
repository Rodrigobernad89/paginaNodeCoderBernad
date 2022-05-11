const express = require('express');
const { Router } = express;
const Contenedor = require('./Contenedor');


const PORT = 8080;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

const productosApi = new Router();

const c = new Contenedor;

productosApi.get('/', (req, res) => {
    res.send(c.getAll())
})

productosApi.get('/:id', (req, res) => {
    const num = parseInt(req.params.id);
    res.send(c.getById(num));
})

productosApi.post('/', (req, res) => {
    res.send(c.save(req.body));
})

productosApi.put('/:id', (req, res) => {
    res.send(c.update(req.body, req.params.id))

})

productosApi.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send({ borrada: c.deleteById(id) })
})


app.use('/api/productos', productosApi);

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})
server.on("error", error => console.log(`Error en servidor ${error}`))



/* app.get('/', (req, res) => {
    res.send({ mensaje: 'Hola,Bienvenido a la pagina web de Rodrigo' })
}) */

/* app.get('/productos', (req, res) => {
    res.send(c.getAll())
})

app.get('/productoRandom', (req, res) => {
    res.send(c.random());
}) */