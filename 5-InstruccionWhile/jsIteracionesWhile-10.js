/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. +
2-Suma de los positivos. +
3-Cantidad de positivos. +
4-Cantidad de negativos. + 
5-Cantidad de ceros. +
6-Cantidad de números pares. +
7-Promedio de positivos. +
8-Promedios de negativos. +
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let seguir = 's';
	let positivos = 0;
	let negativos = 0;
	let cantidadPositivos = 0;
	let cantidadNegativos = 0;
	let cantidadCeros = 0;
	let pares = 0;
do {

	numero = parseInt(prompt('Ingresá un número'));
	
		
	if ( numero > 0 && (numero % 2 == 0) ) {

		positivos += numero;
		cantidadPositivos = cantidadPositivos + 1;
		pares ++;

	}
	else if ( numero < 0) {		

		negativos += numero;
		cantidadNegativos++;
		pares ++;

	} else {

		cantidadCeros++;

	}

		seguir = prompt('¿Querés ingresar otro número? Apretá "s" para continuar');

	} while (seguir == 's');




document.write('La suma de los números negativos es ' + parseInt(negativos) + "</br>");
document.write('La suma de los números positivos es ' + parseInt(positivos) + "</br>");
document.write('La cantidad de números positivos ingresada es ' + parseInt(cantidadPositivos) + "</br>");
document.write('La cantidad de números negativos ingresada es ' + parseInt(cantidadNegativos) + "</br>");
document.write('¡Increíble! ingresaste el ' + parseInt(cantidadCeros) + ' veces el número 0, WHY? ' + "</br>");
document.write('La cantidad de números pares es ' + parseInt(pares) + "</br>");
document.write('El promedio de los números positivos es ' + parseInt(positivos/cantidadPositivos) + "</br>");
document.write('El promedio de los números negativos es ' + parseInt(negativos/cantidadNegativos) + "</br>");
document.write('La diferencia entre los positivos y los negativos es ' + parseInt(positivos - negativos));



}