const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController");
// const { route } = require('express/lib/application');

router.get("/books",function(req, res){
    res.send("My First Book api!")
})

router.post("/createBook", UserController.createBook )

router.get("/getBooksData", UserController.getBooksData )

module.exports = router;

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

