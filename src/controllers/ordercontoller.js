const OrderModel= require("../models/orderDocument")
const UserModel=require("../models/userDocument")
const ProductModel=require("../models/productmodel")


const createOrder= async function(req, res) {
   
    let data=req.body
    let userId=data.userId
    let productId=data.productId

    let userPresent=await UserModel.findById(userId)
    if(!userPresent) return res.send({Status: false, msg: "User not present"})
    let productPresent=await ProductModel.findById(productId)
    if(!productPresent)return res.send({Status: false, msg: "Product is not present"})

    if(!req.apptypefree && userPresent.balance >= productPresent.price ){
        userPresent.balance=userPresent.balance-productPresent.price
        await userPresent.save()
        data.amount=productPresent.price
        data.isfreeappuser=false
        let orderCreated = await OrderModel.create(data)
        return res.send({Status: true, data:orderCreated})
    }else if( !req.apptypefree){
        return res.send({status: false, msg: "user dont have money "})
    }else{
        data.amount=0
        data.isfreeappuser=true
        // console.log(data)
        let orderCreated = await OrderModel.create(data)
        // console.log(orderCreated)
        return res.send({Status: true, data:orderCreated})
    }
        
      
    };


module.exports.createOrder= createOrder;