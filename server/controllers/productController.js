console.log('productController.js')
const mongoose = require('mongoose');
var User = mongoose.model('User');
var Product = mongoose.model('Product');


module.exports = {
    create: function(req, res) {
        console.log('> productController > create >');
        // console.log('> req.body =>', req.body);
        console.log('req.body.name =>', req.body.name);
        console.log('req.body.qty =>', req.body.qty);
        console.log('req.body.price =>', req.body.price);

        var productInstance = new Product(req.body);
        productInstance.save(function (err){
            if (err) {
                console.log('>productController > create > save > ERR => err')
                res.json({message: 'we got err', error: err})
            }
            else {
                console.log('>productController > create > save > OK err=>', err)
                res.json({message: 'ok save'})
            }
        })
    },


    readall: function(req, res) {
        console.log('>productController > readall >');
        Product.find({}, function(err, return_arr) {
            if (err){
                console.log('=========> ERROR <============');
                console.log('>\n\nproductController > readall > Product.find({}) > ERR =>', err);
                res.json({messsage: '>>productController > readall > Product.find({}) > ERR', error: err});
            }
            else {
                console.log('>productController > readall > Product.find({}) > OK');
                res.json({messsage: '>>productController > readall > Product.find({}) > ok > data', data: return_arr})
            }
        })
    },
}