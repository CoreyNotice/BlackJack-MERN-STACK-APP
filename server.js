// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to BlackJack!')
})

const blackjackController=require('./controllers/Blackjack_controllers.js')
app.use('/Black',blackjackController)

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

