var app, server
express = require('express')
path = require('path')
host = process.env.HOST || '127.0.0.1'
port = process.env.PORT || 8080
root = path.resolve(__dirname, '.')

app = express()
app.use(express.static(root+'/jekyll/_site/'))


server = app.listen(port, host, ()=>{
	console.log('server started')
})

