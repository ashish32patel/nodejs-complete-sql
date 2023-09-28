const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'mysql123',
});

module.exports = pool.promise();  //exports the promise-based connection pool from this module.

/*
The mysql2 module provides both a callback-style interface and a Promise-based interface for working with MySQL databases.
Here we are exporting the promise-based connection pool,
This allows other modules in our application to import and use the promise-based pool for performing database operations asynchronously using Promises.

By exporting the promise-based pool,
other parts of your application can use it to execute database queries using async/await syntax or Promise chaining, 
making it easier to work with MySQL database operations in a more modern and asynchronous manner.
*/