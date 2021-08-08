//database configuration, in this case i use postgresql
const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'crud_bank',
    password: 'password',
    port: 5432,
  })

client
  .connect()
  .then((db) => console.log("Db is connected"))
  .catch(err => console.error(err));
