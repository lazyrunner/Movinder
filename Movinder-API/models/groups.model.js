let {knex} = require('../config/database');

module.exports.GroupModel =  {
    checkuser: async (userId,groupCode) => {
        return new Promise((resolve,reject) => {
			let query = knex.withSchema('movinder_schema').from('group_members as gm');
			query.select(['gd.group_id','gd.group_name','gd.group_id','gd.group_code']);
			query.leftJoin('group_details as gd', 'gm.group_id', 'gd.group_id')
			query.where(
				{ 
					'gm.user_id': userId, 
					'gd.group_code': groupCode

				});
			console.log(query.toString());

			query
				.then(data => {
					resolve(data[0] || null);
				})
				.catch(err => {
					reject(err);
				});
        });
	},
	getMembersCount: async (groupId) => {
        return new Promise((resolve,reject) => {
			let query = knex.withSchema('movinder_schema').from('group_members as gm');
			query.count('*');
			query.where(
				{ 
					'gm.group_id': groupId

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
	getGroupsOfUser: async (userId) => {
        return new Promise((resolve,reject) => {
			let query = knex.withSchema('movinder_schema').from('group_details as gd');
			let query2 = knex.withSchema('movinder_schema').from('group_members as gm');
			query2.select(['gm.group_id' , knex.raw('count(gm.user_id)')])
			.groupBy('gm.group_id');
			query.leftJoin(query2.as('gmz'),'gmz.group_id','gd.group_id')
			.leftJoin('group_members as gm2','gm2.group_id','gd.group_id')
			.where(
				{ 
					'gm2.user_id': userId

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
	},
	checkGroup: async (groupCode) => {
        return new Promise((resolve,reject) => {
			let query = knex.withSchema('movinder_schema').from('group_details as gd');
		
			query.where(
				{ 
					'gd.group_code': groupCode
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
	joinGroup: async (userId,groupId) => {
        return new Promise((resolve,reject) => {
			let query = knex.withSchema('movinder_schema').from('group_members as gm');
			query.insert(
				{ 
					'user_id': userId, 
					'group_id': groupId

				});

			query
				.then(data => {
					resolve(data|| null);
				})
				.catch(err => {
					reject(err);
				});
        });
	},
	increaseCount:  async (groupId) => {
        return new Promise((resolve,reject) => {
			let query = knex.withSchema('movinder_schema').from('group_details');
			query.where(
				{ 
					'group_id': groupId

				});
			query.update({
				'number_of_members': knex.raw('number_of_members + 1')
			})

			query
				.then(data => {
					resolve(data|| null);
				})
				.catch(err => {
					reject(err);
				});
        });
	}
}