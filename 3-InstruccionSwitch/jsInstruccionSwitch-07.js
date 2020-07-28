function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

/*	switch (destino) {
		case "Cataratas": 
			alert("Norte");
			break;
		case "Bariloche": 
			alert("Oeste");
			break;
		case "Mar del Plata": 
			alert("Este");
			break;
		case "Ushuaia": 
			alert("Sur");
			break;
			
	}
*/
	if (destino == "Cataratas") {
		alert("Norte");
	}
	else if (destino == "Bariloche") {
		alert("Oeste");
	}
	else if (destino == "Mar del plata") {
		alert ("Este");
	}
 	else {
		 alert ("Sur");
	 }
	
	
	
	
	
	
	
}//FIN DE LA FUNCIÓN