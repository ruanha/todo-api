'use strict'
const MongoClient = require('mongodb').MongoClient
const fs = require('fs')
const {username, password, database} = JSON.parse(fs.readFileSync('secrets.json', 'utf-8'))

console.log(username, password, database)

MongoClient.connect(
  `mongodb+srv://${username}:${password}@${database}.mongodb.net/test?retryWrites=true`,
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to mongoDB server')
    }
    console.log('connected to mongoDB server')
    const db = client.db(database)
/*    db.collection('Todos').insertOne({
      text: 'Something to do',
      completed: false
    }, (err, result) => {
      if(err) {
        return console.log('Unable to insert todo', err)
      }
      console.log(JSON.stringify(result.ops, undefined, 2))
    })*/

    db.collection('Users').insertOne({
      name: 'rune',
      age: 36,
      location: 'dk'
    }, (err, result) => {
      if (err) {
        return console.log('Unable to insert user', err)
      }
      console.log(JSON.stringify(result.ops, undefined, 2))
    })

    client.close()
  }
)