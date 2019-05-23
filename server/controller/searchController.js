const swag = require('../models/swag')

module.exports = {
    search: (req,res) => {
        categories = ['hats', 'shirts', 'jackets', 'sweaters', 'pants', 'shorts']
        let search = categories.includes(req.query.category)
        if (!search) {
            res.send(swag)
        } else if (search) {
            filteredList = swag.filter(product => {
                product.category === req.query.category
            })
            res.send(filteredList)
            
        }

        
    }
}