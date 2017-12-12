import path from 'path';
import electron from 'electron';
import serverConst from '../constant';

// const path = require('path');
// const electron = require('electron');

/*  linux:- ~/.config/Electron-Express
 *  windows:- C:\User\Win10\AppData\Programs\{project name}
*/
const userDir = (electron.app || electron.remote.app).getPath('userData');

const dbName = 'pos';
const dbExt = 'sqlite';

function dbLocation(env) {
  const environment = env || process.env.NODE_ENV;
  switch (environment) {
    // case 'production' :
    //   return `${path.resolve(__dirname)}/../../resources/db_release/${
    //              serverConst.db.name}.${serverConst.db.ext}`;
    case 'test' :
      return `${path.resolve(__dirname)}/../../../resources/db_test/${
          serverConst.db.name}.${serverConst.db.ext}`;

    case 'electron_prod' :
      return path.join(userDir, `${dbName}.${dbExt}`);

    default:
      return `${path.resolve(__dirname)}/../../../resources/db_development/${serverConst.db.name}.${dbExt}`;

  }
}

module.exports = {
  dbLocation,
  development: {
    username: serverConst.db.username,
    password: serverConst.db.password,
    database: serverConst.db.name,
    host: serverConst.db.host,
    dialect: 'sqlite',
    storage: dbLocation('development')
  },
  test: {
    username: serverConst.db.username,
    password: serverConst.db.password,
    database: serverConst.db.name,
    host: serverConst.db.host,
    dialect: 'sqlite',
    storage: dbLocation('electron_prod')
  },
  production: {
    username: serverConst.db.username,
    password: serverConst.db.password,
    database: serverConst.db.name,
    host: serverConst.db.host,
    dialect: 'sqlite',
    storage: dbLocation('test')
  }
};
