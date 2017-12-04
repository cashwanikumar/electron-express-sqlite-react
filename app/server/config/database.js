const path = require('path');
const dbName = 'test-me.sqlite';

function dbLocation() {
    return path.resolve(__dirname) + '/../../database_file/' + dbName;
}

module.exports = {
    dbName: dbName,
    dbLocation: dbLocation,
    development: {
        username: null,
        password: null,
        database: dbName,
        host: '127.0.0.1',
        dialect: 'sqlite',
        storage: dbLocation()
    },
    test: {
        username: null,
        password: null,
        database: dbName,
        host: '127.0.0.1',
        dialect: 'sqlite',
        storage: dbLocation()
    },
    production: {
        username: null,
        password: null,
        database: dbName,
        host: '127.0.0.1',
        dialect: 'sqlite',
        storage: dbLocation()
    }
};