const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middlew= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middlew.mid1, userController.getUserData)

router.put("/users/:userId",middlew.mid1, userController.updateUser)

router.delete("/users/:userId",middlew.mid1, userController.deleteUser)

module.exports = router;

// 62a870c1ec14ced990bfc71a

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmE4NzBjMWVjMTRjZWQ5OTBiZmM3MWEiLCJiYXRjaCI6InRob3JpdW0iLCJvcmdhbmlzYXRpb24iOiJGdW5jdGlvblVwIiwiaWF0IjoxNjU1MjA2MjY0fQ.c6acG44Ki6a0wLqpyeMQiH-fJXlMzxuz7b4ZglpKnww"