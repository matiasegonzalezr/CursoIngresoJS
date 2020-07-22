function mostrar()
{
	//tomo la hora
	let hora;
	hora = parseInt(document.getElementById("txtIdHora").value);
	
	switch (hora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11: alert ("es la mañana");
		break;
		// default: alert("no es de mañana... puede que sea de madrugada o de noche, o tal vez de tarde... no lo sabemos");
	}
	

	
	



}//FIN DE LA FUNCIÓN