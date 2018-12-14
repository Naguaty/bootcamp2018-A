var objRutas = {
    'peliculas': function(params, query) {
        getPeliculas();
    },
    'peliculas/:id/': function(params, query) {
        console.log('peliculas', params, query);
    },
    '/generos/': function(params, query) {
        console.log('generos', params, query);
    },
    '/directores/': function(params, query) {
        //getDirectores();
        console.log('directores', params, query);
    }
};