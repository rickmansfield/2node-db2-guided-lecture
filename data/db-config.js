// which db config to use?
const knex = require('knex')
// these are the possible configs
const configs = require('../knexfile')
// what environment are we on?
const env = process.env.NODE_ENV || 'development'
// GIMME A DATABASE CONNECTION ALREADY!
module.exports = knex(configs[env])
