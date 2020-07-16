/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en 
Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    // la forumula para convertir fahrenheit a centigrados es 
    // (32 °F − 32) × 5/9 = 0 °C
  
    let temperatura; 
    let resultado; 

    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    resultado = (temperatura - 32) * 5/9;

    alert(temperatura + "º fahrenheit son " + resultado + "º centigrados");
}

function CentigradosFahrenheit () 
{
// la formula para convertir centigrados a fahrenheit es 
// (0 °C × 9/5) + 32 =
let Fahrenheit;
let Centigrados;
let temperatura;
let resultado;

temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
resultado = (temperatura * 9/5) + 32;


alert(temperatura + "º centigrados son " + resultado + "º Fahrenheit");



	
}
