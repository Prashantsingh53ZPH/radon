
const mid1= function ( req, res, next) {
    let value = req.headers.isfreeappuser
    // console.log(value)
    if(!value) return res.send({status: false, msg: "header not present"})
    //   console.log("working Fine")
      if(value=='true'){
          req.apptypefree=true
      } else{
          req.apptypefree=false
      }
    next()
}



module.exports.mid1= mid1
