function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18)
	{
		alert("Usted es un adulto/a");
	}
	else //* por qué  imprime ambos alerts?
	{
		alert("Eres un/a adolescente");
	}
	if (edad < 13)
	{
		alert("Eres un niño/a");
	}






}//FIN DE LA FUNCIÓN