function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value);

	// condicion que es verdadera para los valores 
	//que están por debajo o por encima del rango de adolescencia

	/* if (edad < 13 || edad > 17)
	{
		alert("No sos un adolescente bro");
	} */

// versión contraria

	if (!(edad >=13 && edad <= 17))
	{
		alert("no sos un adolescente chamigo");
	}
	
	
}//FIN DE LA FUNCIÓN