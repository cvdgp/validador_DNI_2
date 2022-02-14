# validador_DNI_2
validador con js para confirmar si un dni  o nie es correcto, parametros seguidos para el calculo:



Los DNI españoles pueden ser:

DNI (Numero de Identificación Fiscal) - 8 numeros y una letra1





NIE (Numero de Identificación de Extranjeros) - 1 letra2, 7 numeros y 1 letra1
2 - Una de las siguientes: XYZ

Hay que tener en cuenta que, en el caso de un NIE de extranjero residente en España, este cuenta con una letra (X, Y o Z), siete números y dígito de control. En este caso para hacer el cálculo vamos a tener que hacer la siguiente sustitución de letras por números:

X – 0
Y – 1
Z – 2



Pero eso es para comprobar el formato.

A parte, si quieres ser más riguroso, hay una formula para saber si el numero es valido.

Se divide el numero entre 23 y si el resto coincide con la posicion de la letra del documento en la lista TRWAGMYFPDXBNJZSQVHLCKE entonces es valido.