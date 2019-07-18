User = require('../model/userModel');
var passwordHash = require('password-hash')

exports.login = async function(req, res) {
    let userResponse = await User.findOne({username: req.body.username})
    if(userResponse == null)
        return res.send({status: "login failed"});
    let password = userResponse.password
    let result = passwordHash.verify(req.body.password, password);
    let accessToken = passwordHash.generate(Math.floor(Math.random() * Math.floor(100000000))+'');
    if(result){
        return res.send({status: "login success", accessToken: accessToken});
    }
    return res.send({status: "login failed"});
};

exports.loginadmin = async function(req, res) {
    let userResponse = await User.findOne({username: req.body.username})
    if(userResponse == null)
        return res.send({status: "login failed"});
    let password = userResponse.password
    let result = passwordHash.verify(req.body.password, password);
    let accessToken = passwordHash.generate(Math.floor(Math.random() * Math.floor(100000000))+'');
    if(result && userResponse.type == "admin"){
        return res.send({status: "login success", accessToken: accessToken});
    }
    return res.send({status: "login failed"});
}

exports.update = async function(req, res) {
    let userResponse = await User.findOne({username: req.body.username})
    User.findById(userResponse._id, function (err, user) {
        if (err)
            res.send(err);
        user.accessToken = req.body.accessToken;
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