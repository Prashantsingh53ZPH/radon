let axios = require("axios")



let memeCreate= async function(req,res){

    try {
      
               
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=181913649&text0=Hello&text1=kaisahai&username=functionupradon&password=Function@123`
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.memeCreate = memeCreate



// functionupradon
// pni17941@zcrcd.com
// Funtion@123
// 181913649
// {
//     "id": "181913649",
//     "name": "Drake Hotline Bling",
//     "url": "https://i.imgflip.com/30b1gx.jpg",
//     "width": 1200,
//     "height": 1200,
//     "box_count": 2
// },



// `https://api.imgflip.com/caption_image?template_id=181913649&text0=Scaler&text1=FunctionUp&username=functionupradon&password=Function@123`




181913649