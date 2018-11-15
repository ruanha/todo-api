const mongoose = require('mongoose')
/*
const fs = require('fs')

const { username, password, database } = JSON.parse(fs.readFileSync('secrets.json', 'utf-8'))
const uri = `mongodb+srv://${username}:${password}@${database}.mongodb.net/${database}`

mongoose.Promise = global.Promise
mongoose.connect(uri, { useNewUrlParser: true })
*/
mongoose.Promise = global.Promise
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

module.exports = { mongoose }
