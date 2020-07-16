/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let nuevoImporte; 
	let descuento;

	importe = parseFloat(document.getElementById("txtIdImporte").value);
	
	// calculo el calculo del porcentaje del 25%

	descuento = importe * 25 / 100; 

	// ahora resto el aumento con el importe anterior 

	nuevoImporte = importe - descuento;

	document.getElementById("txtIdResultado").value = nuevoImporte;
}
