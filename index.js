const app = require('./src/app.js')

//start server
app.listen(app.get('port'))
console.log('server listening on port', app.get('port'))