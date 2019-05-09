'use strict';

exports.login = function(req, res) {
    if(req.body.username == "admin" && req.body.password == "Innovation2019"){
        return res.send({status: "login success", accessToken: Math.floor(Math.random() * Math.floor(10000))+''});
    }
    return res.status(404).send({status: "login failed"});
};
