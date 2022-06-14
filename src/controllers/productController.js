const ProductModel= require("../models/productmodel")


const createProduct= async function(req, res) {
    let prdata=req.body
    const product= await ProductModel.create(prdata)
        res.send({msg: product})
    };


module.exports.createProduct= createProduct;