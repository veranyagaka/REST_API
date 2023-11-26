const express =require('express');
const router =express.Router();
//------------------------------------------------------
const database = require('../database.js')
//All drugs
router.get('/',(req, res) => {
    database.query('SELECT * FROM DRUGS', (err,results)=>{
      if(err)return console.error(err)
      return res.send(results)})
   })
//drug by id
router.get('/:id',(req, res) => {
    database.query(`SELECT * FROM DRUGS where drug_id = ${req.params.id}`, (err,results)=>{
      if(err)return console.error(err)
      return res.send(results)})
   })
//drug by category
router.get('/category/:category',(req, res) => {
    const category = req.params.category;
    database.query(`SELECT * FROM DRUGS WHERE category_id = ${category}`, (err,results)=>{
      if(err)return console.error(err)
      return res.send(results)})
   })
//list all drugs by user -- in admin.js

//------------------------------------------------------
 const newDrug=require('../controllers/drugController.js')
//static routes
router.get('/list', newDrug)//this is implemented in controllers folder

router.get('/new', (req, res)=>{
    res.render("drugs/new")
})
//to get info from user such as a new dug
router.post('/', (req,res)=>{
    const isValid = false
    if(isValid){
        drugs.push({name: req.body.drug_name})
        res.redirect(`drugs/${drugs.length - 1}`)
    }
    else{
        console.log("ERROR")
        res.render('drugs/new', {name: req.body.drug_name})
    }
    console.log(req.body.drug_name)
})
//dynamic routes
//getting individual drugs
   

router
.route('/:id')

.get((req,res)=>{
    console.log(req.drugs)
    let drugId = req.params.id; 
    res.send(`GET Drug with Id ${drugId}`)

})//update
.put((req,res)=>{
    let drugId = req.params.id; 
        res.send(`UPDATE Drug with Id ${drugId}`)

})//delete
.delete((req,res)=>{
    let drugId = req.params.id;
        res.send(`DELETEwith Id ${drugId}`)

})
const drugs =[{name: "Piriton"},{name: "Bascopan"}]
router.param('id',(req,res,next,id)=>{
    console.log(id)
    req.drugs = drugs[id]
    next()
})
module.exports= router