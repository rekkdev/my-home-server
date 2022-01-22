const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended:false }))
const fs = require('fs')
const database = fs.readFileSync('database.json')

app.set('view-engine','ejs')

app.get('/', function (req, res) {
	res.render('index.ejs')
})


app.get('/login',function (req, res) {
	res.render('login.ejs')
})

app.get('/register', function (req, res){
	res.render('register.ejs')
})

app.post('/register', function (req, res){
	// req.body.name
})
app.post('/login', function (req, res){
	
})
app.listen(80)