const https = require('https')

module.exports.ExternalMoviesModel = {
    getPopularMovies: async (pageNumber = 1) => {
        let options = {
            hostname: 'api.themoviedb.org',
            path: '/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=',
            method: 'GET'
        }
        return new Promise((resolve, reject) => {
            var str = '';
            options.path += pageNumber;
            const req = https.request(options, res => {
                console.log(`statusCode: ${res.statusCode}`)
                res.on('data', d => {
                    str += d;
                })
                res.on('end', function () {
                    resolve(JSON.parse(str));
                });
            })

            req.on('error', error => {
                console.error(error)
                reject(error);
            })

            req.end()
        });
    },
    getMovie: async (movieId) => {
        let options = {
            hostname: 'api.themoviedb.org',
            path: '',
            method: 'GET'
        }
        return new Promise((resolve, reject) => {
            var str = '';
            options.path = `/3/movie/${movieId}?api_key=<<api_key>>&language=en-US`;
            const req = https.request(options, res => {
                console.log(`statusCode: ${res.statusCode}`)
                res.on('data', d => {
                    str += d;
                })
                res.on('end', function () {
                    resolve(JSON.parse(str));
                });
            })

            req.on('error', error => {
                console.error(error)
                reject(error);
            })

            req.end()
        });
    }
}
