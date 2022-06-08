const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    
    author_id: {
        type :String,
        required: true
    }, 
    authorName :{
        type :String
    },
    age: Number,
    address: String
    
}, { timestamps: true });

module.exports = mongoose.model('Authors', authorSchema)