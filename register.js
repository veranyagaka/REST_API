const express = require('express')
const router = express.Router()
const database = require('./database.js')

router.post('/' , (req,res)=>{

    const {name, email, password} = req.body
    database.query('INSERT INTO api_user (name, email, password) values (?,?,?)', [name, email, password], (err,rows)=>{
        if(err) throw err;
        else{
            res.send({message: "Successful registration"})
        }
    })
    //console.log(req.body)hahaha
})
module.exports =router;