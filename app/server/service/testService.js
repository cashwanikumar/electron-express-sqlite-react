// const testList = require('../models').testList;
const sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
const path = require('path');
const electron = require('electron');

const userDir = (electron.app || electron.remote.app).getPath('userData');
const dbPath = path.join(userDir, 'test-build.sqlite');

console.log("=============================================");
console.log(dbPath);
console.log("=============================================");

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
console.log(dbPath);

// const db = new sqlite3.Database(
//   path.resolve(__dirname) + '/../database_file/grocery.sqlite'
// );

module.exports = {
    listAll: () => {
        return new Promise((resolve, reject) => {
            var data = ['test'];
            db.serialize(() => {
                try {
                    db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
                            data.push(`Rows: ${row.id}: ${row.info}`);
                            console.log(`Rows: ${row.id}: ${row.info}`);
                    }, function() {
                        resolve(data);
                    });
                } catch (err) {
                    reject(err);
                }
            });
        });
    },
    add: () => {
        
    }
}