const http = require('http');
const express = require('express');
const morgan = require('morgan');       //web server logging
const webServerConfig = require('../config/web-server.js');
//const database = require('./database.js');
// *** line that requires ../config/web-server.js is here ***
const router = require('./router.js');
let httpServer;

function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();
    httpServer = http.createServer(app);

      // Combines logging info from request and response
      app.use(morgan('combined'));

      // Parse incoming JSON requests and revive JSON.
    app.use(express.json({
      reviver: reviveJson
    }));

      // *** app.get call below this line ***
      
   // app.get('/', (req, res) => {
   //   res.end('Hello World!');
    //});

    // *** line that adds morgan to app here ***

  //  app.get('/', async (req, res) => {
   //   const result = await database.simpleExecute('select user, systimestamp from dual');
     // const user = result.rows[0].USER;
    //  const date = result.rows[0].SYSTIMESTAMP;
//
  //    res.end(`DB user: ${user}\nDate: ${date}`);
  //  });

// Mount the router at /api so all its routes start with /api
app.use('/api', router);

    httpServer.listen(webServerConfig.port, err => {
      if (err) {
        reject(err);
        return;
      }

      console.log(`Web server listening on localhost:${webServerConfig.port}`);

      resolve();
    });
  });
}

module.exports.initialize = initialize;

function close() {
    return new Promise((resolve, reject) => {
      httpServer.close((err) => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve();
      });
    });
  }
  
  module.exports.close = close;

  const iso8601RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

function reviveJson(key, value) {
  // revive ISO 8601 date strings to instances of Date
  if (typeof value === 'string' && iso8601RegExp.test(value)) {
    return new Date(value);
  } else {
    return value;
  }
}