const { count } = require("console")
const BlogsModel = require("../models/blogModel")



const findBlogs = async function (req, res) {

    try {
        const allBlogs = await BlogsModel.find({ $and: [{ isDeleted: false}, { isPublished: false}] });
        if (allBlogs == false) return res.status(404).send({ status: false, msg: "No such Blogs are present" });
        res.status(200).send({ status: true, msg: "Found Blogs", data: allBlogs })
        
    } catch (err) {
        res.status(500).send({
            status: false,
            msg: err.message,
        })
    }

}


const filterBlogs = async function (req, res) {

    try {

        const auth = req.query.authorId
        const cat = req.query.category
        const tag = req.query.tags
        const subcat = req.query.subcategory
        const gotBlogs = await BlogsModel.find({ $or: [{ authorId: auth }, { category: cat }, { tags: tag }, { subcategory: subcat }] });
        if (gotBlogs == false) return res.status(404).send({ status: false, msg: "no such blogs are present" })
        res.status(201).send({ status: true, msg: "Found Blogs okey", data: gotBlogs })
    } catch (err) {
        res.status(500).send({
            status: false,
            msg: err.message,
        })
    }

}



module.exports.findBlogs = findBlogs
module.exports.filterBlogs = filterBlogs



