

/*
El pasaporte español es:

3 letras y 6 dígitos y opcionalmente 1 letra (caracter de control para las autoridades)
La regex seria:


Los DNI españoles pueden ser:

NIF (Numero de Identificación Fiscal) - 8 numeros y una letra1
NIE (Numero de Identificación de Extranjeros) - 1 letra2, 7 numeros y 1 letra1
1 - Una de las siguientes: TRWAGMYFPDXBNJZSQVHLCKE
2 - Una de las siguientes: XYZ


Pero eso es para comprobar el formato.

A parte, si quieres ser más riguroso, hay una formula para saber si el numero es valido.

Se divide el numero entre 23 y si el resto coincide con la posicion de la letra del documento en la lista TRWAGMYFPDXBNJZSQVHLCKE entonces es valido.

*/

let KEY = "TRWAGMYFPDXBNJZSQVHLCKE";
let documento =  prompt("número documento");
/*pasmos el dato a string con la letra mayuscula*/

/*eL DOCUMENTO  tiene que tener 9 digitos*/
let DocumentLength = documento.length;
let lastChart = documento.slice(8,9);
let numeroDni = parseInt(documento.slice(0,8));
let letraInicialNie = documento.slice(0,1);


/*forzamos para q la ultima letra sea mayuscula*/
lastChart = 		lastChart.toString().toUpperCase();
letraInicialNie = 	letraInicialNie.toString().toUpperCase();

/*Se divide el numero entre 23 y si el resto coincide con la posicion de la letra del documento en la lista TRWAGMYFPDXBNJZSQVHLCKE entonces es valido */
let digitoControl =  (lastChart === KEY.charAt(numeroDni % 23) );

/*Evalua que primera letra del NIE una de las siguientes: XYZ*/
let controlPrimerLetraNie = (letraInicialNie === "Y" || letraInicialNie === "X"  || letraInicialNie === "Z");

/*Valora si es un DNI o NIE*/



/*si 
1. el digito control es verdadero y 
2. son 9 digitos

*/

console.group();

console.log("longitud Documento ==>  " + DocumentLength);
console.log("Ultima letra ==>    " + lastChart);
console.log(" Número Dni  ==>   " + numeroDni);
console.log("ketra inicial NIE ==>   " + letraInicialNie);
console.log("digito control dni ==>   " + digitoControl);
console.log("digito control primera letra NIE ==>   " + controlPrimerLetraNie);

console.groupEnd();


