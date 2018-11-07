const {MongoClient} = require('mongodb')
const fs = require('fs')
const {username, password, database} = JSON.parse(fs.readFileSync('secrets.json', 'utf-8'))

console.log(username, password, database)


MongoClient.connect(`mongodb+srv://${username}:${password}@${database}.mongodb.net/test?retryWrites=true`,
(err, client) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server')
  }
  console.log('connected to mongoDB server')
  const db = client.db(database)

  db.collection('Users').find({name: 'rune'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
  })

  client.close()
})
