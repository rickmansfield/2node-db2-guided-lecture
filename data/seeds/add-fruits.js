exports.seed = async function (knex) {
  // Deletes ALL existing entries AND reset the primary keys
  await knex('fruits').truncate()
  await knex('fruits').insert([
    { avgWeightOz: 23, name: 'orange' },
    { avgWeightOz: 10, name: 'pear', delicious: 1 },
    { avgWeightOz: 2.6, name: 'apple', color: 'green' }
  ]);
};
