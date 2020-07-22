function mostrar()
{

	let mes;

	mes = document.getElementById("txtIdMes").value;




	// TERMINALO !!!!!!!!!!!!!!!!
	switch (mes){
		case "Enero":
		case "Febrero": 
		case "Marzo": 
		case "Abril": 
		case "Mayo": 
		case "Junio": alert("Falta para el invierno");
			break;
		case "Julio": alert("Abrigate que hace frio!");
			break;
		case "Agosto": alert("Abrigate que hace frio!");
			break;
		case "Septiembre": alert("ya paso el invierno");
			break;
		case "Octubre": alert("ya paso el invierno");
			break;
		case "Noviembre": alert("ya paso el invierno");
			break;
		case "Diciembre": alert("ya paso el invierno");
			break;	
	}





}//FIN DE LA FUNCIÓN