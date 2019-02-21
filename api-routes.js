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
// Asset routes
router.route('/edimaxs')
    .get(edimaxController.index)
    .post(edimaxController.new);
router.route('/edimaxs/:edimax_id')
    .get(edimaxController.view)
    .patch(edimaxController.update)
    .put(edimaxController.update)
    .delete(edimaxController.delete);
router.route('/login')
    .post(loginController.login);
// Export API routes
module.exports = router;