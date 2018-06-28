console.log('ROUTES FILE')
var path = require("path");
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

module.exports = function (app) {

    // create
    app.post('/create', productController.create);

    // read all
    app.get('/readall', productController.readall);
    
    // WILD CARD
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
        }); 

}
