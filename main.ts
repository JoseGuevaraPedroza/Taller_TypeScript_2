import { Serie } from "./serie.js";
import { series } from "./data.js";

var cuerpoTabla=document.getElementById("cuerpo_tabla")!;

var imagen = document.getElementById("card_image")!;
var titulo = document.getElementById("card_title")!;
var texto = document.getElementById("card_text")!;
var referencia = document.getElementById("card_ref")!;

crearTabla();
calcularPromedioTemporadas();

function crearTabla():void
{
    let indexvar :number = -1;
    for (let serie of series) {
        
        let tr= document.createElement("tr");
        tr.innerHTML=`<td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.seasons}</td>
        <td>${serie.channel}</td>`;
        cuerpoTabla.appendChild(tr);
        tr.addEventListener("click", function(){mostrarDetalles(series.indexOf(serie))});
    }
}

function calcularPromedioTemporadas() :void
{
    let suma : number= 0;
    let total : number = 0;
    for (let serie of series) {
        suma+=serie.seasons;
        total++;
    }

    let promedio = document.getElementById("promedio")!;
    promedio.innerHTML=`El promedio de las temporadas es: ${suma/total}`;
}

function mostrarDetalles(id:number):void
{
    let selected = series[id];
    titulo.innerHTML=selected.name;
    texto.innerHTML=selected.description;
    referencia.innerHTML=selected.webPage;
    referencia.setAttribute("href", selected.webPage);
    imagen.setAttribute("src", selected.imageUrl);
}

