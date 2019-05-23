const users = require('../models/users')
let id = 1
module.exports = {
    login: (req,res,next) => {
        let {username, password} = req.body
        let users = users.filter(user => {
            if (user.username === username && user.password === password) {
                req.session.username = username
                res.send(req.session.user)
            } else {
                res.sendStatus(500)
            }
        })
    },
    register: (req,res,next) => {
        let {username, password} = req.body
        newUser = {
            username,
            password,
            id
        }
        id++
        req.session.user.username = username
        res.send(req.session.user)
    },
    signout: (req,res,next) => {
        req.session.destroy()
        res.send(req.session)
    },
    getUser: (req,res,next) => {
        res.send(req.session.user)
    }

}