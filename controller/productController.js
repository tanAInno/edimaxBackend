Product = require('../model/productModel');

exports.index = function (req, res) {
    Product.get(function (err, products) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Products retrieved successfully",
            data: products
        });
    });
};

exports.new = function (req, res) {
    var product = new Product();
    product.name = req.body.name;
    product.email = req.body.email;
    product.phone = req.body.phone;
    product.department = req.body.department;
    product.workplace = req.body.workplace;
    product.productList = req.body.productList;
    product.paymentOption = req.body.paymentOption;
    product.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New product created!',
            data: product
        });
    });
};

exports.view = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
        res.json({
            message: 'Product details loading..',
            data: product
        });
    });
};
// Handle update product info
exports.update = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
        product.name = req.body.name;
        product.email = req.body.email;
        product.phone = req.body.phone;
        product.department = req.body.department;
        product.workplace = req.body.workplace;
        product.productList = req.body.productList;
        product.paymentOption = req.body.paymentOption;
// save the product and check for errors
        product.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Product Info updated',
                data: product
            });
        });
    });
};
// Handle delete product
exports.delete = function (req, res) {
    Product.remove({
        _id: req.params.product_id
    }, function (err, product) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Product deleted'
        });
    });
};
