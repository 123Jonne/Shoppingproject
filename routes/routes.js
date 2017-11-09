const RoutesController = require(__basename + '/routesController/routesController.js');

module.exports = function(app) {
	//加载所有路由
	app.get('/', RoutesController.homeController);
	app.post('/register', RoutesController.registerController);
	app.post('/login', RoutesController.loginController);
	app.post('/sendSMS', RoutesController.sendSMSController);

}