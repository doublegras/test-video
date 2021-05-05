const path = require('path');

module.exports = {
	key: path.join(__dirname, '../.ssl/local.key'),
	cert: path.join(__dirname, '../.ssl/local.crt'),
	portHttp: 8000,
	portHttps: 8001
}