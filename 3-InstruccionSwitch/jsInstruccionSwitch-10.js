function mostrar()
{
	let estacion;
	let destino;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion) {
		case "Invierno": 
			if (destino != "Bariloche") {
				alert ("Quedate en casa");
			}
			else {
				alert ("Prepará las valijas!");
			}
			break;
		case "Verano": 
		if (destino == "Mar del Plata" || destino == "Cataratas") {
			alert("¡Prepará las valijas!");
		}
		else { 
			alert("Quedate en casa");
		}
			break;
		case "Otoño": alert("¡Prepará las valijas!");
		break;
		case "Primavera": 
		if (destino != "Bariloche") {
			alert("¡Prepará las valijas!");
		}
		else {
			alert ("Quedate en casa :(");
		}
	}





}//FIN DE LA FUNCIÓN