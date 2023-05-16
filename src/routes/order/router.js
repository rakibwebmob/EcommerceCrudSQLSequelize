const orderController=require("./controller");
// const productController = require("./controller");

const router = require('express').Router()


router.post("/addOrder/:id",orderController.addorder);


router.get("/getAllOrder",orderController.getAllOrder);

router.get("/getOrderUser/:id",orderController.getOrderUser);

router.delete("/removeOrder/:id",orderController.removeOrder);

router.put("/updateOrder/:id",orderController.updateOrder)

module.exports = router