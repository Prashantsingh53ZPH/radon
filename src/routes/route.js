const ChunkHandler = require('chunk-handler');
const express = require('express');
const  fromPairs  = require('lodash');
const  chunk  = require('lodash');
const externalModule = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    
     const monthname= ['January','February','March','April','May','June','July','August','September','October','November','December']
    
    var ch = new ChunkHandler()
    var result= ch.make(monthname,3);
    console.log(result)
    
    let oddnumber= [1,3,5,7,11,13,17,19,23,29]
    let newArray = chunk.tail(oddnumber);
    console.log(newArray);

    let arr1=[21,22]
    let arr2=[22,23]
    let arr3=[25,26]
    let arr4=[26,27]
    let arr5=[27,28]

    var number= chunk.union(arr1,arr2,arr3,arr4,arr5)
    console.log(number)

    let movies=[["Horror","The shining"],["Drama","Titanic"],["Thriller","Shutter Island"],["Fantasy","Pans Labyrinth"]]
    var pairs= chunk.fromPairs(movies)
    console.log(pairs)

    res.send('My first ever api!')
   });


module.exports = router;
// adding this comment for no reason