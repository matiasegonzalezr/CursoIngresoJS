/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos;
// hacemos la variable FLAG para comprobar que suceda algo o no
let flag = 0;

function comenzar()
{ 
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto =  Math.round(Math.random() * 99 + 1);
  alert(numeroSecreto);
  document.getElementById("txtIdNumero").focus();
  contadorIntentos = 0;
  document.getElementById("txtIdIntentos").value = contadorIntentos;
  flag = 1;

  /* contadorIntentos = contadorIntentos + 1; incrementa 1 cada vez que corra esa linea de codigo
  pero la manera más sencilla de hacerlo es:
  contadorIntentos += 1; *=, /=, -=, +=, todas sirven para cambiarle el valor a la variable y hacer la operación aritmética de manera mas rápida.
  PERO, cuando sabes que siempre la variable es MAS UNO, lo mejor es:
  contadorIntentos++;
  */
}

function verificar() { 
  let numero;
  if (flag == 0){ //flag indica si se apretó el botón comenzar
	  alert("Primero debes presionar el boton Comenzar");
  } 
  else { //si se apretó el botón comenzar, le damos mecha
    
    contadorIntentos++; //el ++ hace que se incremente en 1 la variable. 
    
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    
    numero = parseInt(document.getElementById("txtIdNumero").value);
    
  
    if ( numeroSecreto == numero ) {
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