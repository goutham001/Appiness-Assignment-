const catModel = require('../models').category;
module.exports = {
    createCategory(req, res) {
        var category = req.body;
        catModel.create(category).then(catRes => {
            if (catRes)
                res.send("category created succesfully");
            else
                res.send("Category creation failed");
        })
            .catch(err => { console.log(err) })
    },
    createMany(req, res) {
        var category = req.body;
        catModel.bulkCreate(category).then(cats => {
            if (cats.length > 0)
                res.send("inserted succesfully");
            else
                res.send("insertion failed");
        })
            .catch(err => { console.log(err) })
    },
    findProduct(req, res) {
        orderModel.findOne({
            include: {
                model: catModel,
                as: 'prod_cat'
            },
            where: { cat_id_pk: req.query.type }
        }).then(product => {
            if (product.length > 0)
                res.send(envelop.wrapSuccess(product, 'success'))
            else
                res.send(envelop.wrapNotAcceptable('failed'))
        })
            .catch(err => { res.send(envelop.wrapError(err)) });
    },
}