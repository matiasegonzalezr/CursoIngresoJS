function mostrar()
{
	//tomo el mes
	let mes;

	mes = document.getElementById("txtIdMes").value;

	//se escribe SWITCH y la variable a evaluar
	switch (mes) {
		//luego se escribe CASE 
		case "Enero": alert("Que comiences bien el año");
			break;
		case "Marzo": alert("a clases!");
			break;//para cerrar el flujo, digamos, el CASE, se escribe BREAK.
		case "Julio": alert("Se vienen las vacaciones");
			break;
		case "Diciembre": alert("Felices fiesta, si no sos jurio");
			break;	
	}


















/*	if (mes == "Enero") {
		alert("que comiences bien el año!");
	} 
	else if (mes == "Marzo") {
		alert("A clases!")
	} 
	else if (mes == "Julio") {
		alert("Se vienen las vacaciones!!")
	} 
	else if (mes == "Diciembre") {
		alert ("Felices fiestas!");
	}
	// se pueden poner cuantos else if que se quieran, dependiedo de los requerimienttos 
*/



}//FIN DE LA FUNCIÓN