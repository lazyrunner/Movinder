var express = require('express');
var router = express.Router();
let {MovieService} = require('../services/movies.service');

router.route('/').post( async (req, res, next) => {
    let {userId, groupId, pageNumber} = req.body;
    let movieList = await MovieService.getMovies(userId, groupId,pageNumber);
    res.send(movieList);
});

router.route('/decision').post( async (req, res, next) => {
    let {userId, groupId, movieId, approved} = req.body;
    let resp = await MovieService.updateMovieList(userId, groupId, movieId, approved);
    res.send(resp);
});

router.route('/matched/:groupId').get( async (req, res, next) => {
    let { groupId } = req.params;
    let resp = await MovieService.getMatchedMovies(groupId);
    res.send(resp);
});

router.route('/movie-info/:movieId').get( async (req, res, next) => {
    let { movieId } = req.params;
    let resp = await MovieService.getMovie(movieId);
    res.send(resp);
});


module.exports = router;
