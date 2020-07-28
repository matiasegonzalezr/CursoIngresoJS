/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; 
let contadorIntentos;
let flag = 0;

function comenzar()
{ 
	numeroSecreto =  Math.round(Math.random() * 99 + 1);
  alert(numeroSecreto);
  document.getElementById("txtIdNumero").focus();
  contadorIntentos = 0;
  document.getElementById("txtIdIntentos").value = contadorIntentos;
  flag = 1;

}

function verificar() { 
  let numero;
  if (flag == 0){ 
	  alert("Primero debes presionar el boton Comenzar");
  } 
  else { 
    
    contadorIntentos++; 
    
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    
    numero = parseInt(document.getElementById("txtIdNumero").value);
    
  
    if ( numeroSecreto == numero ) {

		switch (contadorIntentos) {
			case 1: 
				alert("Usted es un psíquico!");
				break;
				
			case 1: 
				alert("Usted es un psíquico!");
				break;
			case 2: 
				alert("excelente percepción");
				break;
			case 3: 
				alert("Esto es suerte");
				break;
			case 4: 
				alert("Excelente técnica");
				break;	
			case 5: 
				alert("usted está en la media");
				break;
			case 7: 
			case 8:
			case 9:
				alert("falta técnica");
				break;
			default: 
				alert("afortunado en el amor!!");
				
		}

      alert(`¡CORRECTO! y en sólo ${contadorIntentos} intentos`);
      flag = 0;
    }
    else if (numeroSecreto < numero) {
      alert("Falta...");
    }
    else {
      alert("Falta...");
    }
    document.getElementById("txtIdNumero").value = "";
    document.getElementById("txtIdNumero").focus();
  }
   

}