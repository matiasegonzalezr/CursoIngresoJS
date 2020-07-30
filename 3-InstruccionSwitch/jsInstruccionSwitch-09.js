function mostrar()
{
	const ESTADIA = 15000;
	let estacion;
	let destino;
	let precioFinal;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				precioFinal = ESTADIA + ESTADIA * 20 /100;
				alert(`Tu viaje cuesta $${precioFinal}`)
			}
			
			else if ((estacion == "Invierno") && (destino == "Cataratas" || destino == "Cordoba")) {
				precioFinal = ESTADIA - ESTADIA * 10 / 100;
				alert(`Tu viaje cuesta $${precioFinal}`);
			} 
			else {
				alert (`Tu viaje cuesta $${ESTADIA - ESTADIA * 20 / 100}`);
			}
			break;

		case "Verano":
			if (destino == "Cataratas" || destino == "Cordoba") {
				precioFinal = ESTADIA + ESTADIA * 1.1;
			}
			else if (destino == "Mar del plata") {
				precioFinal = ESTADIA * 1.10;
			}
			else {
				precioFinal = ESTADIA - ESTADIA * 1.1;
			}
			
			break;
		case "Primavera":
		case "Otoño":
			if (destino != "Cordoba") {
				precioFinal = ESTADIA * 1.1;
			}
			else {
				precioFinal = ESTADIA;
			}
	}
		alert(`Tu viaje cuesta $${precioFinal}`);

	/*
	if (estacion == "Invierno" && destino == "Bariloche") {
		alert(`Tu viaje cuesta $${ESTADIA + ESTADIA * 20 / 100}`);
	} 
	else if ((estacion == "Invierno") && (destino == "Cataratas" || destino == "Cordoba")) {
		alert(`Tu viaje cuesta $${ESTADIA - ESTADIA * 10 / 100}`);
	} 
	else if  {
				alert(`Tu viaje cuesta $${ESTADIA - ESTADIA * 20 /100}`);
	}

	if (estacion == "Verano" && destino == "Bariloche") {
		alert(`Tu viaje cuesta $${ESTADIA - ESTADIA * 20 / 100}`);
	} 
	else if ((estacion == "Verano") && (destino == "Cataratas" || destino == "Cordoba")) {
		alert(`Tu viaje cuesta $${ESTADIA + ESTADIA * 10 / 100}`);
	} 
	else {
		alert(`Tu viaje cuesta $${ESTADIA + ESTADIA * 20 /100}`);
	}
		*/
	




	/* switch (precioFinal) {
		case "Bariloche":
		case "Invierno": precioFinal = tarifa * 20 / 100;
		alert("El precio a pagar es $" + precioFinal);
	}
	*/


}//FIN DE LA FUNCIÓN