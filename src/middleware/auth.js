const jwt = require("jsonwebtoken");

const mid1 =async function(req,res,next){

let token = req.headers["x-Auth-Token"]
if (!token) token =req.headers["x-auth-token"]

if(!token) return res.send({Status: false, msg: "please input header"})
console.log(token);

let decodedToken = jwt.verify(token, "functionup-radon");
if (!decodedToken){
  return res.send({ status: false, msg: "token is invalid" });
}else{
    next();
}
}

module.exports.mid1=mid1 