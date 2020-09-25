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
			query
				.then(data => {
					resolve(data || null);
				})
				.catch(err => {
					reject(err);
				});
        });
	},
	updateMovieChoice: async (userId, groupId, movieId, approved) => {
        return new Promise((resolve,reject) => {
            let query = knex.withSchema('movinder_schema').from('liked_movies as lm');
			query.insert(
				{ 
					'user_id': userId, 
					'group_id': groupId,
					'movie_id': movieId,
					'approved': approved

				});

			query
				.then(data => {
					resolve(data || null);
				})
				.catch(err => {
					reject(err);
				});
        });
	},
	noOfApproved: async ( groupId, movieId, approved) => {
        return new Promise((resolve,reject) => {
			let query = knex.withSchema('movinder_schema').from('liked_movies as lm');
			query.count('*');
			query.where(
				{ 
					'group_id': groupId,
					'movie_id': movieId,
					'approved': approved

				});
			query
				.then(data => {
					resolve(data[0] || null);
				})
				.catch(err => {
					reject(err);
				});
        });
	},
	getMatchedMovies:async ( groupId, approved=true) => {
        return new Promise((resolve,reject) => {
			let query2 = knex.withSchema('movinder_schema').from('group_members as gm');
			query2.count('* as count');
			query2.where(
				{ 
					'gm.group_id': groupId

				});
			let query = knex.withSchema('movinder_schema').from('liked_movies as lm');
			query.select(['lm.movie_id'])
			.where(
				{ 
					'lm.group_id': groupId,
					'lm.approved': approved

				})
			.groupBy('lm.movie_id')
			.having(knex.raw('count(*) = ('+query2.toString()+')'));
			query
				.then(data => {
					resolve(data || null);
				})
				.catch(err => {
					reject(err);
				});
        });
	}, 
	getNoOfApprovesForMovie: async ( movieId, groupId, approved) => {
        return new Promise((resolve,reject) => {
			let query = knex.withSchema('movinder_schema').from('liked_movies as lm');
			query.count('*');
			query.where(
				{ 
					'lm.group_id': groupId,
					'lm.movie_id': movieId,
					'lm.approved': approved

				});
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