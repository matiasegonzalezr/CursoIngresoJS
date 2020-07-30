/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	
	let numero;    //variables declaradas
	let seguir; 
	let maximo ;
	let minimo ;
	let flag = 0;
	let acumulador = 0;
	do { 	//creo el bucle
		// pido el numero acá 
		numero = parseInt(prompt('Escribí un número')); // pedir los numeros
		//para saber si el programa pasa por acá uso bandera
		if (flag == 0) {
		// si es asi inicializo max y min
		maximo = numero;
		minimo = numero;
		// como ya entraste una vez, cambio el flag por 1, así no vuelve a entrar.
		flag = 1;
		//en caso contrario chequeo si hay un nuevo maximo y lo actualizo
		} if (numero > maximo) {
			maximo = numero;
		} 
		else if (numero < minimo) {
			minimo = numero
		}


		
		seguir = prompt('queres ingresar otro numero?'); 

		/*if (maximo > numero) {
			maximo = numero;
		} else if (minimo < numero) {}
			minimo = numero; */
	} while (seguir == 's');


	

	document.getElementById("txtIdMinimo").value = minimo;
	document.getElementById("txtIdMaximo").value = maximo;

	// acumular el numero en el acumulador , dentro del bucle

	// mostrar resultados (fuera del bucle!)

}//FIN DE LA FUNCIÓN