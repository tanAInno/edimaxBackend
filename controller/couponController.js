Coupon = require('../model/couponModel');

exports.index = function (req, res) {
    Coupon.get(function (err, coupons) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Coupons retrieved successfully",
            data: coupons
        });
    });
};

exports.new = function (req, res) {
    var coupon = new Coupon();
    coupon.code = req.body.code;
    coupon.used = req.body.used;
    coupon.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New coupon created!',
            data: coupon
        });
    });
};

exports.view = function (req, res) {
    Coupon.findById(req.params.coupon_id, function (err, coupon) {
        if (err)
            res.send(err);
        res.json({
            message: 'Coupon details loading..',
            data: coupon
        });
    });
};

exports.update = function (req, res) {
    Coupon.findById(req.params.coupon_id, function (err, coupon) {
        if (err)
            res.send(err);
        coupon.code = req.body.code;
        coupon.used = req.body.used;
        coupon.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Coupon Info updated',
                data: coupon
            });
        });
    });
};

exports.delete = function (req, res) {
    Coupon.remove({
        _id: req.params.coupon_id
    }, function (err, coupon) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Coupon deleted'
        });
    });
};
