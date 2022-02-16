# validador_DNI_2
validador con js para confirmar si un dni  o nie es correcto
Al darle al botón enviar desencadenara a siguientes acciones
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
