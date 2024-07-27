let esGol = false;
let esPalo = false;
let esAfuera = false;

let componenteX = parseInt(
  prompt(
    "¡Determinaremos si las patadas al arco son GOL o no!\n Ingresa la posición de la pelota en X"
  )
);
let componenteY = parseInt(
  prompt(
    "¡Determinaremos si las patadas al arco son GOL o no!\n Ingresa la posición de la pelota en Y"
  )
);
alert(
  `RESULTADO: ${arco(
    componenteX,
    componenteY
  )}\n\nPosición de la pelota en X: ${componenteX}\nPosición de la pelota en Y: ${componenteY}`
);
console.log(`Posición de la pelota en X: ${componenteX}`);
console.log(`Posición de la pelota en Y: ${componenteY}`);
console.log(`RESULTADO: ${arco(componenteX, componenteY)}`);

function arco(x, y) {
  if (x > 0 && x < 732) {
    if (y > 0 && y < 232) {
      esGol = true;
    }
  }

  if (x < 0 || x > 732 || y > 232) {
    esAfuera = true;
  }

  if ((x == 0 || x == 732) && y >= 0 && y <= 232) {
    esPalo = true;
  }
  if (y == 232 && x < 732 && x >= 0) {
    esPalo = true;
  }

  let resultado = "resultado";
  if (esAfuera == true) {
    resultado = "AFUERA";
  }
  if (esGol == true) {
    resultado = "GOL";
  }
  if (esPalo == true) {
    resultado = "PALO";
  }

  return resultado;
}
