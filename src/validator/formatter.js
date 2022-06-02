const trim= function(){
    const a= "    FunctionUp!         ";
    const b=a.trim()
    console.log(b)
}

const lower= function(){
    const c= "FunctionUp has a very strong vison";
    const d= c.toLocaleLowerCase()
    console.log(d)
    
}

const upper= function(){
    const e= "FunctionUp has a very strong vison";
    const f=e.toLocaleUpperCase()
    console.log(f)
}


module.exports.trim = trim
module.exports.lower = lower
module.exports.upper = upper