/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{

	//declarar variables
	let numero;
	let positivos = 0;
	let negativos = 1;
	let seguir;
	let flag = 0;
	//armar un bucle del tipo 'mientras el usuario quiera...'
	do {
		// pedir los numeros dentro del bucle 
		numero = parseInt(prompt('Ingresá un número'));

		// analizar el signo de cada número , dentro del bucle 
		
		if ( numero >= 0) {
			positivos = positivos + numero;
		}
		else {
			flag=1;		
			negativos = negativos * numero;
		}


		seguir = prompt('Querés ingresar otro numero?');
	} while (seguir == 's');
	
	if (flag == 0) {
		negativos = 0;
	}

	document.getElementById("txtIdSuma").value = positivos;
	document.getElementById("txtIdProducto").value = negativos;

	// acumular el numero en el acumulador , dentro del bucle

	// mostrar resultados (fuera del bucle!)









}//FIN DE LA FUNCIÓN