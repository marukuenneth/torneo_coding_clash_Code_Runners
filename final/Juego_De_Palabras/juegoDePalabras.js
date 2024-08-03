const palabras = []
do {
    let palabra = "";
    palabra = prompt("Ingresa una palabra");
    if (palabra !== "") {
        palabras.push(palabra);
    }
} while ((confirm("Presiona cancelar para dejar de escribir cadenas") == true));
document.write(palabras+ "\n");

let numero = 0;
do {
    numero = prompt('Ingresa un numero MAYOR QUE CERO (0) para encontrar las palabras que tengan esa cantidadd de letras entre las que escribiste recientemente');
    console.log(numero);
    if (!isNaN(parseInt(numero)) && numero != null) {
        console.log(numero);
    } else {
        if (numero != null) {
            alert(numero + ' No es un numero');
        }
    }
} while (isNaN((numero)) || numero <=0);

juego(palabras, numero);


function juego(palabras, entero) {
    const nuevoArreglo=[];
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length == entero) {
            nuevoArreglo.push(palabras[i]);
        }
        if (nuevoArreglo.length==0) {
            console.log("no se encontraron palabras de " + entero + " letras.")
            document.write(nuevoArreglo);
            console.log(nuevoArreglo);
        }
    }
    document.write(nuevoArreglo);
}