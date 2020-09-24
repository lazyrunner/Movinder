var express = require('express');
var router = express.Router();
let {MovieService} = require('../services/movies.service');

router.route('/').post( async (req, res, next) => {
    let {userId, groupId, pageNumber} = req.body;
    let movieList = await MovieService.getMovies(userId, groupId,pageNumber);
    res.send(movieList);
});



module.exports = router;
