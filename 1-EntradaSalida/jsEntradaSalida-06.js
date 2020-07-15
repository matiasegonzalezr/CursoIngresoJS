/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	
	let num1;
	let num2;
	let resultado;
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt (num1) +  parseInt(num2);

	//la manera mas sencilla de hacerlo, es:

	num1= parseInt(document.getElementById("txtIdNumeroUno").value);
	// porque evitas lineas de codigo de más, y estás capturando todo de una.
	num2= parseInt(document.getElementById("txtIdNumeroUno").value);


	alert("el resultado es " + resultado);

 // si ya sabés que va a ser un número, hacé directamente la manera más sencilla.

}

