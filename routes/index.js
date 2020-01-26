const catergoryController = require('../controller/category.controller');
const productController = require('../controller/product.controller');
module.exports = (app) => {
    app.get('/', (req, res) => { res.send("Welcome to My Web Application") });
    app.post('/category/create_category', catergoryController.createCategory);
    app.post('/category/create_many', catergoryController.createMany);
    app.post('/product/create_product', productController.createProd);
    app.post('/product/create_bulk', productController.createBulk);
    app.post('/goutham')
    app.post('/naren')
}