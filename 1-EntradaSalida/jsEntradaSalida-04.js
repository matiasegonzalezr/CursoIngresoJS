/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() 
{
	// reservo espacio en memoria para guardar el nombrer del usuario
	let nombre; 

	// guardo en la variable nombre el texto que escribió el usuario en PROMPT
	nombre = prompt("Ingresá tu nombre");

	// copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto que está en .HTML
	document.getElementById("txtIdNombre").value = nombre;
	
}

