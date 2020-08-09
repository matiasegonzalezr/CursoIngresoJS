function mostrar() {
	//numeros primos 
	let numero;
	let contadorDivisores = 0;

	numero = parseInt(prompt("Ingrese un numero"));

	for (let i = 2; i < numero; i++) {

		if (numero % 1 == 0) {
			contadorDivisores++;
		}

	}

	if (contadorDivisores == 0) {
		alert( numero + " es primo");
	} 
	else {

		alert(numero + " no es primo");
	}


}//FIN DE LA FUNCIÓN