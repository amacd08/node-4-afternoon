const swag = require('../models/swag')

module.exports = {
    add: (req,res,next) => {
        productID = req.params.id
        let {cart} = req.session.user
        let productInCart = cart.find(swag => swag.id == productID)
        if (productInCart) {
            req.send(req.session.user)
        } else {
            product = swag.find(swag => swag.id == productID)
            cart.push(product)
            req.session.user.total += product.price
            res.send(req.session.user)
        }
    },
    delete: (req,res,next) => {
        productID = req.params.id
        index = 0
        removeProduct = req.session.user.cart.filter((product,i) => {
            if (productID == product.id) {
                req.session.user.total -= product.price
                req.session.user.cart.splice(i,1)
            }
        })
        res.send(req.session.user)
    },
    checkout: (req,res,next) => {
        req.session.user.cart = []
        req.session.user.total = 0
        res.send(req.session.user)

    }
}


