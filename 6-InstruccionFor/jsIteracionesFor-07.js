function mostrar()
{

	let numero;
	let contadorDivisores = 0;

		numero = parseInt(prompt("ingrese un numero"));

	for (let i = 1; 1 <= numero ; i++) {

		if ( numero % i == 0) 
		{
			contadorDivisores++;
			console.log(i);
		}

	}	
	console.log("pares encontrados " + contadorDivisores);

}//FIN DE LA FUNCIÓN