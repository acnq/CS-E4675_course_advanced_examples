const { DataTypes } = require('sequelize')
const { toDefaultValue } = require('sequelize/lib/utils')
const { down } = require('./20211209_00_initialize_notes_and_users')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn('users', 'admin', {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    })
    await queryInterface.addColumn('users', 'disabled', {
      type: DataTypes.BOOLEAN,
      defaultVale: false
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn('users', 'admin')
    await queryInterface.removeColumn('users', 'disabled')
  },
}