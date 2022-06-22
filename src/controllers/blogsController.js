const BlogsModel= require("../models/blogModel")
const AuthorModel=require("../models/authorModel")



const createBlogs=async function(req,res){

    try{
        let data=req.body
        if(data.authorId==undefined)return res.status(400).send({status:false, msg: 'Please enter author id'})
        let check =await AuthorModel.findById(data.authorId)
        if(!check)
        return res.status(400).send({status:false, msg: 'Invalid authord id'})
        const createblog=await BlogsModel.create(data)
        if (!createblog) return res.status(401).send({status:false,msg:'Please check your inputs'})
        res.status(201).send({status:true, msg:'createdblogs',data:createblog})

    }catch(err){
        res.status(500).send({
            status:false,
            msg:err.message,
        })
    }
   
}


module.exports.createBlogs=createBlogs
