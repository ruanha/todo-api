const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')
/*
Todo.remove({}).then((result) => {
  console.log(result)
})
*/

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndDelete({_id: '5beae2f99b6b8603420f72b0'}).then((todo) => {
  console.log(todo)
})