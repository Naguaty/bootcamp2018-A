var getPeliculas = function() {
    let wsPeliculas = 'http://34.212.30.168:3000/peliculas';
    $.ajax({
        async: true,
        type: 'GET',
        dataType: 'json',
        url: wsPeliculas
    }).done(function(res) {
        var tmpPeliculas = $('#tmpPeliculas').html();
        var fnPeliculas = Handlebars.compile(tmpPeliculas);
        var htmlPeliculas = fnPeliculas(res);
        $('#contenedor').html(htmlPeliculas);
    }).fail(function() {

    });
}

getDirectores = function() {
    var tmpDirectores = $('#tmpDirectores').html();
    $('#contenedor').html(tmpDirectores);
}

$(function() {
    _rutas();
});