const date= function(){
    const printdate=Date()
    console.log(printdate)
}

const month=function(){
    const d= Date()
    console.log("current month", d)
   
}

const batchInfo= function(){
    const batch =("Radon, 3rd week , 3rd Day , topic= Node js intro and some basic command for pushing and fetching the branch ")
    console.log(batch)
}
    
module.exports.batchInfo=batchInfo
module.exports.month=month
module.exports.date=date