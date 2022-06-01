const{request} = require('express');
const Contenedor = require('../models/productos');
const {options} = require('../options/db.conn');


const c = new Contenedor(options,process.env.T_PRODUCTOS);

const administrador = true;

const controller = {
    list: (req,res) =>{
        c.list()
        .then((response)=>res.json(response))
        .catch((e)=> res.json({e}) );
    },
    single: (req,res) =>{
        c.single({id: req.params.id})
        .then((response)=>res.json(response))
        .catch((e)=> res.json({e}) );
    },
     store: (req,res) =>{
            const producto = ({title,price,thumbnail} = req.body);
            return c.store(producto)
                    .then((response)=>res.json(response))
                    .catch((e)=> res.json({e}) );
    },
    update:(req,res)=>{
        //const producto = ({title,price,thumbnail} = req.body);
        return c.update(req.params.id,req.body)
                .then((response)=>res.json(response))
                .catch((e)=> res.json({e}) );
    },
    destroy:(req,res)=>{
        return c.destroy({id:req.params.id},
                          console.log('El producto fue borrado')  )
        .then((response)=>res.json(response))
        .catch((e)=> res.json({e}) );
        
    } 
}

module.exports = controller;