require('./src/db')
const app = require('./src/app')

//start server
app.listen(app.get('port'))
console.log('server listening on port', app.get('port'))