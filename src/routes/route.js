const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController")
const BlogsController=require("../controllers/blogsController")
const GetBlogsController=require("../controllers/getblogscontroller")
const UpdateController=require("../controllers/updateController")
const DeleteController=require("../controllers/deleteController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/authors",AuthorController.createAuthor)
router.post("/blogs", BlogsController.createBlogs)
router.get("/blogs", GetBlogsController.findBlogs)
router.get("/blogs/filter", GetBlogsController.filterBlogs)
router.put("/blogs/:blogid",UpdateController.updateBlogs )
router.delete("/blogs/:blogid",DeleteController.deleteBlog )
router.delete("/blogs",DeleteController.deleteBlogsByparams )





module.exports = router;