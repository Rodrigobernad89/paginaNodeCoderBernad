const { options } = require('./db.conn')
const knex = require('knex')(options)

async function DBscript() {
  try {
    await knex.schema.dropTableIfExists('productos')
    console.log('Se borro la tabla de productos')

    await knex.schema.createTable('productos', (table) => {
      table.increments('id').primary()
      table.string('title', 50).notNullable()
      table.float('price').notNullable()
      table.string('thumbnail', 200).notNullable()
    })

    console.log('Se creo la tabla de productos')
  } catch (error) {
    console.error(error)
  } finally {
    knex.destroy()
  }
}

module.exports = { DBscript }

