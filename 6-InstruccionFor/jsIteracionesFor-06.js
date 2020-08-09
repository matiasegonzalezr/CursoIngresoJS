function mostrar()
{
	// declarar variables
	let numero;
	let contadorPares = 0;

	// 	pido un numero
	numero = parseInt(prompt("ingrese un numero"));

	// tengo que hacer que una variable tome
	//	los valores desde el 1 hasta el numero ingresado
	for (let i = 1; 1 <= numero ; i++) {
	// para cada uno de los valores que toma la variable analizo la 
	//	cuando encuentro un par lo cuento y
		if ( i % 2 == 0) {
			contadorPares++;
			console.log(i);
		}


}
	// una vez que analice todos los valores muestro la cantidad de numeros pares

	console.log("pares encontrados " + contadorPares);










	/*
	let numero;
	let contadorPares;
	for ( ; ; ) {
		numero = parseInt(prompt("ingrese un numero"));

		if (numero % 2 = 0) {


		}

	} */




}//FIN DE LA FUNCIÓN