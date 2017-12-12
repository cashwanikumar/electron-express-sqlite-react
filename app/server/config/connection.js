import { dbLocation } from './database';

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

let dbPath = '';

if (process.env.NODE_ENV === 'production') {
  dbPath = dbLocation('electron_prod');
} else if (process.env.NODE_ENV === 'test') {
  dbPath = dbLocation('test');
} else {
  dbPath = dbLocation('development');
}

const dbExists = fs.existsSync(dbPath);
const db = new sqlite3.Database(dbPath);

if (!dbExists) {
    // db.serialize(() => {
    //     db.run("CREATE TABLE lorem (info TEXT)");

    //     var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    //     for (var i = 0; i < 10; i++) {
    //         stmt.run("Ipsum " + i);
    //     }
    //     stmt.finalize();
    // });
  console.error('database not found');
} else {
  console.log('db contected');
}

export default db;
