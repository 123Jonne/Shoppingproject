const RoutesController = require(__basename + '/routesController/routesController.js');

module.exports = function(app) {
	//加载所有路由
	app.get('/', RoutesController.rootController);
	app.post('/register', RoutesController.registerController);
	app.post('/login', RoutesController.loginController);
	app.get('/main/shopcart/:id', RoutesController.shoppingcartController);
	app.post('/sendSMS', RoutesController.sendSMSController);

}