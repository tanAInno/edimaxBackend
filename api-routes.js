// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import edimax controller
var edimaxController = require('./controller/edimaxController');
var loginController = require('./controller/loginController');
var productController = require('./controller/productController');
var serviceController = require('./controller/serviceController');
var couponController = require('./controller/couponController');
var userController = require('./controller/userController');
var productAdController = require('./controller/productAdController');

// Asset routes
router.route('/edimaxs')
    .get(edimaxController.index)
    .post(edimaxController.new);
router.route('/edimaxs/:edimax_id')
    .get(edimaxController.view)
    .patch(edimaxController.update)
    .put(edimaxController.update)
    .delete(edimaxController.delete);
router.route('/products')
    .get(productController.index)
    .post(productController.new);
router.route('/products/:product_id')
    .get(productController.view)
    .patch(productController.update)
    .put(productController.update)
    .delete(productController.delete);
router.route('/productAds')
    .get(productAdController.index)
    .post(productAdController.new);
router.route('/productAds/:productAd_id')
    .get(productAdController.view)
    .patch(productAdController.update)
    .put(productAdController.update)
    .delete(productAdController.delete);
router.route('/services')
    .get(serviceController.index)
    .post(serviceController.new);
router.route('/services/:service_id')
    .get(serviceController.view)
    .patch(serviceController.update)
    .put(serviceController.update)
    .delete(serviceController.delete);
router.route('/coupons')
    .get(couponController.index)
    .post(couponController.new);
router.route('/coupons/:coupon_id')
    .get(couponController.view)
    .patch(couponController.update)
    .put(couponController.update)
    .delete(couponController.delete);
router.route('/couponbycode/:code')
    .get(couponController.viewByCode);
router.route('/usedcoupon/:coupon_id')
    .put(couponController.usedCoupon)
router.route('/users')
    .get(userController.index)
    .post(userController.new);
router.route('/users/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);
router.route('/userproduct/:user_id')
    .put(userController.updateProductOrder)
router.route('/userservice/:user_id')
    .put(userController.updateServiceOrder)
router.route('/userbytoken/:user_accessToken')
    .get(userController.getUserbyAccessToken);
router.route('/login')
    .post(loginController.login);
router.route('/loginadmin')
    .post(loginController.loginadmin);
router.route('/loginfacebook')
    .post(loginController.loginfacebook);
router.route('/updatetoken')
    .put(loginController.update);
// Export API routes
module.exports = router;