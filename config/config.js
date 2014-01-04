var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'wheatoncs-status-api'
    },
    port: 3300,
    db: 'mongodb://localhost/wheatoncs-status'
  },

  test: {
    root: rootPath,
    app: {
      name: 'wheatoncs-status-api'
    },
    port: 3000,
    db: 'mongodb://localhost/wheatoncs-status-api-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'wheatoncs-status-api'
    },
    port: process.env.PORT,
    db: process.env.MONGOHQ_URL
  }
};

module.exports = config[env];
