let axios = require("axios")

let getMausam = async function (req, res) {
    try {
        // let district = req.query.districtId
        // let date = req.query.date
        // console.log(`district n date: ${district} ${date}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=4ffa3da18f82b1bc7c0d81d77b095647`
        }

        let result = await axios(options)
        console.log(result.data)
        res.send({ temp: result.data.main })
        // res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let sortedTempBycity = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        tempByCity = []

        for (i = 0; i < cities.length; i++) {

            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=4ffa3da18f82b1bc7c0d81d77b095647`)
            console.log(resp.data.main.temp)

            obj.temp = resp.data.main.temp
            tempByCity.push(obj)
        }

        let sorted = tempByCity.sort(function (a, b) { return a.temp - b.temp })
        console.log(sorted)
        res.status(200).send({ status: true, data: sorted })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getMausam = getMausam
module.exports.sortedTempBycity=sortedTempBycity