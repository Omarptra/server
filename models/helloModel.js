const mongoose = require('mongoose')

    // Data Models
const dataSchema = new mongoose.Schema({
    id: Number,
    name : String
})

module.exports = mongoose.model('data', dataSchema)