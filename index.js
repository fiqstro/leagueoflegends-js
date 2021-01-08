const DataDragon = require('./src/DataDragon');
const API = require('./src/API.js');
const fetch = require('node-fetch')

module.exports = {
  DataDragon: DataDragon,
  API: API,
  version: require('./package.json').version
}