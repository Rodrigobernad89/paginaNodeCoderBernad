const { Router } = require('express');
const express = require('express');
const router = express.Router();


const productController= require('../controllers/productsController');

router.get('/',productController.list);
router.get('/:id',productController.single);
router.post('/',productController.store);
router.put('/:id',productController.update);
router.delete('/:id',productController.destroy);

module.exports = router;