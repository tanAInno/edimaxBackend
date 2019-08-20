ProductAd = require('../model/productAdModel');

exports.index = function (req, res) {
    ProductAd.get(function (err, productAds) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Products retrieved successfully",
            data: productAds
        });
    });
};

exports.new = function (req, res) {
    var productAd = new ProductAd();
    productAd.name = req.body.name;
    productAd.image = req.body.image;
    productAd.type = req.body.type;
    productAd.price = req.body.price;
    productAd.description = req.body.description;
    productAd.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New productAd created!',
            data: productAd
        });
    });
};

exports.view = function (req, res) {
    Product.findById(req.params.productAd_id, function (err, productAd) {
        if (err)
            res.send(err);
        res.json({
            message: 'Product details loading..',
            data: productAd
        });
    });
};
// Handle update productAd info
exports.update = function (req, res) {
    Product.findById(req.params.productAd_id, function (err, productAd) {
        if (err)
            res.send(err);
        productAd.name = req.body.name;
        productAd.image = req.body.image;
        productAd.type = req.body.type;
        productAd.price = req.body.price;
        productAd.description = req.body.description;
        // save the productAd and check for errors
        productAd.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Product Info updated',
                data: productAd
            });
        });
    });
};
// Handle delete productAd
exports.delete = function (req, res) {
    Product.remove({
        _id: req.params.productAd_id
    }, function (err, productAd) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Product deleted'
        });
    });
};
