const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./address-book.db');

module.exports = db;