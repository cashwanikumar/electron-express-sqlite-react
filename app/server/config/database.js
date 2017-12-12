const path = require('path');
const electron = require('electron');
const serverConst = require('../constant');

/*  linux:- ~/.config/Electron-Express
 *  windows:- C:\User\Win10\AppData\Programs\{project name}
*/
const userDir = (electron.app || electron.remote.app).getPath('userData');

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
      return path.join(userDir, `${serverConst.db.name}.${serverConst.db.ext}`);

    default:
      return `${path.resolve(__dirname)}/../../../resources/db_development/${serverConst.db.name}.${serverConst.db.ext}`;

  }
}
console.log(serverConst);
module.exports = {
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
