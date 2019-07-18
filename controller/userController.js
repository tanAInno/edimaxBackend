User = require('../model/userModel');
var passwordHash = require('password-hash')

exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    });
};

exports.new = async function (req, res) {
    let userResponse = await User.findOne({username: req.body.username})
    if(userResponse != null)
        return res.json({status: "failed", message: "username นี้ถูกใช้งานไปแล้ว"});
    if(req.body.password == "")
        return res.json({status: "failed", message: "password ไม่ถูกต้อง"});
    if(req.body.name == "" || req.body.surname == "" || req.body.email == "" || req.body.company == "" || req.body.phone == "")
        return res.json({status: "failed", message: "กรุณาใส่ข้อมูลที่จำเป็นให้ครบถ้วน"});
    var user = new User();
    user.username = req.body.username;
    user.password = passwordHash.generate(req.body.password);
    user.type = req.body.type;
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.email = req.body.email;
    user.company = req.body.company;
    user.address = req.body.address;
    user.province = req.body.province;
    user.district = req.body.district;
    user.subdistrict = req.body.subdistrict;
    user.phone = req.body.phone;
    user.zipcode = req.body.zipcode;
    user.productOrderList = req.body.productOrderList;
    user.serviceOrderList = req.body.serviceOrderList;
    user.save(function (err) {
        if (err)
            res.json(err);
        return res.json({
            status: 'success',
            message: 'New user created!',
            data: user
        });
    });
};

exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user
        });
    });
};
// Handle update user info
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        user.username = req.body.username;
        user.password = req.body.password;
        user.type = req.body.type;
        user.name = req.body.name;
        user.surname = req.body.surname;
        user.email = req.body.email;
        user.company = req.body.company;
        user.address = req.body.address;
        user.province = req.body.province;
        user.district = req.body.district;
        user.subdistrict = req.body.subdistrict;
        user.phone = req.body.phone;
        user.zipcode = req.body.zipcode;
        user.productOrderList = req.body.productOrderList;
        user.serviceOrderList = req.body.serviceOrderList;
        // save the user and check for errors
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: user
            });
        });
    });
};
// Handle delete user
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};

exports.getUserbyAccessToken = async function (req, res) {
    let userResponse = await User.findOne({accessToken: req.params.user_accessToken})
    if (userResponse == null || userResponse == undefined)
        return res.status(404).send({status: "undefined"});
    res.json({
        message: 'User details loading..',
        data: userResponse
    });
}

exports.updateProductOrder = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        user.productOrderList = req.body.productOrderList;
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: user
            });
        });
    });
};

exports.updateServiceOrder = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        user.serviceOrderList = req.body.serviceOrderList;
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: user
            });
        });
    });
};