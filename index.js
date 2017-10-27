const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('public'))

app.get('/', function (req, res) {
    console.log('/')
    res.sendFile('index.html', {
        root: __dirname
    })
    console.log('index.html')
})

app.get('/3DAnimation.html', function (req, res) {
    res.sendFile('3DAnimation.html', {
        root: __dirname
    })
})

app.get('/AboutMe.html', function (req, res) {
    res.sendFile('AboutMe.html', {
        root: __dirname
    })
})

app.get('/GraphicDesign.html', function (req, res) {
    res.sendFile('GraphicDesign.html', {
        root: __dirname
    })
})

app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
})