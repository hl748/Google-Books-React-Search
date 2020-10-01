const burgers = require("../models/burger.js")
const express = require("express")
const { response } = require("express")

const router = express.Router()

router.get("/", function(req,res){
    console.log("route")
    burgers.all(function(error, results, fields){
        if (error) {
            console.log(error)

        }

        res.render("index",{burgers:results})
    })
})

router.post("/burger", function(req,res){
    const burger = req.body
    burgers.add(burger,function(err)
    {
        if (err) {
            console.log(err);
            res.send(err)
        }
        res.status(200).end();
        

    })
})

router.get("/burger", function(req,res){
    burgers.all(function(error, results, fields){
        if (error) {
        res.send(error)
        }

        res.json(results)
    })
})

router.put("/burger", function(req,res){
    const burger = req.body
    burgers.update(burger, function(error,results,fields){
        if (error){
            res.send(error)
        }
        res.json(results)
    })
})


module.exports = router