# Preparando la receta

Ricardo es un excelente cocinero.

No hay receta que no sea capaz de preparar.
¡El problema es que a menudo olvida comprar los ingredientes!

Por esta razón, decidió preparar un listado de los ingredientes que tiene en la heladera.
La heladera contiene en total `H` ingredientes. Además de este, decidió preparar un listado de los ingredientes que necesita para la receta que le interesa cocinar. Para esta receta se necesitan `R` ingredientes.

Como es algo desorganizado al redactar, a veces hay ingredientes repetidos (de forma innecesaria) en estos listados.

Debes ayudar a Ricardo escribiendo una función que determine cuántos ingredientes le faltan, y (para puntaje completo) cuáles son.

### Objetivo

- Debes implementar la función `receta(heladera,ingredientes,faltantes)`, que dados dos arreglos de strings `heladera` e `ingredientes` con todos los ingredientes presentes en la heladera y los necesarios para la receta, respectivamente; retorne la cantidad de ingredientes que hace falta comprar para que Ricardo prepare la receta.
- Además, la función debe almacenar un listado de estos ingredientes (sin repetir) en el parámetro faltantes.
- Cualquier orden en el que se listen los ingredientes es válido.
