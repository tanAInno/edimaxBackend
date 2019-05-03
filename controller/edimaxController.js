// Import edimax model
Edimax = require('../model/edimaxModel');
moment = require('moment');
// Handle index actions
exports.index = function (req, res) {
    Edimax.get(function (err, edimaxes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        let sortList = edimaxes.sort(function (a, b) {
            return moment(b.date_time) - moment(a.date_time)
        })
        res.json({
            status: "success",
            message: "Edimaxs retrieved successfully",
            data: edimaxes
        });
    });
};
// Handle create edimax actions
exports.new = function (req, res) {
    var edimax = new Edimax();
    edimax.name = req.body.name ? req.body.name : edimax.name;
    edimax.area = req.body.area;
    edimax.status = req.body.status;
    edimax.type = req.body.type;
    edimax.pm1 = req.body.pm1;
    edimax.pm25 = req.body.pm25;
    edimax.pm10 = req.body.pm10;
    edimax.co = req.body.co;
    edimax.co2 = req.body.co2;
    edimax.tvoc = req.body.tvoc;
    edimax.hcho = req.body.hcho;
    edimax.temperature = req.body.temperature;
    edimax.humidity = req.body.humidity;
    edimax.date_time = req.body.date_time;
// save the edimax and check for errors
    edimax.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New edimax created!',
            data: edimax
        });
    });
};
// Handle view edimax info
exports.view = function (req, res) {
    Edimax.findById(req.params.edimax_id, function (err, edimax) {
        if (err)
            res.send(err);
        res.json({
            message: 'Edimax details loading..',
            data: edimax
        });
    });
};
// Handle update edimax info
exports.update = function (req, res) {
    Edimax.findById(req.params.edimax_id, function (err, edimax) {
        if (err)
            res.send(err);
        edimax.name = req.body.name ? req.body.name : edimax.name;
        edimax.area = req.body.area;
        edimax.status = req.body.status;
        edimax.type = req.body.type;
        edimax.pm1 = req.body.pm1;
        edimax.pm25 = req.body.pm25;
        edimax.pm10 = req.body.pm10;
        edimax.co = req.body.co;
        edimax.co2 = req.body.co2;
        edimax.tvoc = req.body.tvoc;
        edimax.hcho = req.body.hcho;
        edimax.temperature = req.body.temperature;
        edimax.humidity = req.body.humidity;
        edimax.date_time = req.body.date_time;
// save the edimax and check for errors
        edimax.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Edimax Info updated',
                data: edimax
            });
        });
    });
};
// Handle delete edimax
exports.delete = function (req, res) {
    Edimax.remove({
        _id: req.params.edimax_id
    }, function (err, edimax) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Edimax deleted'
        });
    });
};
