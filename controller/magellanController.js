// Import magellan model
Magellan = require('../model/magellanModel');
moment = require('moment');
// Handle index actions
exports.index = function (req, res) {
    Magellan.get(function (err, magellans) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Magellans retrieved successfully",
            data: magellans
        });
    });
};
// Handle create magellan actions
exports.new = function (req, res) {
    var magellan = new Magellan();
    magellan.pm25 = req.body.pm25;
    magellan.pm10 = req.body.pm10;
    magellan.co2 = req.body.co2;
    magellan.tvoc = req.body.tvoc;
    magellan.hcho = req.body.hcho;
    magellan.temp = req.body.temp;
    magellan.hum = req.body.hum;
    magellan.date_time = req.body.date_time;
    // save the magellan and check for errors
    magellan.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New magellan created!',
            data: magellan
        });
    });
};
// Handle view magellan info
exports.view = function (req, res) {
    Magellan.findById(req.params.magellan_id, function (err, magellan) {
        if (err)
            res.send(err);
        res.json({
            message: 'Magellan details loading..',
            data: magellan
        });
    });
};
// Handle update magellan info
exports.update = function (req, res) {
    Magellan.findById(req.params.magellan_id, function (err, magellan) {
        if (err)
            res.send(err);
        magellan.pm25 = req.body.pm25;
        magellan.pm10 = req.body.pm10;
        magellan.co2 = req.body.co2;
        magellan.tvoc = req.body.tvoc;
        magellan.hcho = req.body.hcho;
        magellan.temp = req.body.temp;
        magellan.hum = req.body.hum;
        megallan.date_time = req.body.date_time;
        // save the magellan and check for errors
        magellan.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Magellan Info updated',
                data: magellan
            });
        });
    });
};
// Handle delete magellan
exports.delete = function (req, res) {
    Magellan.remove({
        _id: req.params.magellan_id
    }, function (err, magellan) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Magellan deleted'
        });
    });
};
