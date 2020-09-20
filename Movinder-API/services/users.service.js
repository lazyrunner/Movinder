let {UserModel} = require('../models/users.model');

let UserService = {
    checkUser : async function(uname,password){
        let user =await UserModel.checkuser(uname,password);
        if(user){
            return user.user_id
        }
        return false;
    }
}

module.exports = {
    UserService:UserService
}