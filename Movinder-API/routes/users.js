var express = require('express');
var router = express.Router();
let {UserService} = require('../services/users.service');

/* GET users listing. */
router.route('/').get( async (req, res, next) => {
  res.send('respond with a resource');
});

router.route('/check-user').post( async (req, res, next) => {
  let { username, password} = req.body;
  let user =await UserService.checkUser(username,password)
  if(user){
    res.send({'user_id':user});
  } else {
    res.status(404).json({
      message: 'User not found'
    });
  }
  
});

module.exports = router;
