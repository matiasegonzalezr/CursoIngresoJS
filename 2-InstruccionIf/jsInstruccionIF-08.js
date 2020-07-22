function mostrar()
{
	let edad;
	let estadocivil;
	
	estadocivil = document.getElementById("estadoCivil").value;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (estadocivil == "Soltero" && edad >=18) {
		alert("Usted es soltero y no es menor");
	} 
	
	
}//FIN DE LA FUNCIÓN