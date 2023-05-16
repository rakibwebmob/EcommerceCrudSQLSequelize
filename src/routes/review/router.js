const reviewController = require('./controller')

const productController = require('../product/controller')

const router = require('express').Router()


// Review Url and Controller

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)

// get product Reviews
router.get('/getProductReviews/:id', productController.getProductReviews)

module.exports = router