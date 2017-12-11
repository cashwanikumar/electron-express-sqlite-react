// const DB = require('../config/connection');

module.exports = {
  listAll: () => new Promise((resolve, reject) => {
    const data = ['test'];
    resolve(data);
    // DB.serialize(() => {
    //     try {
    //         DB.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
    //                 data.push(`Rows: ${row.id}: ${row.info}`);
    //                 console.log(`Rows: ${row.id}: ${row.info}`);
    //         }, function() {
    //             resolve(data);
    //         });
    //     } catch (err) {
    //         reject(err);
    //     }
    // });
  })
}
;
