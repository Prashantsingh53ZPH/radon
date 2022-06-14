const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
    
    userId:String,
    productId : String,
    amount: {
        type: Number
    },
    isfreeappuser:{
        type :Boolean,
    },
    date: String

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
