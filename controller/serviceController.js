Service = require('../model/serviceModel');

exports.index = function (req, res) {
    Service.get(function (err, services) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Services retrieved successfully",
            data: services
        });
    });
};

exports.new = function (req, res) {
    var service = new Service();
    service.name = req.body.name;
    service.phone = req.body.phone;
    service.address = req.body.address;
    service.totalprice = req.body.totalprice;
    service.date = req.body.date;
    service.time = req.body.time;
    service.services = req.body.services;
    service.addition = req.body.addition;
    service.image = req.body.image;
    service.paymentOption = req.body.paymentOption;
    service.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New service created!',
            data: service
        });
    });
};

exports.view = function (req, res) {
    Product.findById(req.params.service_id, function (err, service) {
        if (err)
            res.send(err);
        res.json({
            message: 'Service details loading..',
            data: service
        });
    });
};
// Handle update service info
exports.update = function (req, res) {
    Product.findById(req.params.service_id, function (err, service) {
        if (err)
            res.send(err);
        service.name = req.body.name;
        service.phone = req.body.phone;
        service.address = req.body.address;
        service.totalprice = req.body.totalprice;
        service.date = req.body.date;
        service.time = req.body.time;
        service.services = req.body.services;
        service.addition = req.body.addition;
        service.image = req.body.image;
        service.paymentOption = req.body.paymentOption;
        // save the service and check for errors
        service.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Service Info updated',
                data: service
            });
        });
    });
};
// Handle delete service
exports.delete = function (req, res) {
    Product.remove({
        _id: req.params.service_id
    }, function (err, service) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Service deleted'
        });
    });
};
