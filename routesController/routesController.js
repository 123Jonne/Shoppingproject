const service = require(__basename + '/service/service.js');

const SQL = require(__basename + '/lib/sql/sql.js');

const common = require(__basename + '/common/common.js');

const utils = require(__basename + '/lib/utils/utils.js');

const moment = require('moment');

class RoutesController {
	constructor (){}

	homeController (req, res) {
		res.render('index');
	}


registerController (req, res) {
		let sql = SQL.findOneForReg(req.body.phone);
		service.query(sql)
			.then((result) => {
				if (Array.isArray(result) && result.length === 0) {
					utils.addCrypto(req.body, 'pwd');
					let insertsql = SQL.insertOneForReg(req.body);
					service.query(insertsql)
						.then((result) => {
							res.send(common.register.success);
						})
						.catch((err) => {
							res.send(common.register.error);
						})
				} else {
					res.send(common.register.warning);
				}
			})
			.catch((err) => {
				res.send(common.register.error);
			})
	}
loginController (req, res) {
		utils.addCrypto(req.body, 'pwd');
		let loginsql = SQL.findOneForLogin(req.body);
		service.query(loginsql)
			.then((result) => {
				if (Array.isArray(result) && result.length === 1) {
					for (var k in common.login.success) {
						result[0][k] = common.login.success[k];
					}
					res.send(result);
				} else {
					res.send([common.login.warning]);
				}
			})
			.catch((err) => {
				res.send([common.login.error]);
			})
	}


	sendSMSController (req, res) {
		let time = new Date().getTime().toString();
		let code = time.substr(time.length - 4, 4);
		let smsOptions = {
			PhoneNumbers: req.body.PhoneNumbers, //接收短信手机号
		  SignName: 'Jonne维', //短信签名
		  TemplateCode: 'SMS_109010011', //短信模板代码
		  TemplateParam: '{"code":"' + code + '"}'  //短信验证码
		};

		utils.sendSMS(smsOptions, function (s) {
			console.log('s ==> ', s);
			if (s.Code == 'OK') {
				res.json({msg: '短信发送成功, 请注意查收'});
			}
		}, function (err) {
			res.json({msg: '短信验证码获取失败'});
		})
	}
}


module.exports = new RoutesController();
	

	