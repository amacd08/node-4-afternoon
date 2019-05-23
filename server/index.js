const express = require('express')
require('dotenv').config()
const session = require('express-session')
const app = express()
const {SERVER_PORT,SESSION_SECRET} = process.env
const checkForSession = require('./middleware/checkForSession')
const sc = require('./controller/swagController')
const ac = require('./controller/authController')
const cc = require('./controller/cartController')
const sec = require('./controller/searchController')

const port = 3001
app.use(express.json())
app.use(session({
    secret:SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000*60*60
        }
    }))
app.use(checkForSession)

app.get('/api/swag', sc.read)
app.post('/api/login', ac.login)
app.post('/api/register', ac.register)
app.post('/api/signout', ac.signout)
app.get('/api/user', ac.getUser)
app.post('/api/cart/checkout', cc.checkout)
app.post('/api/cart/:id', cc.add)
app.delete('/api/cart/:id', cc.delete)
app.get('/api/search', sec.search)

app.listen(SERVER_PORT, () => console.log(`Working on port ${SERVER_PORT}`))