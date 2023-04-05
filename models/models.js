// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

const blackSchema = new Schema({
    firstName: { type: String, required:true,uniqueCaseInsensitive: true },
    lastName: { type: String, required:true,uniqueCaseInsensitive: true },
    email: { type: String,uniqueCaseInsensitive: true },
   password: { type: String, required:true,uniqueCaseInsensitive: true  }
  
})

const Black = mongoose.model('Black', blackSchema)

module.exports = Black
