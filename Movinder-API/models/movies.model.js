let {knex} = require('../config/database');

module.exports.MoviesModel =  {
    getDecidedMovies: async (userId, groupId) => {
        return new Promise((resolve,reject) => {
            let query = knex.withSchema('movinder_schema').from('liked_movies as lm');
            query.select(['movie_id']);
			query.where(
				{ 
					'user_id': userId, 
					'group_id': groupId

				});
			console.log(query.toString());

			query
				.then(data => {
					resolve(data || null);
				})
				.catch(err => {
					reject(err);
				});
        });
    }
}