require('dotenv').config()

module.exports = {
  DATABAS_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT || 3001,
  SECRET: process.env.SECRET || 'any_string_ok'
}