/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let seguir = 's'; //creamos variable para saber si el usuario quiere seguir o no.
	let numero;
	let acumulador = 0;
	let promedio;
	do {

		numero = parseInt(prompt('Ingrese un número'));
		seguir = prompt('quiere agregar otro numero?');
		
		acumulador += numero; 
	
	} while (seguir == 's') ; 

	promedio = acumulador / 5;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

	
}//FIN DE LA FUNCIÓN