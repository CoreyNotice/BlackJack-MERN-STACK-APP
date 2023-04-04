const express =require ('express')
const Black=express.Router()
const data=require('../models/models')

//WELCOME
Black.get('/',(req,res)=>{
    res.render('welcome',
    {
        Black:data
    })
})

//Login
Black.get('/login',(req,res)=>{
    res.render('login')
})




module.exports=Black;
