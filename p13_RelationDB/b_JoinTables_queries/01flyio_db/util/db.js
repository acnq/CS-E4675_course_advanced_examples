const Sequelize = require('sequelize')
let { DATABASE_URL } = require('./config')

DATABASE_URL = 'postgres://postgres:AUEV1qrx03VnbhK@127.0.0.1:5432/postgres'
console.log('DATABASE_URL: ', DATABASE_URL)
const sequelize = new Sequelize(DATABASE_URL)

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('connected to the database')
  } catch (err) {
    console.log('failed to connect to the database')
    return process.exit(1)
  }
  return null
}

module.exports = { connectToDatabase, sequelize }