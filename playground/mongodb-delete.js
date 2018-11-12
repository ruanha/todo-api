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

/*    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
      console.log(result)
    })*/

    db.collection('Users').deleteMany({name: 'rune'})

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID('5be30bd61c9d4400001d8842')
    }).then((results) => {
      console.log(JSON.stringify(results, undefined, 2))
    })

    client.close()
  })