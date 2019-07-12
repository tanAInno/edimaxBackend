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
    product.surname = req.body.surname;
    product.email = req.body.email;
    product.company = req.body.company;
    product.address = req.body.address;
    product.province = req.body.province;
    product.district = req.body.district;
    product.subdistrict = req.body.subdistrict;
    product.phone = req.body.phone;
    product.zipcode = req.body.zipcode;
    product.homephone = req.body.homephone;
    product.fax = req.body.fax;
    product.productList = req.body.productList;
    product.totalprice = req.body.totalprice;
    product.paymentImage = req.body.paymentImage;
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
        product.surname = req.body.surname;
        product.email = req.body.email;
        product.company = req.body.company;
        product.address = req.body.address;
        product.province = req.body.province;
        product.district = req.body.district;
        product.subdistrict = req.body.subdistrict;
        product.phone = req.body.phone;
        product.zipcode = req.body.zipcode;
        product.homephone = req.body.homephone;
        product.fax = req.body.fax;
        product.productList = req.body.productList;
        product.totalprice = req.body.totalprice;
        product.paymentImage = req.body.paymentImage;
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
