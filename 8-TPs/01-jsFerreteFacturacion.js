/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

    let producto1;
    let producto2;
    let producto3;
    let resultado; 

    producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = producto1 + producto2 + producto3;

    alert("El total es $" + resultado);

}
function Promedio () 
{

	let producto1;
    let producto2;
    let producto3;
    let resultado; 

    producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = (producto1 + producto2 + producto3) / 3;

    alert("El promedio es $" + resultado);

}
function PrecioFinal () 
{

    let producto1;
    let producto2;
    let producto3;
    let resultado; 

    producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = (producto1 + producto2 + producto3) * 1.21;

    alert("El precio final (IVA incluido) es $" + resultado.toFixed(2));
	
}