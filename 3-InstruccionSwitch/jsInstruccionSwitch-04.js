function mostrar()
{
	//tomo el mes
	let mes;
	mes = document.getElementById("txtIdMes").value;
	
	
	switch (mes) {
		case "Febrero": alert ("este mes tiene 28 o 29 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre": alert("este mes tiene 30 días");
			break;
		default: alert("este mes tiene 31 días");
	}
	

}//FIN DE LA FUNCIÓN