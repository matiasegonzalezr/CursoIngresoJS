function mostrar()
{
	// EXPLICACION DEL PROFESOR
 
	let numero = 0;
	let i = 0;
	while (i < 5) {
		numero += parseInt(prompt("ingrese un numero "));

		acumulador = acumulador + numero;

		i++;
	}

	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	
	
	
	
	
	
	
	
	
	/*
	let numero1;
	let numero2;
	let numero3;
	let numero4;
	let numero5;
	let suma;
	let promedio;

	numero1 = parseInt(prompt("ingrese un numero: "));
	numero2 = parseInt(prompt("ingrese un numero: "));
	numero3 = parseInt(prompt("ingrese un numero: "));
	numero4 = parseInt(prompt("ingrese un numero: "));
	numero5 = parseInt(prompt("ingrese un numero: "));
	
	suma = numero1 + numero2 + numero3 + numero4 + numero5;

	promedio = suma / 5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio; 
	*/



	/* let suma;
	let promedio;
	let numeros;

	numeros = parseInt(prompt("Ingrese 5 numeros, por favor").value);

	promedio = parseInt(numeros / 5); 
	
	alert ("el promedio es " + promedio); */
	
	

	
}//FIN DE LA FUNCIÓN