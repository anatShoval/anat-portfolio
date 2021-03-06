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

app.get('/2DAnimation.html', function (req, res) {
    res.sendFile('2DAnimation.html', {
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

app.get('/ContactMe.html', function (req, res) {
    res.sendFile('ContactMe.html', {
        root: __dirname
    })
})

app.get('/CodeCorner.html', function (req, res) {
    res.sendFile('CodeCorner.html', {
        root: __dirname
    })
})

app.get('/Drawings.html', function (req, res) {
    res.sendFile('Drawings.html', {
        root: __dirname
    })
})


app.listen(process.env.PORT || 3000, function () {
 console.log('Anat Portfolio app listening on port ' + (process.env.PORT || 3000))
})
