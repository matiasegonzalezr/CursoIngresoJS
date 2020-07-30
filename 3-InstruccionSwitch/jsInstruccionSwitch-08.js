function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

/* switch (destino) {
	case "Bariloche": 
	case "Ushuaia": alert("Ahí hace frío");
		break;
	case "Cataratas":
	case "Mar del plata": alert("Ahí hace calor");
		break; 
} */

	if (destino == "Bariloche" || destino == "Ushuaia") {
		alert ("ahí hace frío");
	}
	else {
		alert("ahí hace calor");
	}

}//FIN DE LA FUNCIÓN