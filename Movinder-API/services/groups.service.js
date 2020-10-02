let {GroupModel} = require('../models/groups.model');

let GroupService = {
    checkUser : async function(userId,groupCode){
        return await GroupModel.checkuser(userId,groupCode);
    },
    getGroupsOfUser : async function(userId){
        return await GroupModel.getGroupsOfUser(userId);
    },
    joinGroup : async function(userId, groupCode){
        let group = await GroupModel.checkGroup(groupCode);
        if(group){
            let is_member = await GroupModel.checkuser(userId, groupCode);
            if(!is_member){
                await GroupModel.joinGroup(userId, group.group_id);
                await GroupModel.increaseCount(group.group_id);
            }
            return group;
        } else {
            throw new Error('Group Not found');
        }
    },
}

module.exports = {
    GroupService:GroupService
}