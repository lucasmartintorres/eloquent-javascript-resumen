/*
Eloquent - Javascript 

Mi resumen personal - Lucas Martín Torres



*/



// ------------------------------------------------------------------- // 

/*

CAPÍTULO 1 

VALORES - TIPOS Y OPERADORES 

En el mundo de las computadoras, solo existen datos. Puedes leer datos , modificar datos , guardar datos..Pero todo lo que no sean datos, no puede ser mencionado.
Todos estos datos están guardados como largas secuencias de bits , por lo que , todos los datos son fundamentalmente parecidos. 

¿QUE SON LOS BITS? a grande rasgos los bits con cualquier tipo de cosa que puedan tener dos valores, ceros y unos (0 y 1). Dentro de una computadora , estos toman formas como cargas eléctricas altas o bajas, una señal fuerte o débil , o un punto brillante u opaco en la superficie de un CD. 
Entonces , cualquier porción de información discreta puede ser reducida a una secuencia de ceros, y unos, y de esa manera ser representada en bits. 

Ejemplo: 

binario  0   0    0    0    1  1  0  1 
bits    128  64   32   16   8  4  2  1

13 -> 00001101 -> 8 + 4 + 2 + 1 

- VALORES 
Como nos podemos imaginar una computadora moderna contiene un mar de bits en ella , y para poder trabajar con ellos sin perdernos , los separamos en porciones que representan un pedazo de información , lo que generalmente se conoce como VALORES en los lenguajes de programación. 

En resumen : Los valores son porciones de información y cada uno de ellos están formados por bits , pero aunque tengan en común esta característica cada valor cumple una función diferente.
Cada valor tiene un TIPO que determina la información que van a guardar. 
Tenemos valores que son números , texto , funciones , etc. 
Para crear un valor solo debemos de invocar su nombre.

En este capítulo veremos los elementos atómicos de JavaScript: 
- Tipos de valores simples junto con sus operadores 


- NUMEROS (number)
Valores númericos enteros positivos , negativos , decimales en JavaScript se escriben asi: 
10 
-10
10.10

¿ y que podemos hacer con los números ?
Generalmente con este tipo de datos podemos hacer operaciones aritméticas: 
Multiplicación ->              10 * 10     (asi es como se ve en JavaScript)
División ->                    5 / 5 
Suma ->                        10 + 15 
Resta ->                       20 - 3 
Modulo / resto / residuo ->    314 % 100 produce 14 

los signos (* , / , + , - , % ) se llaman operadores 

PRECEDENCIA DE OPERADORES 

- Veamos la siguiente operación : 

3 + 5 * 15  ¿Cuál es el resultado de esta operación? 

Primero se aplican estos operadores (* , /,  %) y luego (+, - )

2 - 1 - 1 (en este caso se resuelve de izquierda a derecha)

Para resolver esto solo ante la duda deberiamos de colocar parentesis 

(3 + 5) * 15
(2 - 1) - 1

- NUMEROS ESPECIALES 
Tenemos en JavaScript 3 valores que son considerados números pero que no se comportan como tales 

Infinity   / infinidad positiva 
-Infinity  / infinidad negativa 
NaN / "Not A Number " , no es un número

- STRINGS , son usados para representar texto o cadena de carácteres. Son escritos encerrados entre comillas. 

` 06/ 05 / 2022 `
" Preparo un cambio en mi vida "
' Estudiando JavaScript '

Se pueden usar comillas invertidas , dobles o simples siempre y cuando estás coincidan al principio y al final. 
Podemos poner casi todo dentro de las comillas y el lenguaje va a interpretarlo como una cadena, pero hay carácteres más díficiles: 

- "Comillas "entre" comillas"
- newline o salto de línea
- una tabulación 
- etc 

¿Cómo podemos hacer para representar estos tipos de carácteres? 
Para ello tenemos lo que se conoce como "escapar el carácter" que básicamente es una \ (barra invertida) que indica dentro del texto entre comillas que el carácter que le sigue tiene un significado especial. 

Lo vemos en ejemplo: 

"Comillas \"entre\" comillas" // 
texto resultante -> Comillas "entre" comillas

"Esta es la primera linea\nY esta es la segunda"
texto resultante -> Esta es la primera linea 
                    y esta es la segunda

"\t soy una tabulación"
texto resultante ->       Soy una tabulación

¿ y que podemos hacer con los STRINGS?
Estos datos no pueden ser multiplicados , divididos , sumados o restados. Pero el operador + si puede ser usado en ellos. No los agrega sino que LOS CONCATENA.

"con" + "ca" + "te" + "nar"  // resultado -> concatenar 

Los strings tienen un conjunto de funciones (metodos) asociados que nos permiten realizar distintas operaciones en ellos. 

¿Cuál es la diferencia entre usar comillas simples,  dobles o inversas ? 
Se comportan casi de la misma manera , la única diferencia es el tipo de comillas que necesitamos para escapar dentro de ellas. 

'Hola voy a escapar a estas comillas "" '
resultado -> Hola voy a escapar a estas comillas ""

Las comillas inversas (llamadas también plantillas literales), tienen otro tipo de magia , más alla de permitir "escapar al carácter". Pueden incrustar otros valores: 

`la mitad de 100 es ${50/2}`

Cuando escribes algo dentro de ${} en una plantilla literal , el resultado sera computado , convertido a string , e incluido dentro de esa posición. El ejemplo anterior produce "la mitad de 100 es 50".


- OPERADORES UNARIOS 
No todos los operadores son símbolos , algunos se escriben como palabras. 
Por ejemplo el operador typeof, que produce un string con el tipo de valor que le demos,
es decir nos ayuda a saber que tipo de valor tenemos. 

console.log(typeof 4.5); // number
console.log(typeof 'Vos podes'); // string

usamos console.log para indicar que queremos ver en consola el resultado de algún tipo de operación 

¿Operadores unarios? y operadores binarios
Básicamente los operadores binarios son los que veniamos viendo hasta ahora , aquellos que operan con dos valores. Y por consiguiente los unarios son aquellos que operan con un valor
. typeof
. - (puede ser binario o unario) -> 1 - 1 -> -1

- VALORES BOOLEANOS 
Es muy útil tener un valor que distingue solo entre dos posibilidades, como "si" y "no",
o encendido y apagado. Para ello JavaScript , tiene el tipo Boolean, que solo tiene dos valores: true (verdadero) y false (falso.

- COMPARACIÓN 
A continuación se muestra una forma de producir valores booleanos:

console.log(3 > 2); // true
console.log(3 < 2); // false 

>  mayor que 
<  menor que 
>= mayor o igual que
<= menor o igual que
== igual
!= no igual a 

* Todos estos son operadores binarios , que al usarlos resultan en un boolean que indica si la condición se cumple o no se cumple. 

Los Strings pueden ser comparados de la misma forma: 
console.log('Arbol' < 'Casas'); // true

Y son ordenados "casi" alfabeticamente porque no lo hace de la manera en que esperamos verlo en un diccionario: 
- Las letras mayúsculas son siempre menores que las minúsculas 
- son incluídos los carácteres no alfabeticos (! , - , etc)

Al comparar strings Javascript evalúa los carácteres de izquierda a derecha, comparando los códigos Unicode uno por uno.


**Solo existe un solo valor en JavaScript que no es igual a si mismo y este NaN. 
Porque NaN es el resultado de una computación sin sentido , y como tal , no es igual al resultado de ninguna otra computación sin sentido**

- OPERADORES LÓGICOS 
Son operaciones que pueden ser aplicados para razonar valores Booleanos. En JavaScript tenemos tres operadores lógicos: and , or y not. 

- and (&&) , su resultado es verdadero solo si ambos de los valores dados es verdadero
true && true -> true
true && false -> false 

- or (||) , es verdadero si cualquiera de los valores dados es verdadero 
true || false -> true
false || false -> false 

- not (!) , cambia el valor dado
!true -> false
!false -> true

**actualizando precedencia de los operadores vistos hasta ahora**
|| menor precedencia
&& 
operadores de comparación
el resto 

Se determina este orden para que operaciones como la siguiente tengan la menor cantidad de parentesis posibles. 

1 + 1 == 2 && 10 * 10 > 50

- OPERADOR TERNARIO 
Opera en tres valores y es escrito con un signo de interrogación y dos puntos: 

console.log(true ? 1 : 2); // 1
console.log(false ? 1 : 2); // 2

El valor a la izquierda del signo de interrogación decide cual de los otros dos valores sera retornado. Si es verdadero elige el valor de en medio y si es falso el de la derecha 

- VALORES VACIOS
null y undefined , son usados para detonar la ausencia de un valor. Son un valor en sí pero que no tiene información. 
Muchas operaciones en JavaScript producen undefined porque simplemente tienen que producir algún valor y la diferencia con null , es un error en el diseño. 

- CONVERSIÓN DE TIPO AUTOMÁTICA
JavaScript tiende a salirse de su camino para aceptar casi cualquier programa que le demos, incluso programas que hacen cosas extrañas. 

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("cinco" * 2)
// → NaN
console.log(false == 0)
// → true

Cuando un operador es aplicado al tipo de valor "incorrecto" JavaScript convertirá ese valor al tipo que necesita , esto se le llama coerción de tipo. Para evitar este tipo de comportamientos tenemos otros dos operadores: 

=== , !== (este tipo de operadores prueba si un valor es precisamente igual al otro)

*Recomiendo usar el operador de comparación de tres caracteres de una manera defensiva para prevenir que conversiones de tipo inesperadas te estorben.
Pero cuando estés seguro de que el tipo va a ser el mismo en ambos lados, no
es problemático utilizar los operadores mas cortos.* 

- RESUMEN 
- Vimos 4 tipos de valores de JavaScript en este capítulo: 
números, textos (strings) , Booleanos y valores indefinidos.
- Vimos que podemos combinar y transformar valores con operadores, binarios para artimética (+,-, * , / y %) , concatenación de strings (+), comparaciones ( == , != , === , !== , < , > , <= , >=) y lógica (&& , || )
- vimos operadores unarios (- para negar un número , ! para negar logicamente , y typeof para saber el valor de un tipo) y un operadore ternario (?:) para elegir uno de los dos basandose en un tercer valor.
Con esto tenemos la información suficiente para usar JavaScript como una calculadora de bolsillo,  por ahora. 

*/










