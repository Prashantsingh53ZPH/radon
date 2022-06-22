const UserModel= require("../models/authorModel")


const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({status: true, msg: savedData})
}

module.exports.createAuthor= createAuthor;