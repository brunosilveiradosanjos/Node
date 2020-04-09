const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Me',
        name: 'Andrew Mead'
    })
})

app.get('/weather', (req, res) => {
    res.send({ forecast: 'Sunny', location: 'São Paulo' })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})