const express = require('express')
const app =express()
const PORT =process.env.PORT||5000
const expressLayouts = require('express-ejs-layouts')
const bodyParser =require('body-parser')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(bodyParser.urlencoded({limit : "10mb", extended: false}))
//const connectDb = require('./mongodb.js')

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))

const database = require('./database.js')
app.use(express.urlencoded({extended : true}))
app.use(express.json())
//mongobd here


app.use(express.static("public")) //for all the static routes=that dont change -- eg css
app.set('view engine','ejs')

const drugsRouter = require('./routes/drugs');
const adminRouter =require('./routes/admin')

app.use('/admin', adminRouter)
app.use('/drugs', drugsRouter)
//----------------------------------------tokens part remove later
var tokens = require('./tokens.js')

const loginRouter =require('./login')
app.use('/login', loginRouter)


var tokens = require('./tokens.js')
app.get('/nyagaka',tokens.ensureToken, (req,res)=>{
    res.render("index"), {title: "Success Vera!"}
    
})
//register api user
const registerRouter =require('./register.js')
app.use('/register', registerRouter)
//update records and stuff
const processRouter =require('./add-edit.js')
app.use('/processes', processRouter)

