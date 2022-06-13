
const hitapi1= function ( req, res, next) {
    req.falana= "hi there. Hitted Api 1 n crashed "
    console.log("Hi ,Hitted Api1")
    next()
}

const hitapi2= function ( req, res, next) {
    console.log("Hi You have hitted api2")
    next()
}

const hitapi3= function ( req, res, next) {
    console.log("Hi You have hitted api3")
    next()
}

const hitapi4= function ( req, res, next) {
    console.log("Hi You have hitted api4")
    next()
}

module.exports.hitapi1= hitapi1
module.exports.hitapi2= hitapi2
module.exports.hitapi3= hitapi3
module.exports.hitapi4= hitapi4
