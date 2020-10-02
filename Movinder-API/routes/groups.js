var express = require('express');
var router = express.Router();
let {GroupService} = require('../services/groups.service');

router.route('/list/:userId').get( async (req, res, next) => {
  let { userId } = req.params;
  res.send(await GroupService.getGroupsOfUser(userId));
})

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

router.route('/join').post( async (req, res, next) => {
  let { userId, groupCode} = req.body;
  try {
    let group_details =await GroupService.joinGroup(userId,groupCode)
    res.send(group_details);
  } catch (err){
    res.status(401).json({errorMessage:err.message});
  }
  
});

module.exports = router;
