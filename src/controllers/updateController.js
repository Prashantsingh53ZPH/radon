const BlogsModel = require("../models/blogModel")

const updateBlogs=async function(req,res){
try{
  const titl=req.body.title
  const bod=req.body.body
  const tag=req.body.tags
  const subcat=req.body.subcategory
  const date=Date.now()

    const allBlogs = await BlogsModel.findOne({ $and: [{_id:req.params.blogid} ,{isDeleted: false }]})
    if(!allBlogs) return res.status(404).send({status:false,msg:"No such id is present"})
    const updatedBlog=await BlogsModel.findByIdAndUpdate({ _id:req.params.blogid},{$set: {title:titl, body:bod,tags:tag,subcategory:subcat ,isPublished:true,publishedAt:date}},{new:true})
  
    res.status(200).send({status:true,msg:"updated Blog", data:updatedBlog})

}catch (err) {
    res.status(500).send({
        status: false,
        msg: err.message,
    })
}
}


module.exports.updateBlogs=updateBlogs