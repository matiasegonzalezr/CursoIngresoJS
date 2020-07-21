function mostrar()
{

	let edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13)	{

		alert("es niño");
	}
	else {
		if (edad >=13 && edad <= 17) {
			alert("es adolescente");
		 }
		 else {
			alert("es adulto");
		 }
	}

	/*
	if (edad < 13) {
		alert ("es niño");
	}
	else if (edad < 18) {
		alert("es adolescente");
	}
}//FIN DE LA FUNCIÓN