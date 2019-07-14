var mongoose = require('mongoose');

var couponSchema = mongoose.Schema({
    code: {
        type: String,
        default: ''
    },
    used: {
        type: String,
        default: 'unused'
    }
})

var coupon = module.exports = mongoose.model('coupon', couponSchema);
module.exports.get = function (callback, limit) {
    Coupon.find(callback).limit(limit);
}