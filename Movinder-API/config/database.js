const Knex = require('knex');
const knex = Knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: 'Welcome@123',
		database: 'movinder'
	}
});

module.exports = {
	knex: knex
};