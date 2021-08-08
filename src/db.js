//database configuration, in this case i use postgresql
const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crud_bank',
    password: 'passs',
    port: 5432,
  })

pool
  .connect()
  .then((db) => console.log("Db is connected"))
  .catch(err => console.error(err));

//export db object
module.exports = pool;