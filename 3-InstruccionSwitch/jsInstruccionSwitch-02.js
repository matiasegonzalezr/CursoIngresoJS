function mostrar()
{

	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Enero":
		case "Febrero": 
		case "Marzo": 
		case "Abril": 
		case "Mayo": 
		case "Junio": alert("Falta para el invierno");
			break;
		case "Julio": 
		case "Agosto": alert("Abrigate que hace frio!");
			break;
		case "Septiembre": 
		case "Octubre": 
		case "Noviembre": 
		case "Diciembre": alert("ya paso el invierno");
			break;	
	}





}//FIN DE LA FUNCIÓN