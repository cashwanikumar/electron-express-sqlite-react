const DB = require('../config/connection');

module.exports = {
    listAll: () => {
        return new Promise((resolve, reject) => {
            var data = ['test'];
            DB.serialize(() => {
                try {
                    DB.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
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