/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1 
	let num2
	let resultado 

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt(num1) + parseInt(num2);

	alert("el resultado de la suma es " + resultado);	
}

function restar()
{
	let num1 
	let num2
	let resultado 

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = num1 - num2;

	alert("el resultado de la resta es " + resultado);	
}

function multiplicar()
{ 
	let num1 
	let num2
	let resultado 

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	resultado = parseInt(num1) * parseInt(num2);

	alert("el resultado de la multiplicación es " + resultado);	
}

function dividir()
{
	let num1 
	let num2
	let resultado 

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = (num1) / (num2);

	alert("el resultado de la división es " + resultado);		
}