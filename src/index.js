const uniqueRandomArray = require('unique-random-array')
const startWarsNames = require('./starwars-names.json')

module.exports = {
  all: startWarsNames,
  random: uniqueRandomArray(startWarsNames)
}