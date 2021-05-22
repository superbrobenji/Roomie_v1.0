if (process.env.NODE_ENV === 'production') {
	module.exports = require('./host');
} else {
	module.exports = require('./local');
}
