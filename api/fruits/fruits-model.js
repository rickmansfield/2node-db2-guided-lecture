const db = require('../../data/db-config')

function getAll() {
  // select * from fruits;
  return db('fruits')
}

async function getBy(id) {
  // select * from fruits where id = 7;
  const result = await db('fruits').where('id', id).first()
  return result
}

async function postNew(fruit) {
  // insert into fruits (name, avgWeightOz)
  // values ('mellon', 20);
  const [id] = await db('fruits').insert(fruit)
  return getBy(id)
}

module.exports = {
  getAll,
  getBy,
  postNew,
}
