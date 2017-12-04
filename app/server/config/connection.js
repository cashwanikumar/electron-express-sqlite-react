const sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
const path = require('path');
const electron = require('electron');
// const dbConfig = require('./connection');
import {dbName} from './database';
let dbPath = "";

// const userDir = (electron.app || electron.remote.app).getPath('userData');
// dbPath = path.join(userDir, 'test-build.sqlite');

if('development' == process.env.NODE_ENV) {
    dbPath = path.resolve(__dirname) + '/../../db_file/' + dbName;
} else {
    dbPath = path.resolve(__dirname) + '/db_file/' + dbName;
}

console.log("=========================================");
console.log(dbPath);
console.log(dbName);
console.log("=========================================");

var dbExists = fs.existsSync(dbPath);
const db = new sqlite3.Database(dbPath);
if(!dbExists)
{
    db.serialize(() => {
        db.run("CREATE TABLE lorem (info TEXT)");

        var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (var i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();
    });
}

export default db;