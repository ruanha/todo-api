const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
// const { User } = require('./models/user')

const app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  })

  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e)
  })
})

app.get('/todos', (req, res) => {
  console.log('get todos')
  Todo.find().then((todos) => {
    res.send({ todos })
  }, (e) => {
    res.status(400).send(e)
  })
})

app.get('/todos/:id', (req, res) => {
  const { id } = req.params

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }
    res.send({ todo })
  }, () => {
    res.status(404).send()
  }).catch(() => {
    res.status(404).send()
  })
})

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findOneAndDelete({ _id: id }).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }
    res.send({ todo })
  }).catch(() => {
    res.status(404).send()
  })
})

app.patch('/todos/:id', (req, res) => {
  const { id } = req.params
  const body = _.pick(req.body, ['text', 'completed'])

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime()
  } else {
    body.completed = false
    body.completedAt = null
  }

  Todo.findOneAndUpdate({ _id: id }, { $set: body }, { new: true }).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }
    res.send({ todo })
  }).catch((e) => {
    res.status(400).send()
  })
})

/*
let newUser = new User({
  email: 'new@user.com'
})

newUser.save().then((doc) => {
  console.log('new user created:', doc)
}, (e) => {
  console.log('Unable to create new user', e)
})
*/

app.listen(3000, () => {
  console.log('Started on port 3000')
})

module.exports = { app }
