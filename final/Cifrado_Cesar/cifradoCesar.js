const abecedario = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let texto = prompt("¡Cifrado César!\n Ingresa un texto para que lo cifremos");
let valorDesplazamiento = parseInt(
  prompt("¡Cifrado César!\n Ingresa el valor de desplazamiento")
);
alert(`El texto cifrado es: ${cifrarTexto(texto, valorDesplazamiento)}`);

function cifrarTexto(texto, desplazamiento) {
  let cifrado = "";

  for (let i = 0; i < texto.length; i++) {
    let caracter = texto.charAt(i);

    if (caracter === " ") {
      cifrado = cifrado + " ";
    } else {

      let indice = abecedario.indexOf(caracter);
      if (indice !== -1) {
        //Calculo la posición del nuevo caracter en el array del abecedario
        let nuevoIndice = (indice + desplazamiento) % abecedario.length;

        if (nuevoIndice < 0) {
          nuevoIndice = nuevoIndice + abecedario.length;
        }

        let nuevoCaracter = abecedario[nuevoIndice];

        cifrado = cifrado + nuevoCaracter;
      } else {
        cifrado = cifrado + caracter;
      }
    }
  }

  return cifrado;
}
