const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    title: {
        type: String,
        enum: ["Mr", "Mrs", "Miss"]
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password: {
        type: String,
        required: true 
    }

})

module.exports = mongoose.model('Author', authorSchema)