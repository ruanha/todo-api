const {MongoClient, ObjectID} = require('mongodb')
const fs = require('fs')
const {username, password, database} = JSON.parse(fs.readFileSync('secrets.json', 'utf-8'))

MongoClient.connect(`mongodb+srv://${username}:${password}@${database}.mongodb.net/test?retryWrites=true`,
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to mongoDB server')
    const db = client.db(database)

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5be30be71c9d4400001d8843')
    }, {
      $set: {
        name: 'rune'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(JSON.stringify(result, undefined, 2))
    })

    client.close()
  })