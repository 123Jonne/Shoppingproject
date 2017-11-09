let server={
	host:'127.0.0.1',
	port:'9000'
}
exports.server=server;

exports.mysqlOptions={
	host:server.host,
	user:'root',
	password:'',
	database:'shoppingproject'
}