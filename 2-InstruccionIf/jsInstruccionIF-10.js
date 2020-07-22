function mostrar()
{
	
	let nota;

	nota = Math.round(Math.random() * 9 + 1);

	if (nota >= 9) {
		alert("¡EXCELENTE! Su nota es " + nota);
	} 
	else if (nota < 4) {
			alert("Vamos, la proxima se puede " + nota);
	}
	else if (nota >= 4) {
		alert("Aprobó");
	}


}//FIN DE LA FUNCIÓN