/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let nuevoSueldo; 
	let aumento;
	
	
	// para calcular el nuevo sueldo debería sumarle al sueldo original el aumento 
	// el calculo de porcentaje de un valor lo consigo multiplicando el valor por el porcentaje y divido por 100


	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	
	// hacemos la operación de calculo del porcentaje, en este caso 10%

	aumento = sueldo * 10 / 100; 

	// ahora sumamos el aumento con el sueldo anterior 

	nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoSueldo;
	

}
