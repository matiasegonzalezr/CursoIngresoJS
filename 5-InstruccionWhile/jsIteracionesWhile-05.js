/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexo;
	sexo = prompt("ingrese su sexo con la letra F o M.").toLocaleLowerCase();

	while (!(sexo == "f" || sexo == "m")) {

		sexo = prompt("ingrese una opción válida(f ó m)").toLowerCase;
	} 

	alert("sexo correcto");

	document.getElementById("txtIdSexo").value = sexo;



	
}//FIN DE LA FUNCIÓN