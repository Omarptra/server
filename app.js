const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE")
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-with, Content-Type, Accept")
    next();
})

// const uri = "mongodb server address / local or cloud"
mongoose.connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => {
    console.log('Database Connected')
})
.catch(err => console.log(err))

app.use(bodyParser.json())

// routes
const hello = require('./routes/hello')


app.use('/hello', hello)

// start server
app.listen(3000, () => {
    console.log("Server listening at https://localhost:3000");
})
