import { series } from "./data.js";
var cuerpoTabla = document.getElementById("cuerpo_tabla");
var imagen = document.getElementById("card_image");
var titulo = document.getElementById("card_title");
var texto = document.getElementById("card_text");
var referencia = document.getElementById("card_ref");
crearTabla();
calcularPromedioTemporadas();
function crearTabla() {
    var indexvar = -1;
    var _loop_1 = function (serie) {
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>".concat(serie.id, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.seasons, "</td>\n        <td>").concat(serie.channel, "</td>");
        cuerpoTabla.appendChild(tr);
        tr.addEventListener("click", function () { mostrarDetalles(series.indexOf(serie)); });
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
}
function calcularPromedioTemporadas() {
    var suma = 0;
    var total = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        suma += serie.seasons;
        total++;
    }
    var promedio = document.getElementById("promedio");
    promedio.innerHTML = "El promedio de las temporadas es: ".concat(suma / total);
}
function mostrarDetalles(id) {
    var selected = series[id];
    titulo.innerHTML = selected.name;
    texto.innerHTML = selected.description;
    referencia.innerHTML = selected.webPage;
    referencia.setAttribute("href", selected.webPage);
    imagen.setAttribute("src", selected.imageUrl);
}
