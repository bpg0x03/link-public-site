var app, server
express = require('express')
path = require('path')
port = process.env.PORT || 8080
root = path.resolve(__dirname, '.')

app = express()
app.use(express.static(root+'/jekyll/_site/'))


server = app.listen(port, ()=>{
	console.log('server started ' + port)
})

