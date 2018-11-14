const jwt = require('jsonwebtoken')

const data = {
  id: 10
}

const token = jwt.sign(data, 'secretSalt')
console.log(token)

let decoded = jwt.verify(token, 'secretSalt')
console.log(decoded)


/*
const crypto = require('crypto')

let message = 'I am user number 3'
let hash = crypto.createHash('sha256')
  .update(message)
  .digest('hex')

console.log(message)
console.log(hash)

const data = {
  id: 4
}

const token = {
  data,
  hash: crypto.createHash('sha256').update(JSON.stringify(data) + 'somesecret').digest('hex'),
}

token.data.id = 5
token.hash = crypto.createHash('sha256').update(JSON.stringify(token.data)).digest('hex')

const resultHash = crypto.createHash('sha256').update(JSON.stringify(token.data) + 'somesecret').digest('hex')
if (resultHash === token.hash) {
  console.log('Data was not changed')
} else {
  console.log('Data was changed. Do not trust!')
}
*/