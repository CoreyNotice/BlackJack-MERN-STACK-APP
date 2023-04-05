// DEPENDENCIES
const express = require('express')
const mongoose=require('mongoose')
require('dotenv').config()





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

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to BlackJack!')
})

const blackjackController=require('./controllers/Blackjack_controllers.js')
app.use('/black',blackjackController)

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

