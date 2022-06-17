const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  try {
    let data = req.body
    console.log(data)
    if (Object.keys(data).length != 0) {
      let userName = req.body.emailId;
      let password = req.body.password;

      let user = await userModel.findOne({ emailId: userName, password: password });
      if (!user)
        return res.send({
          status: false,
          msg: "username or the password is not corerct",
        });
      let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "thorium",
          organisation: "FUnctionUp",
        },
        "functionup-thorium"
      );
      res.setHeader("x-auth-token", token);
      res.send({ status: true, data: token });
    }
    else res.status(400).send({ msg: "BAD REQUEST" })
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }

};



const getUserData = async function (req, res) {

  try {
    if (Object.keys(data).length != 0) {
      let userId = req.params.userId;
      let userDetails = await userModel.findById(userId);
      if (!userDetails)
        return res.send({ status: false, msg: "No such user exists" });
      res.send({ status: true, data: userDetails });

    } else res.status(404).send({ msg: "BAD REQUEST" })
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

const updateUser = async function (req, res) {
  try {
    if (Object.keys(data).length != 0) {
      let userId = req.params.userId;
      let user = await userModel.findById(userId);
      if (!user) {
        return res.send("No such user exists");
      }

      let userData = req.body;
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
      res.send({ status: updatedUser, data: updatedUser });

    } else res.status(401).send({ msg: "BAD REQUEST" })
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};


const deleteUser = async function (req, res) {
  try {
    if (Object.keys(data).length != 0) {
      let userId = req.params.userId;
      let user = await userModel.findById(userId);
      if (!user) {
        return res.send("No such user exists");
      }

      let userData = req.body;
      let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
      res.send({ status: deletedUser, data: deletedUser });

    } else res.status(401).send({ msg: "BAD REQUEST" })
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
