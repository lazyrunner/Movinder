var express = require('express');
var router = express.Router();
let {GroupService} = require('../services/groups.service');

router.route('/').get( async (req, res, next) => {
  //TODO:Getlist of groups the user belongs to   
  res.send('respond with a resource');
}).post( async (req, res, next) => {
  //TODO:Create a new user
  // use https://www.npmjs.com/package/shortid to generate code
  
});

router.route('/check-user').post( async (req, res, next) => {
  let { userId, groupCode} = req.body;
  let group_details =await GroupService.checkUser(userId,groupCode)
  if(group_details){
    res.send(group_details);
  } else {
    res.status(404).json({
      message: 'User does not belong or group does not exist'
    });
  }
  
});

module.exports = router;
