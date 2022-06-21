const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomCrontroller = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)

route.post('/create-room', RoomCrontroller.create)
route.get('/room/:room', RoomCrontroller.open)

route.post('/question/create', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route
