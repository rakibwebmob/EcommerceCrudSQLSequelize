const db = require ("../../config/dbConfig.js");
const product = require("../product/index.js");
const order = require("./index.js");
const Product=db.product
//model
const Order=db.order
const User=db.users

//function

// 1.Add Order

const addorder=async (req,res)=>{

const id =req.params.id


let data={
   status:req.body.status,
   user_id:req.body.user_id,
   product_id:req.body.product_id
}
console.log(data);
const order= Order.create(data)
res.status(200).send({msg:"add order"})
}
// 2.get All order

const getAllOrder=async(req,res)=>{
const orders =await Order.findAll()
res.status(200).send(orders)
}

// 3.get Order by user

const getOrderUser=async (req,res)=>{

  try {
    const id =req.params.id
// console.log(id);
// console.log("hi");
    const data =await Order.findOne({
        include:[{
            model:User,
            as:"user"
        },{
            model:Product,
            as:"product",
            // where:{id}
        }],
        
        where:{user_id:id}
    })
    console.log(data);
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({error:error.message})
  }
}


// 4. remove order 

const removeOrder =async(req,res)=>{
const id=req.params.id
try{
const order=await User.destroy({
    include:[{
        model:User,
        as:"user"
    }],
    where:{id:id}
})
res.status(204).send({msg:"order removed"})
}catch{
    res.status(500).send({error})
}
}


//5.update order

const updateOrder =async (req,res)=>{
    const id =req.params.id

    const order=await User.update(req.body,{
        include:[{
            model:User,
            as:"user"
        }],
        where:{id:id}
    })
res.status(200).send(order)
}


module.exports={
    addorder,
    getAllOrder,
    getOrderUser,
    removeOrder,
    updateOrder
}