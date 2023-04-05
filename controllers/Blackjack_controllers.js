const express =require ('express')
const black=express.Router()
const Black=require('../models/models.js')
const seedData=require('../models/seeds.js')

//WELCOME
black.get('/welcome',(req,res)=>{
    res.render('welcome')
})
//seed
black.get('/seed',(req,res)=>{
    Black.insertMany(seedData)
    .then(()=>res.redirect('/black/welcome'))
    .catch((err) => console.log(err))
})
//Login
black.get('/login',(req,res)=>{
    res.render('login')
})

//New User
black.get('/new',(req,res)=>{
    res.render('newUser')
})


module.exports=black;
