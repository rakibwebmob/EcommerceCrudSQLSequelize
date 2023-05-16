const controller=require("./controller");

const router = require('express').Router()





router.post('/addProduct',controller.addProduct)

router.get('/allProducts', controller.getAllProducts)

router.get('/published', controller.getPublishedProduct)




router.get('/:id', controller.getOneProduct)

router.put('/:id', controller.updateProduct)

router.delete('/:id', controller.deleteProduct)

module.exports = router