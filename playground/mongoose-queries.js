const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')


/*
if (!ObjectID.isValid(id)) {
  console.log('ID not valid')
}
*/
/*
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos:', todos)
})

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo:', todo) 
})
*/
/*
Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found')
  }
  console.log('Todo by id:', todo) 
}).catch((e) => console.log(e))
*/

let id = '5bea9d76db168b3e1887e90e'
User.findById(id).then((user) => {
  if (!user) {
    return console.log('No user found')
  }
  console.log(JSON.stringify(user, undefined, 2))
}, (e) => {
  console.log(e)
})