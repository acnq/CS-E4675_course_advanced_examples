const mongoose = require('mongoose')
const Todo = require('./models/Todo')
const { MONGO_URL } = require('../util/config')

if (MONGO_URL && !mongoose.connection.readyState) mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
console.log('Todo:', Todo)
console.log('URL:', MONGO_URL)

module.exports = {
  Todo
}
