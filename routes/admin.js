
const express =require('express');
const router =express.Router();
const database = require('../database.js')


 //list all users
 router.get('/', (req,res)=>{
   res.render('index')
 })
 router.get('/users',(req, res) => {
  database.query('SELECT * FROM USERS', (err,results)=>{
    if(err)return console.error(err)
    return res.send(results)})
 })
 //just the users no details
 router.get('/user',(req, res) => {
  database.query('SELECT users.name from USERS', (err,results)=>{
    if(err)return console.error(err)
    return res.send(results)})
 })
  
 router.post('/add', (req,res)=>{
    UserModel.create(req.body)
    .then(data=>res.send(data))
    .catch(err =>console.log(err));

 })
 //one user by id
 router.get('/users/:id',(req, res) => {
  database.query(`SELECT * FROM USERS where patient_id = ${req.params.id}`, (err,results)=>{
    if(err)return console.error(err)
    return res.send(results)})
 })
 //sort users by gender
 router.get('/users/gender/:gender',(req, res) => {
  const gender = req.params.gender;
  database.query(`SELECT * FROM USERS WHERE gender = '${gender}'`, (err,results)=>{
    if(err)return console.error(err)
    return res.send(results)})
 })
 //sort users who purchased certain drugs
 router.get('/users/drugs/:drug',(req, res) => {
  const drugs = req.params.drug;
  database.query(`SELECT * FROM users WHERE FIND_IN_SET('${drugs}', drugs) > 0;
  `, (err,results)=>{//NOTE:WORKS NOW!!!!! 
    if(err)return console.error(err)
    return res.send(results)})
 })
 //sort users who purchased drug on specific date
 router.get('/users/purchase/:purchaseDate',(req, res) => {
  const purchaseDate = req.params.purchaseDate;
  database.query(`SELECT * FROM USERS WHERE purchaseDate = '${purchaseDate}'`, (err,results)=>{
    if(err)return console.error(err)
    return res.send(results)})
 })

 //sort users by last login
 router.get('/users/login/:lastLogin',(req, res) => {
  const lastLogin = req.params.lastLogin;
  database.query(`SELECT * FROM USERS WHERE lastLogin = '${lastLogin}'`, (err,results)=>{
    if(err)return console.error(err)
    return res.send(results)})
 })
 //secure endpoint -- list of drugs by a user
 router.get('/user/drugs',(req, res) => {
  database.query('SELECT patient_id, users.name , drugs from USERS', (err,results)=>{
    if(err)return console.error(err)
    return res.send(results)})
 })
  
 module.exports =router 