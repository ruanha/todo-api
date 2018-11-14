const fs = require('fs')

const env = process.env.NODE_ENV || 'development'

console.log('env ****', env)

if (env === 'development') {
  process.env.PORT = 3000
  const { username, password, database } = JSON.parse(fs.readFileSync('secrets.json', 'utf-8'))
  process.env.MONGODB_URI = `mongodb+srv://${username}:${password}@${database}.mongodb.net/TodoAppDev`
} else if (env === 'test') {
  process.env.PORT = 3001
  const { username, password, database } = JSON.parse(fs.readFileSync('secrets.json', 'utf-8'))
  process.env.MONGODB_URI = `mongodb+srv://${username}:${password}@${database}.mongodb.net/TodoAppTest`
} else if (env === 'production') {
  process.env.PORT = 3060
  const { username, password, database } = JSON.parse(fs.readFileSync('secrets.json', 'utf-8'))
  process.env.MONGODB_URI = `mongodb+srv://${username}:${password}@${database}.mongodb.net/${database}`
}
