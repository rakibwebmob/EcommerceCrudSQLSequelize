var express = require("express");
const routes = express();

const users = require("./user");
routes.use("/users", users.router);

const product = require("./product");
routes.use("/product", product.router);

const order = require("./order");
routes.use("/order", order.router);

const review = require("./review");
routes.use("/review", review.router);

module.exports = {
  module: {
    users,
    product,
    order,
    review
  },
  routes
};

