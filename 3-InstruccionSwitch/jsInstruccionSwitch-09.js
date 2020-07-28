function mostrar()
{
	const ESTADIA = 15000;
	let estacion;
	let destino;
	let precioFinal;
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;



	/* if (estacion == "Invierno" && destino == "Bariloche") {
		alert("el monto a pagar es " (tarifa * 20 / 100));
	} */

	switch (precioFinal) {
		case "Bariloche":
		case "Invierno": precioFinal = tarifa * 20 / 100;
		alert("El precio a pagar es $" + precioFinal);
	}



}//FIN DE LA FUNCIÓN