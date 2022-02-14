

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



btnEnviar.addEventListener("click",()=>{
	let documento = txtDni.value,
	nombre = txtNombre.value, 
	primerApellido = txtApelido1.value, 
	segundoApellido = txtApellido2.value;
	alert(`estos son los datos del formulario:
		nombre cl ==>		${nombre}
		primer Apellido ==>	${primerApellido}
		segundo Apellido==> ${segundoApellido}
		DNI==>				${documento}	
		`);
}); 

function Validador(){



	/*pasmos el dato a string con la letra mayuscula*/

	/*eL DOCUMENTO  tiene que tener 9 digitos*/
	let DocumentLength = documento.length;
	let lastChart = documento.slice(8,9);
	let numeroDni = parseInt(documento.slice(0,8));
	let letraInicialNie = documento.slice(0,1);
	let tipodocumento = "DNI";

	/*forzamos para q la ultima y la primera y la combertímos en string letra sea mayuscula*/
	lastChart = 		lastChart.toString().toUpperCase();
	letraInicialNie = 	letraInicialNie.toString().toUpperCase();

	/*Se divide el numero entre 23 y si el resto coincide con la posicion de la letra del documento en la lista TRWAGMYFPDXBNJZSQVHLCKE entonces es valido */
	let digitoControl =  (lastChart === KEY.charAt(numeroDni % 23) );

	/*Evalua que primera letra del NIE una de las siguientes: XYZ en tal caso será un NIE en caso contrario es un DNI*/
	if(letraInicialNie === "Y" || letraInicialNie === "X"  || letraInicialNie === "Z") 
				tipodocumento = "NIE";







	/*si 
	1. el digito control es verdadero y 
	2. son 9 digitos
	3. La primera letra del Nie es uno de "XYZ"
	*/

	if(tipodocumento === "NIE"){
		numeroDni = documento.slice(1,7);
		digitoControl =  (lastChart === KEY.charAt(numeroDni % 23) );
		console.log("NIEEEEEEEEEEE");

	}if(tipodocumento === "DNI" && digitoControl === true  && DocumentLength === 9 ){

	console.log("ES un dni correcto")
	}

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