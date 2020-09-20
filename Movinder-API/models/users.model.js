let {knex} = require('../config/database');

module.exports.UserModel =  {
    checkuser: async (uname,password) => {
        return new Promise((resolve,reject) => {
            let query = knex.withSchema('movinder_schema').from('users');

			query.where({ username: uname });

			query
				.then(data => {
					resolve(data[0] || null);
				})
				.catch(err => {
					reject(err);
				});
        });
    }
}