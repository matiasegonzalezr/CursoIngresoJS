/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let ancho;
    let largo;
    let perimetro;
    let alambre;


    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
        // para calcular el perimetro es largo + ancho * 2 
    perimetro = (largo + ancho) * 2;
    alambre = perimetro * 3;
    
    alert("Necesitas comprar " + resultado + " metros de alambre");
}
function Circulo () 
{
    let perimetro;
    let radio;
    let alambre;
    const PI = 3.14;
    
    radio = parseInt(document.getElementById("txtIdRadio").value);

    perimetro = 2 * PI * radio;
    
    alambre = perimetro * 3;

    alert("Tenés que comprar " + alambre + "metros de alambre");

}
function Materiales () 
{

    let ancho;
    let largo;
    let area;
    let superficie;
    let cemento;
    let cal;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    
    area = largo * ancho;

    cemento = area * 2;
    cal = area * 3;

    alert("para un contrapiso de " +  area + " necesito comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal"); 
}