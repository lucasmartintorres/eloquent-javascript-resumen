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

// -------------------------------------------------------------------------------------- // 

// EXPRESIONES Y DECLARACIONES 

/*

Una expresión es un fragmento de código que produce un valor , esta expresión a su vez puede 
contener otras expresiones y el conjunto de ellas es lo que llamamos una declaración.
Un programa es un conjunto de declaraciones.

El tipo más simple de declaración es una expresión con un punto y coma
después ella. Esto es un programa:

1;
!true;

¿Es necesario usar el punto y coma al final? 
No es necesario pero es una buena práctica para evitar futuros errores en el funcionamiento
de nuestro programa

*/

// VARIABLES - vinculación

/*

¿Como hace un programa para recordar cosas? 
En JavaScript para atrapar y mantener valores tenemos lo que llamamos variables o vinculaciones

let atrapado = 5 * 5; 

Ese es un segundo tipo de declaración. La palabra reservada let indica al programa que esta oración va crear una variable y en caso de querer darle un valor inmediatamente, usamos el operador = y una expresión.
La declaración anterior crea una variable llamada atrapado que va a capturar el resultado de la expresión 5 * 5. 

Despues de definir una variable , su nombre puede ser usado como una "expresión". Y el valor de esa expresión es el valor que la variable mantiene actualmente. 

Veamos el siguiente ejemplo: 
----------------------------

let diez = 10; 
console.log( 10 * 10 )
/ 100 

Cuando una variable tiene  un valor, eso no significa que esté atada
a ese valor para siempre. El operador = puede usarse en cualquier momento
en vinculaciones existentes para desconectarlas de su valor actual y hacer que
ellas apuntan a uno nuevo:

let humor = 'Estoy muy bien'; 
console.log(humor); 
/ Estoy muy bien
humor = 'Estoy idiota!';
console.log(humor); 
/ Estoy idiota!

¿Que son las variables , como funcionan? 
Podemos imaginarlas como tentaculos , en vez de cajas. Las variables no contienen valores, si no que los toman. Cuando necesitas recordar algo, creces un tentáculo para aferrarte
a él o vuelves a conectar uno de tus tentáculos existentes a ese algo.

let deudaLuigi = 140; 
deudaLuigi = deudaLuigi - 40;
console.log(deudaLuigi); 
/ 100

¿Que pasa si defino una variable sin darle valor? 
Cuando defines una variable sin darle valor, el tentaculo no tiene nada que agarrar. Si pedimos el valor de una variable vacia, vamos a obtener el valor "undefined".

Una sola declaración let (en este caso) puede definir multiples variables separadas por coma.

let uno = 1 , dos = 2 , tres = 3; 

LAS PALABRAS VAR Y CONST , también pueden ser usadas para crear variables y funcionan de una forma similar a let 

var nombre = 'Lucas';
const saludo = 'Hola '; 
console.log(saludo + nombre);
/ Hola Lucas

. var (abreviatura de “variable”), es la forma en la que se declaraban las vinculaciones en JavaScript previo al 2015. Veremos la diferencia con let en el próximo capítulo. Por ahora, recuerda que generalmente hace lo mismo, pero raramente la usaremos en este libro porque
tiene algunas propiedades confusas
. const , representa una constante. Define una vinculación constante, que apunta al mismo valor por el tiempo que viva (no cambia). Esto es útil para variables que le dan un nombre a un valor para que fácilmente puedas usalor más adelante.

*/

// NOMBRANDO LAS VARIABLES 
/*

-LO QUE PUEDEN INCLUIR EN SUS NOMBRES
- pueden ser cualquier palabra
- pueden usar digitos -> catch22 
- pueden incluir signos de pesos ($) -> $catch
- pueden incluir signos de guion bajo (_) -> _catch

-LO QUE NO PUEDEN INCLUIR EN SUS NOMBRES
- palabras reservadas como let 
- caracteres especiales 
- empezar con un digito al comienzo

* no es necesario saber la lista completa de palabras reservadas. Solo basta con observar si al crear una variable tenemos un error de sintaxis inesperado

*/

// EL ENTORNO ¿Qué es? 

/*
La colección de vinculaciones y sus valores que existen en un momento dado
se llama entorno. Cuando se inicia un programa, est entorno no está vacío.
Siempre contiene vinculaciones que son parte del estándar del lenguaje, y la
mayoría de las veces, también tiene vinculaciones que proporcionan formas
de interactuar con el sistema en cuestión.
Por ejemplo ,  en el navegador, hay "funciones" para interactuar con el sitio web             actualmente cargado y para leer entradas del mouse y teclado.

*/

// FUNCIONES 

/*
Muchos de los valores proporcionados por el entorno predeterminado tienen
el tipo "función". 
Una función es una pieza de programa envuelta en un valor.
Dichos valores pueden ser "aplicados" para ejecutar el programa envuelto.

Ejemplo
-------
En un entorno navegador , la variable prompt sostiene una función que muestra un pequeño cuadro de diálogo preguntando por entrada del usuario.

prompt("Introducir contraseña");

Ejecutar una función también se lo conoce como "llamarla", "invocarla" o "aplicarla".
Puedes llamar a una función , para hacero usaremos por lo general el nombre de la variable que contenga la función. Los valores de los paréntesis se dan al programa dentro de la función, estos valores se llaman "argumentos". 
Diferentes funciones pueden necesitar un número diferente o diferentes tipos de argumentos.

*/

// LA FUNCIÓN CONSOLE.LOG (explicarlo)
/*
Por ahora nos basta saber: 
- esta función la usamos para poder dar salida a los valores. La cual se va a mostrar en el navegador (en la consola.)
- console.log -> no es una variable simple , es más bien una expresión que obtiene la propiedad log del valor mantenido por la variable console

*/

// VALORES DE RETORNO 
/*
Mostrar un dialogo o escribir texto en la pantalla es un "efecto secundario", lo cuál hace que muchas funciones sean útiles gracias a estos efectos que producen.
Las funcionens también pueden producir valores, retornar un valor. Por lo cuál no van a necesitar de un efecto secundario para ser útil. 

ejemplo: función -> Math.max
----------------------------

console.log(Math.max(2, 4)); 
/4

Esta función de cualquier cantidade de valores númericos , retorna el de mayor valor

Todo lo que produce un valor es una expresión en JavaScript, lo que significa que las
llamadas a funciones se pueden usar dentro de expresiones más grandes.

ejemplo: función -> Math.min
----------------------------
console.log(Math.min(2, 4) + 100); 
/ 102

Esta función que es lo opuesto a Math.max se usa como parte de una expresión más grande

*/

/* FLUJO DE CONTROL 

LINEAL ----->

Cuando tu programa tiene más de una declaración. Las declaraciones se van a ejecutar de arriba hacia abajo. 

Ejemplo CuadradoNro: 
-----------------
let elNumero = Number(prompt("Elige un numero"));
console.log("Tu número es la raiz cuadrada de " +
elNumero * elNumero);

Este programa tiene dos declaraciones -
1ro le pide al usuario que ingrese un nro y la 2da que se ejecuta luego saca el cuadrado de ese número ingresado. 

* La función Número convierte un valor a un número. Necesitamos esa conversión porque el resultado de prompt es un valor de string, y nosotros queremos
un numero.


EJECUCIÓN CONDICIONAL 
No todos los programas son en línea recta , podemos crear una ramificación dónde el programa decide como continuar segun dada la situación. 

La ejecución condicional se crea con la palabra reservada "if" en JavaScript.
- Caso simple -> queremos que se ejecute algún código, si , y solo si se cumple cierta condición.

Ejemplo CuadradoNro: 
-----------------
Queremos mostrar el cuadrado de un número , solo , si se ingresa realmente un número.

let elNumero = Number(prompt("Elige un numero"));
if (!Number.isNaN(elNumero)) {
console.log("Tu número es la raiz cuadrada de " +
elNumero * elNumero);
}

Con esta modificación si ingresas cualquier palabra , como 'casa' , no se mostrara ninguna salida.
La palabra clave if , ejecuta u omite una declaración dependiendo del valor de una expresión booleana. 
La función number .IsNan retorna true , solo si el argumente que se le pasa es Nan. Resulta que la función devuelve Nan cuando le pasas un String que no representa un nro válido. 

La condición se traduce a “a menos que elNumero no sea un número, haz esto”

La declacración debajo del if esta envuelta en llaves ({}) , estas se usan para agrupar cualquier cantidad de declaraciones en una sola declaración , se le llama bloque

- Caso contrario : En algunos casos vamos a necesitar código que se ejecute cuando la condición es falsa, 
para esta alternativa tenemos la palabra clave else, que usado junto con if crean dos rutas distintas en nuestro programa, de manera separada. 

Ejemplo CuadradoNro: 
--------------------

let elNumero = Number(prompt("Elige un numero"));
if (!Number.isNaN(elNumero)) {
console.log("Tu número es la raiz cuadrada de " +
elNumero * elNumero);
} else {
console.log("Ey. Por qué no me diste un número?");
}

- if - else "encadenados"
En caso de tener más de una ruta en nuestro programa , varios if - else. Los podemos encadenar:

let numero = Number(prompt("Elige un numero"));

if (numero < 10) {
console.log("Pequeño");
} else if (numero < 100) {
console.log("Mediano");
} else {
console.log("Grande");
}

CICLOS WHILE Y DO 
¿Como escribirias un programa que muestre todos los números pares de 0 a 12? 

console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

Esto funciona pero es nada eficiente , imaginate que necesitemos que nuestro programa muestre 1000 números pares.
Para esto necesitamos de una manera que nos permita repetir (iterar) o ejecutar un bloque de código cierta cantidad de veces y para ello contamos con la forma de flujo de control llamada CICLO (o Loop).

- While

Ejemplo contando números:
-------------------------

let numero = 0;
while (numero <= 12) {
console.log(numero);
numero = numero + 2;
}
// → 0
// → 2
// … etcetera

la palabra clave while crea un ciclo, la cúal es seguida por una expresión en paréntersis, y luego por una declaración muy parecida al if. El bucle sigue ingresando a esta declaración siempre que la expresión produzca un valor que dé true cuando sea convertida a Boolean.

¿Como funciona este programa? 
la variable "numero" , demuestra la forma en que puede seguir el progreso del programa. Cada vez que el ciclo se repite "numero" obtiene un valor que es 2 más que su valor anterior. Al comienzo de cada repetición, se compara con el número 12 para decidir si el programa sale o sigue en el ciclo. 

Ejemplo: calcular valor de 2 a la 10:
-------------------------------------
let resultado = 1;
let contador = 0; 

while(contador < 10) {
    resultado = resultado *2; 
    contador = contador +1; 
}

console.log(resultado);

¿Como funciona este programa? 
Usamos dos variables , una para llevar el seguimiento de nuestro resultado y otra para contar cuantas veces hemos multiplicado ese resultado por 2. El ciclo prueba si la segunda variable ha llegado a 10 todavía y, si no, actualiza ambas variables. 

- do 
este ciclo es similar a while solo que tiene una diferencia: ejecuta su cuerpo (bloque) al menos solo una vez , y después de esta ejecución es allí dónde comienza a chequear si debe detenerse. 

Ejemplo: Ingresa tu nombre:
---------------------------

let tuNombre;
do {
tuNombre = prompt("Quien eres?");
} while (!tuNombre);
console.log(tuNombre);

Aplicar el operador ! convertirá un valor a tipo Booleano antes de negarlo y todos los strings, excepto
"" seran convertidas a true. Esto significa que el ciclo continúa dando vueltas hasta que proporciones un nombre no-vacío.

/*

/*

CICLOS FOR 

El siguiente programa es exactamente equivalente al ejemplo anterior de impresión de números pares. El único cambio es que todos las declaraciónes que están relacionadas con el “estado” del ciclo estan agrupadas después del for

for (let numero = 0; numero <= 12; numero = numero + 2) {
console.log(numero);
}
// → 0
// → 2
// … etcetera


Los paréntesis después de una palabra clave for deben contener dos punto y comas. La parte antes del primer punto y coma inicializa el ciclo, generalmente definiendo una variable. La segunda parte es la expresión que chequea si
el ciclo debe continuar. La parte final actualiza el estado del ciclo después de cada iteración. En la mayoría de los casos, esto es más corto y conciso que un while

Este es el código que calcula 210, usando for en lugar de while:

let resultado = 1;
for (let contador = 0; contador < 10; contador = contador + 1) {
resultado = resultado * 2;
}
console.log(resultado);
// → 1024

ROMPIENDO UN CICLO 
Producir false en un ciclo no es la única manera de hacer que este termine. Para ello tenemos una declaración especial llamada break (romper) que tiene el efecto de saltar inmediatamente afuera del ciclo circundante. 

Ejemplo : Encuentra el primer número que es a la vez mayor o igual a 20 y divisible por 7:
------------------------------------------------------------------------------------------

for (let actual = 20; ; actual = actual + 1) {
if (actual % 7 == 0) {
console.log(actual);
break;
}
}
// → 21

El constructo for en el ejemplo no tiene una parte que verifique cuando finalizar el ciclo. Esto significa que el ciclo nunca se detendrá a menos que se ejecute la declaración break dentro de el.
Si eliminases esa declaración break o escribieras accidentalmente una condición final que siempre produciera true, tu programa estaria atrapado en un ciclo infinito. Un programa atrapado en un ciclo infinito nunca terminará de
ejecutarse, lo que generalmente es algo malo

-continue ("continuar"): similiar a break ya que influye en el progreso de un programa. Cuando continue se encuentre en el cuerpo de un ciclo, el control salta afuera del cuerpo y continúa con la siguiente iteración del ciclo.


DESPACHAR UN VALOR CON SWITCH 
No es poco común que el código se vea así:

if (x == "valor1") accion1();
else if (x == "valor2") accion2();
else if (x == "valor3") accion3();
else accionPorDefault();

Existe un constructor llamado switch que está destinada a expresar tales “despachos” de una manera más directa

switch (prompt("Como esta el clima?")) {
case "lluvioso":
console.log("Recuerda salir con un paraguas.");
break;
case "soleado":
console.log("Vistete con poca ropa.");
case "nublado":
console.log("Ve afuera.");
break;
default:
console.log("Tipo de clima desconocido!");
break;
}

Puedes poner cualquier número de etiquetas de case dentro del bloque abierto por switch. El programa comenzará a ejecutarse en la etiqueta que corresponde al valor que se le dio a switch, o en default si no se encuentra ningún valor que coincida. Continuará ejecutándose, incluso a través de otras etiquetas, hasta que llegue a una declaración break.

*/

/*
IDENTANDO CÓDIGO: 
En código donde se abren nuevos bloques dentro de otros bloques, puede ser difícil ver dónde termina un bloque y donde comienza el otro. Con la indentación apropiada, la forma visual de un programa corresponde a
la forma de los bloques dentro de él.

bloquePadre
    bloqueHijo
        bloqueNieto
            .....
        bloqueNieto
    bloqueHijo
bloquePadre


CAPITALIZACIÓN: 
camelCase 
primeraPalabra

Es decir , primera palabra en minúscula y la segunda palabara seguida sin espacio ni guion en mayúscula

COMENTARIOS: Un comentario es una pieza de texto que es parte de un programa pero que es completamente ignorado por la computadora. 
// comentario de una línea

/*
    comentario multi línea

*/

/*

RESUMEN:

Ahora sabes que un programa está construido a partir de declaraciones, las cuales a veces pueden contener más declaraciones. Las declaraciones tienden a contener expresiones, que a su vez se pueden construir a partir de expresiones mas pequeñas.
Poner declaraciones una despues de otras te da un programa que es ejecutado de arriba hacia abajo. 
Puedes introducir alteraciones en el flujo de control usando declaraciones condicionales (if, else, y switch) y ciclos (while, do, y for).
Las variables se pueden usar para archivar datos bajo un nombre, y son utiles para el seguimiento de estado en tu programa. El entorno es el conjunto de variables que se definen. 
Los sistemas de JavaScript siempre incluyen por defecto un número de variables estándar útiles en tu entorno.
Las funciones son valores especiales que encapsulan una parte del programa. Puedes invocarlas escribiendo nombreDeLaFuncion(argumento1, argumento2). Tal llamada a función es una expresión, y puede producir un valor.

*/




























