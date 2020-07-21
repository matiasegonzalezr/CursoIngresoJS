function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 13 && edad <= 17)
	{
		alert("Sos un adolescente bro");
	}



	/* está bueno también hacer lo contrario
	if !(edad < 13 || edad > 17)
	el ! cambia todo lo que está dentro del parentesis siguiente
	el || funciona como Ó entre dos valores
	
	{ 
		alert("Sos un adolescente broder");
	}



}
	//FIN DE LA FUNCIÓN