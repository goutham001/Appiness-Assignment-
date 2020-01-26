const prodModel = require('../models').product;
module.exports = {
    createProd(req, res) {
        var product = req.body;
        prodModel.create(product).then(produRes => {
            if (produRes)
                res.send("product created successfully");
            else
                res.send("product creation failed");
        })
            .catch(err => { console.log(err) })
    },
    createBulk(req, res) {
        var product = req.body;
        prodModel.bulkCreate(product).then(prodres => {
            if (prodres.length > 0)
                res.send("products created successfully");
            else
                res.send("products creation failed");
        })
            .catch(err => { console.log(err) })
    }
}