const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./address_book.db')

db.run(`create table if not exists contacts
	(
		id integer primary key autoincrement,
		name text,
		company text,
		phone text unique,
		email text unique
	)`,(err)=>{
		if (err) {
			throw err
		}
	})

db.run(`create table if not exists groups
	(
		id integer primary key autoincrement,
		groupName text unique
	)`,(err)=>{
		if (err) {
			throw err
		}
	})

db.run(`create table if not exists group_contacts
	(
		group_id integer,
		contact_id integer
	)`,(err)=>{
		if (err) {
			throw err
		}
	})