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
module.exports=Black;