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
	}
}