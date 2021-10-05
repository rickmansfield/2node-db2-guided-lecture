exports.up = async function(knex) {
  await knex.schema.createTable('fruits', table => {
    table.increments() // this create a primary key called id of auto inc integers
    table.text('name', 128).unique().notNullable()
    table.decimal('avgWeightOz').notNullable()
    table.boolean('delicious')
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('fruits')
}
