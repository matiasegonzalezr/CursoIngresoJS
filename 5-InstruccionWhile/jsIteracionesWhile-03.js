/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	let clave;
	

	clave = prompt("ingresa la clave");
	
	while (!(clave == 'utn750')) {
		clave = prompt("Clave inválida!! reingresela");
	}
		 
	alert("la clave es correcta");
  	
} //FIN DE LA FUNCIÓN
