let cadena = prompt("¡Validamos paréntesis!\n Ingresa un texto con paréntesis para que sepamos si están balanceados");

let pila = ""
let validar = true;

for(let i = 0; i < cadena.length; i++){
    let caracter = caracter[i]
    while(validar){
        if(caracter == "(" ){
            pila = pila + caracter;
        }
        else{
            if(caracter==")"){
                if(pila===""){
                    validar= false;
                }
            }
        }
    }
}