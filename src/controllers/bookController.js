const authorModel = require("../models/newAuthor")
const bookModel= require("../models/newBook")
const publishermodel= require("../models/newPublisher")


const createAuthor = async function (req,res){
    let aut = req.body
    let author =await authorModel.create(aut)
    res.send({data: author})
}

const createPublisher = async function (req,res){
    let pub = req.body
    let publisher =await publishermodel.create(pub)
    res.send({data: publisher})
}


const createBook = async (req,res) =>{
    const {author , publisher} = req.body;
     if(!author || !publisher){
       return  res.send({msg:" author and publisher both are required"})
     }else{
         const authorId = await authorModel.findById(author); 
         const publisherId = await publishermodel.findById(publisher);
         if(!authorId || !publisherId){
             return  res.send({msg:" authorID and publisherID is not valid "})
         }else{
            const data = await bookModel.create(req.body)
           return res.send({msg:data})
         }
     }
 }

 const getAllBook = async(req,res)=>{
    const data = await bookModel.find().populate("author").populate('publisher');
    return res.send(data);
}


module.exports.createAuthor=createAuthor
module.exports.createPublisher= createPublisher
module.exports.createBook=createBook
module.exports.getAllBook=getAllBook




// const createBook= async function(req,res){
//     let Book=req.body
//     let authorid=Book.author_id
//     if(!authorid){
//         res.send({msg : "Author id is required"})
//     }
//     let authorID= await authorModel.findById(authorid)
//     if(!authorID){
//         res.send({msg : "Authorid is not valid "})
//     }
//     let publisherid= book.publisher_id
//     if(!publisherid){
//         res.send({msg: "Publisher id is also required"})
//     }
//     let publisherID= await publishermodel.findById(publisherid)
//     if(!publisherID){
//         res.send({msg : "Publisher id is not valid "})
//     }

//     let crbook= await bookModel.create(Book)
//     res.send({data: crbook})
// }








// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }


// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.createPublisher= createPublisher
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetail

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
