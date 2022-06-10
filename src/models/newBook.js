const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
        
        bookname: String,
        author:{
                type: ObjectId,
                ref: 'Author'
        },
        price : Number,
        ratings: String,
        publisher:{
                type: ObjectId,
                ref : 'Publisher'
        }

}, { timestamps: true });

module.exports = mongoose.model('newBook', bookSchema)








// const bookSchema = new mongoose.Schema( {
//     name: String,
//     author_id: {
//         type: ObjectId,
//         ref: "Author"
//     },
//     price: Number,
//     ratings: Number


// }, { timestamps: true });


// module.exports = mongoose.model('LibraryBook', bookSchema)
