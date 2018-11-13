const mongoose = require('mongoose')
const fs = require('fs')
const {username, password, database} = JSON.parse(fs.readFileSync('secrets.json', 'utf-8'))
const uri = `mongodb+srv://${username}:${password}@${database}.mongodb.net/test`

console.log(username, password, database)

mongoose.Promise = global.Promise

mongoose.connect(uri, { useNewUrlParser: true })

module.exports = { mongoose }
