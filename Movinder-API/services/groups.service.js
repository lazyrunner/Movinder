let {GroupModel} = require('../models/groups.model');

let GroupService = {
    checkUser : async function(userId,groupCode){
        return await GroupModel.checkuser(userId,groupCode);
    }
}

module.exports = {
    GroupService:GroupService
}