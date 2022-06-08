const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authormodel")
const { stringify } = require("querystring")

const authors= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


const chetanBhagatlist = async function (req, res){
    let firstq= await AuthorModel.find({authorName: "Chetan Bhagat"}).select("author_id")
    let secondq= await BookModel.find({author_id:firstq[0].author_id})
    res.send({msg : secondq})

}

const gettwostates = async function(req,res){
    const book =await BookModel.findOneAndUpdate({bookName:"Two States"},{ $set: { price: 100}}, {new:true})
    const update= await AuthorModel.find({author_id: book.author_id}).select("authorName")
    let Price=book.price
    res.send ({msg : update,Price})
        
}

const costbetween= async function(req, res){
    const book= await BookModel.find({price : {$gte:50 ,$lte: 100 }}).select({author_id:1} )
   
    for (i=0; i<=book.length; i++){
     let booka= await AuthorModel.find({author_id:book[i].author_id}).select("authorName")
     
       console.log(booka)
    }
   
        res.send({msg: booka})
    
}


module.exports.authors= authors
module.exports.createBook= createBook
module.exports.chetanBhagatlist=chetanBhagatlist
module.exports.gettwostates=gettwostates
module.exports.costbetween=costbetween




// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
