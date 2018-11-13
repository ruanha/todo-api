const mongoose = require('mongoose')
const fs = require('fs')
const {username, password, database} = JSON.parse(fs.readFileSync('secrets.json', 'utf-8'))

console.log(username, password, database)

mongoose.Promise = global.Promise
mongoose.connect(`mongodb+srv://${username}:${password}@${database}.mongodb.net/${database}?retryWrites=true`)

module.exports = { mongoose }
