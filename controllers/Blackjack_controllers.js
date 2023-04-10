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
//Userprofile
black.get('/userprofile',(req,res)=>{
    res.render('userprofile')
})

//New User
black.get('/newUser',(req,res)=>{
    res.render('newUser')
})


// black.post('/', async (req, res) => {
//     const { firstName, lastName, email, password } = req.body;
  
//     try {
//       const user = await Black.findOne({ firstName, lastName, email, password });
  
//       if (user) {
//         // User found, redirect to user profile page
//         res.render('userProfile');
//       } else {
//         // User not found, show error message
//         res.render('login', { error: 'User not found' });
//       }
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Server Error');
//     }
//   });
black.delete('/:arrayIndex',(req, res)=>{
    Black.findByIdAndDelete(req.params.id) 
    .then(deleteObject => {
      
        res.status(303).redirect('login')
      
      // console.log({firstName: firstName, lastName: lastName, email: email, password: password})
      })

      .catch((error) => {
        console.log(error)
        res.send('Error occurred while searching for user')
      })
  })
  
module.exports=black;
