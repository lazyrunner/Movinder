let {MoviesModel} = require('../models/movies.model');
let {ExternalMoviesModel} = require('../models/externalMovies.model');

let MovieService = {
    getMovies : async function(userId,groupId,pageNumber=1){
        let popularMoviesPromise = ExternalMoviesModel.getPopularMovies(pageNumber); 
        let decidedMoviesPromise = MoviesModel.getDecidedMovies(userId,groupId);
        let [popularMovies, decidedMovies] =await Promise.all([popularMoviesPromise, decidedMoviesPromise]);
        decidedMovies = decidedMovies.map(x=>x.movie_id);
        popularMovies.results  = popularMovies.results.filter(x=>{
            if(decidedMovies.indexOf(x.id.toString()) < 0)
                return true;
        }) 

        return popularMovies;
    }
}

module.exports = {
    MovieService:MovieService
}