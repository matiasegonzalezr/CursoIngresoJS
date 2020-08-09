/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	let numero;
	numero = parseInt(prompt("ingrese un número entre 0 y 9."));

	while (numero < 0 || numero > 9 || isNaN(numero)) {


		numero = parseInt(prompt("te dije que ingreses un número del 0 al 9"));

	}

	alert("gracias.");

	document.getElementById("txtIdNumero").value = numero;




}//FIN DE LA FUNCIÓN