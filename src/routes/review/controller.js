const db = require ("../../config/dbConfig.js");

// model
const Review = db.review

// functions

//1. Add Review

const addReview = async (req, res) => {

    const id = req.params.id

    let data = {
        product_id: id,
        rating: req.body.rating,
        description: req.body.description
    }

    const review = await Review.create(req.body)
    res.status(200).send(review)

}

// 2. Get All Reviews

const getAllReviews = async (req, res) => {

    const reviews = await Review.findAll({})
    res.status(200).send(reviews)

}

module.exports = {
    addReview,
    getAllReviews
}