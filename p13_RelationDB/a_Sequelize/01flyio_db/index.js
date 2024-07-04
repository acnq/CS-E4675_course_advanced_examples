require('dotenv').config()
const { Sequelize, QueryTypes, Model, DataTypes } = require('sequelize')
const express = require('express')
const app = express()
app.use(express.json())

const sequelize = new Sequelize(process.env.DATABASE_URL)

class Note extends Model {}
Note.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  important: {
    type: DataTypes.BOOLEAN
  },
  date: {
    type: DataTypes.DATE
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'note'
})
Note.sync()
app.get('/api/notes', async (req, res) => {
  const notes = await Note.findAll()
  // const notes = await sequelize.query('SELECT * FROM notes', {
  //   type: QueryTypes.SELECT
  // })
  console.log(JSON.stringify(notes))
  res.json(notes)
})
app.get('/api/notes/:id', async (req, res) => {
  const note = await Note.findByPk(req.params.id)
  if (note) {
    console.log(note.toJSON())
    res.json(note)
  } else {
    res.status(404).end()
  }
})

app.put('/api/notes/:id', async(req, res) => {
  const note = await Note.findByPk(req.params.id)
  if (note) {
    note.important = req.body.important
    await note.save()
    res.json(note)
  } else {
    res.status(404).end()
  }
})

app.post('/api/notes', async (req, res) => {
  console.log(req.body)
  try {
    const note = await Note.create(req.body)
    res.json(note)
  } catch (error) {
    return res.status(400).json({ error })
  }
  console.log(req.body)

})
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Sever running on port ${PORT}`)
})
// const main = async () => {
//   try {
//     await sequelize.authenticate()
//     console.log('Connection has been established successfully.')
//     const notes = await sequelize.query("SELECT * FROM notes", { type: QueryTypes.SELECT })
//     console.log(notes)
//     sequelize.close()
//   } catch (error) {
//     console.error('Unable to connect to the database:', error)
//   }
// }

// main()
