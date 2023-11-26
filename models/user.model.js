const mongoose =require('mongoose')
const adminSchema =new mongoose.Schema({
    id: {type:Number},
    name: {type:String},
    age: {type:Number},
    gender: {type:String},
    email: {type:String}
})
module.exports = mongoose.model('administrator', adminSchema) 