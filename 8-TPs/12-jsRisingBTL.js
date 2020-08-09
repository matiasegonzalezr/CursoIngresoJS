/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y 
censos nos pide realizar una carga de datos validada e ingresada por ventanas 
emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla 
a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
	 let edad;
	 let sexo;
	 let estadoCivil;
	 let estadoCivilString;
	 let sueldoBruto;
	 let legajo;
	 let nacionalidad;
	 

	edad = parseInt(prompt("Ingrese su edad: "));
	
	 while (edad < 18 || edad > 90 || isNan(edad)) {


		edad = parseInt(prompt("Por favor, ingrese una edad válida."));

	}

	alert("Genial");

	document.getElementById("txtIdEdad").value = edad;
	// sexo:

	sexo = prompt("Ingrese su sexo: ");


	while (!(sexo == "f" || sexo == "m")){


		sexo = parseInt(prompt("Por favor, ingrese un sexo válido (f ó m): "));

	}

	alert("Verificado.");
	document.getElementById("txtIdSexo").value = sexo;

	// estado civil:

	estadoCivil = prompt("Ingrese su estado civil con el numero correspondiente: 1 para soltero, 2 para casado, 3 para divorciado y 4 para viudo.");

	while (estadoCivil >= 1 || estadoCivil <= 4) {
		estadoCivil = prompt("Por favor, ingrese un estado civil válido: ");
	}
	alert("Verificado3.");

	switch (estadoCivilString) {
		case 1:
			
			break;
	
		default:
			break;
	}

	
	}
	// sueldo bruto 

		
	 while (sueldoBruto < 8000) {

		sueldoBruto= parseInt(prompt("Por favor, ingrese un sueldo válido."));

	}

	alert("Genial");

	document.getElementById("txtIdSueldoBruto").value = sueldoBruto;

	// legajo 

	
	legajo = parseInt(prompt("Ingrese su legajo: "));
	
	 while (legajo >= 1000 || legajo <= 9999 ) {


		legajo = parseInt(prompt("Por favor, ingrese un legajo válido"));

	}

	alert("Bárbaro");

	document.getElementById("txtIdLegajo").value = legajo;










