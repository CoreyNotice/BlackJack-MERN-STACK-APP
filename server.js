// DEPENDENCIES
const express = require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const bodyParser=require('body-parser')
const Black=require('./models/models.js')
const methodOverride = require('method-override');

// CONFIGURATION


const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })
.catch((error) => { console.log(error) });
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(methodOverride('_method'));
// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to BlackJack!')
  
})

app.post('/login', urlencodedParser,  async function (req, res) {
  const {firstName: firstName, lastName: lastName, email: email, password: password} = req.body
 Black.findOne({firstName: firstName})
  .then((user) => {
    if(user) {
      res.render('userprofile',{user})
    } else {
      res.send('User not found')
    }
    console.log(user)
    // console.log({firstName: firstName, lastName: lastName, email: email, password: password})
    })
    
    .catch((error) => {
      console.log(error)
      res.send('Error occurred while searching for user')
    })
})
app.post('/new', urlencodedParser,  async function (req, res) {
  const {firstName: firstName, lastName: lastName, email: email, password: password} = req.body
 Black.insertMany({firstName: firstName, lastName: lastName, email: email, password: password})
  .then((user) => {
    if(user) {
      res.render('login')
    } 
    console.log(user)
    // console.log({firstName: firstName, lastName: lastName, email: email, password: password})
    })
    
    .catch((error) => {
      console.log(error)
      res.send('Error occurred while searching for user')
    })
})
// app.delete('/:id',(req, res)=>{
//   Black.findByIdAndDelete(req.params.id) 
//   .then(() => {
    
//       res.render('login')
    
//     // console.log({firstName: firstName, lastName: lastName, email: email, password: password})
//     })
    
//     .catch((error) => {
//       console.log(error)
//       res.send('Error occurred while searching for user')
//     })
// })



const blackjackController=require('./controllers/Blackjack_controllers.js')
app.use('/black',blackjackController)

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})





