let H = ["yogurt", "tomate", "leche", "oregano"];
let R = ["tomate", "oregano"];
let F = [];

console.log(receta(H, R, F));

// la receta será salsa para pizza
function receta(heladera, ingredientes, faltantes) {
    console.log("---------------------");

    console.log("En la heladera hay:")
    for (let i = 0; i < heladera.length; i++) {
        console.log(heladera[i])
    }
    console.log("---------------------");
    console.log("Los ingredientes que se necesitan son:")
    for (let i = 0; i < ingredientes.length; i++) {
        console.log(ingredientes[i])
    }

    let j = 0;
    if (heladera.length>ingredientes.length) {
        for (let i = 0; i < heladera.length; i++) {
        if (heladera.includes(ingredientes[j])) {
            
            console.log(j);
        }
        else {
            faltantes.push(ingredientes[j]);
        }
        j++;
    }
    }
    else{
        for (let i = 0; i < ingredientes.length; i++) {
            if (heladera.includes(ingredientes[j])) {
                
                console.log(j);
            }
            else {
                faltantes.push(ingredientes[j]);
            }
            j++;
        }
    }
    
    if (faltantes.length == 0) {
        console.log("Ricardo tiene todos los ingredientes para la receta");
        // for (let i = 0; i < array.length; i++) {
        //     console.log(array[i])
        // }
    }
    else {
        console.log("---------------------");
        console.log("Ricardo necesita comprar:");
        for (let i = 0; i < faltantes.length; i++) {
            console.log(faltantes[i])
        }

    }
}