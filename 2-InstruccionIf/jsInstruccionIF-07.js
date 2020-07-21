//* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
//* mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'



function mostrar()
{
	// tomo la edad
	let edad;
	let estadocivil;
	
	estadocivil = document.getElementById("estadoCivil").value;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad > 18 && estadocivil != Soltero) {
		alert("usted es muy pequeño");
	} else {
		alert("usted es muy pequeño para no ser soltero");
	}

}
//FIN DE LA FUNCIÓN