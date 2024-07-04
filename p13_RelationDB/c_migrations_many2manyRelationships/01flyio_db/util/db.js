const Sequelize = require('sequelize')
let { DATABASE_URL } = require('./config')
const { Umzug, SequelizeStorage } = require('umzug')
const { logger } = require('sequelize/lib/utils/logger')

DATABASE_URL = 'postgres://postgres:AUEV1qrx03VnbhK@127.0.0.1:5432/postgres'
console.log('DATABASE_URL: ', DATABASE_URL)
const sequelize = new Sequelize(DATABASE_URL);

// const runMigrations = async () => {
//   const migrator = new Umzug({
//     migrations: {
//       glob: 'migrations/*.js',
//     },
//     storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
//     context: sequelize.getQueryInterface(),
//     logger: console,
//   })
//   const migrations = await migrator.up()
//   console.log('Migrations up to date', {
//     files: migrations.map((mig) => mig.name),
//   })
// }
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    await runMigrations()
    console.log('connected to the database')
  } catch (err) {
    console.log('failed to connect to the database')
    return process.exit(1)
  }
  return null
}

const migrationConf = {
  migrations: {
    glob: 'migrations/*.js',
  },
  storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
  context: sequelize.getQueryInterface(),
  logger: console,
}

const runMigrations = async () => {
  const migrator = new Umzug(migrationConf)
  const migrations = await migrator.up()
  console.log('Migrations up to date', {
    files: migrations.map((mig) => mig.name),
  })
}

const rollbackMigration = async () => {
  await sequelize.authenticate()
  const migrator = new Umzug(migrationConf)
  await migrator.down()
}

module.exports = { connectToDatabase, sequelize, rollbackMigration }