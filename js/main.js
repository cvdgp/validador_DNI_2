

/*
El pasaporte español es:

3 letras y 6 dígitos y opcionalmente 1 letra (carácter de control para las autoridades)
La regex seria:


Los DNI españoles pueden ser:

NIF (Numero de Identificación Fiscal) - 8 números y una letra1
NIE (Numero de Identificación de Extranjeros) - 1 letra2, 7 números y 1 letra1
1 - Una de las siguientes: TRWAGMYFPDXBNJZSQVHLCKE
2 - Una de las siguientes: XYZ


Pero eso es para comprobar el formato.

A parte, si quieres ser más riguroso, hay una formula para saber si el numero es valido.

Se divide el numero entre 23 y si el resto coincide con la posición de la letra del documento en la lista TRWAGMYFPDXBNJZSQVHLCKE entonces es valido.

*/

//obtenemos datos desde el formulario

let btnEnviar 	= document.getElementById("Enviar"),
txtNombre		= document.getElementById("nombre"),
txtApelido1 	= document.getElementById("apellido1"),
txtApellido2 	= document.getElementById("apellido2"),  
txtDni 			= document.getElementById("dni");

// KEY es la clave que utilizamos para comprobar el dígito de control

const  KEY = "TRWAGMYFPDXBNJZSQVHLCKE";

/* Al darle al botón enviar desencadenara a siguientes acciones
1. Toma los valores de los input tipo texto y los almacena en variables.
2. Confirmamos datos del documento:
	a.extraemos el tamaño que ha de ser 9 dígitos
	b. separamos ultima letra del numero 
	c. extraemos la primera letra
3. Forzamos para q la ultima y la primera y la convertimos en string letra sea mayúsculas
4. Hacemos la prueba para saver si el dígito control es correcto:
	==> Se divide el numero entre 23 y si el resto coincide con la posición de la letra del 	documento en la lista TRWAGMYFPDXBNJZSQVHLCKE entonces es valido.
5. Evalúa que primera letra del NIE una de las siguientes: XYZ en tal caso será un NIE en caso contrario es un DNI
6. Prueba lógica:
		6.1 En caso de NIE hace la prueba *******
		6.2 En caso de DNI 
			6.2.1 confirma que la evaluación del dígito control sea correcta
			6.2.2 confirma que el tamaño del documento se de 9 dígitos.
		6.3 Si no es un DNI ni un NIE regresa los errores.
*/
btnEnviar.addEventListener("click",()=>{
	/* 1. Toma de datos */
	let documento = txtDni.value,
	nombre = txtNombre.value, 
	primerApellido = txtApelido1.value, 
	segundoApellido = txtApellido2.value;

	/* 2. Tratamiento de DNI o NIE */
	let DocumentLength = documento.length,
	lastChart = documento.slice(8,9),
	numeroDni = parseInt(documento.slice(0,8)),
	letraInicialNie = documento.slice(0,1),
	tipodocumento = "DNI";


	/* 3. Pasamos a stirng y mayúsculas ultimo y primer char*/
	lastChart = 		lastChart.toString().toUpperCase();
	letraInicialNie = 	letraInicialNie.toString().toUpperCase();

	/* 4. Prueba dígito control*/
	let digitoControl =  (lastChart === KEY.charAt(numeroDni % 23) );

	/* 5. Evaluación si es DNI o NIE*/
	if(letraInicialNie === "Y" || letraInicialNie === "X"  || letraInicialNie === "Z") 
				tipodocumento = "NIE";

	/* 6. Prueba lógica:*/
	if(tipodocumento === "NIE"){
		numeroDni = documento.slice(1,7);
		digitoControl =  (lastChart === KEY.charAt(numeroDni % 23) );
		alert("NIEEEEEEEEEEE");

	}
	if(tipodocumento === "DNI" && digitoControl === true  && DocumentLength === 9 ){

	alert("ES un dni correcto")
	}
	else{
		if(digitoControl === false) alert("La letra del documento es incorrecta");
		if(document != 9) alert("faltan dígitos en su documento, confírmelo usted");
		
	}
}); 

function Validador(){




	/*si 
	1. el digito control es verdadero y 
	2. son 9 digitos
	3. La primera letra del Nie es uno de "XYZ"
	*/


	console.group();
	console.log("tipo documento  ==>  " + tipodocumento );
	console.log("longitud Documento ==>  " + DocumentLength);
	console.log("Ultima letra ==>    " + lastChart);
	console.log(" Número Dni  ==>   " + numeroDni);
	console.log("letra inicial NIE ==>   " + letraInicialNie);
	console.log("dígito control dni ==>   " + digitoControl);
	console.log("letra correcta es =====>  " + KEY.charAt(numeroDni % 23));

	console.groupEnd();



};