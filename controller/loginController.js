'use strict';

exports.login = function(req, res) {
    if(req.body.username == "user" && req.body.password == "pass"){
        return res.send("login success");
    }
    return res.status(404).send("login failed");
};
