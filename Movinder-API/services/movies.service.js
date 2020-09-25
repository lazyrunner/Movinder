let {MoviesModel} = require('../models/movies.model');
let {GroupModel} = require('../models/groups.model');
let {ExternalMoviesModel} = require('../models/externalMovies.model');

let MovieService = {
    getMovies : async (userId,groupId,pageNumber=1) => {
        let popularMoviesPromise = ExternalMoviesModel.getPopularMovies(pageNumber); 
        let decidedMoviesPromise = MoviesModel.getDecidedMovies(userId,groupId);
        let [popularMovies, decidedMovies] =await Promise.all([popularMoviesPromise, decidedMoviesPromise]);
        decidedMovies = decidedMovies.map(x=>x.movie_id);
        popularMovies.results  = popularMovies.results.filter(x=>{
            if(decidedMovies.indexOf(x.id.toString()) < 0)
                return true;
        }) 

        return popularMovies;
    },
    updateMovieList: async (userId, groupId, movieId, approved) => {
        let resp = { matched:false};
        await MoviesModel.updateMovieChoice(userId, groupId, movieId, approved);
        if(approved){
            let p1 = MoviesModel.getNoOfApprovesForMovie(movieId, groupId, approved);
            let p2 = GroupModel.getMembersCount(groupId);
            let [noOfApproval, noMembers] =await Promise.all([p1, p2]);
            if(noOfApproval.count === noMembers.count){
                resp.matched = true;
                resp.movieId = movieId;
            }
        }
        return resp;
    },
    getMovie: async (movieId) => {
        return await ExternalMoviesModel.getMovie(movieId);
    },
    getMatchedMovies: async (groupId) => {
        let promises = [];
        let movieIds = await MoviesModel.getMatchedMovies(groupId);
        movieIds.map(x=>{
            promises.push(ExternalMoviesModel.getMovie(x.movie_id));
        });
        let movieInfo = await Promise.all(promises);
        return movieInfo;
    }
}

module.exports = {
    MovieService:MovieService
}