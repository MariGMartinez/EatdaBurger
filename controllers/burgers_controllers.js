

var express = require ("express")
var router = express.Router()
var burger = require ("../models/burger.js")

router.get ("/",function(req,res){
    res.redirect("/burgers")
})
router.get("/burgers",function (req,res){
    burger.all (function(data){
        console.log ("This is our burger data",data)
        res.render ("index",{
            burger_data: data
        })
    })
})
router.post ("/burgers/create",function(req,res){
    burger.insert (req.body.burger_name, function (results){
        res.redirect ("/")
    })

})
router.put ("/burgers/:id",function (req,res){
    console.log ("Update",req.params)
    burger.update (req.params.id,function(result){
        res.sendStatus (200)

    })
})
module.exports = router