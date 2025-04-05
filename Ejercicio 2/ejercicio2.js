//Desarrollo Ejercicio 2

//punto 1: se crea el array de frutas

const frutas = ["manzana", "banano", "uva", "pera", "sandia", "kiwi", "naranja"]

console.log(frutas) 

//punto 2: ordenamos el array alfabeticamente usando sort

frutas.sort()

console.log(frutas) //se muestra la lista ordenada

// punto 3: creamos la función

function SingularAPlural (palabra){
    if (palabra.endsWith("s")){
        return palabra
    }
    return palabra + "s" //agregamos una s al final de la palabra
}

console.log(SingularAPlural(frutas[1]))

//punto 4: creamos el nuevo array plural y el for of

for (i = 0; i < frutas.length; i++){
    let plural = SingularAPlural(frutas[i]) 
    console.log(plural)
}

//punto 5: crear función existefruta

function existeFruta(fruta){
    return frutas.includes(fruta) //includes verifica si el array contiene la fruta
}

console.log("¿Existe mango?", existeFruta("mango")) //se verifica si existe la fruta mango - false
console.log("¿Existe uva?", existeFruta("uva")) //se verifica si existe la fruta uva - true

//punto 6: filtrar frutas

const frutasCortas = []; 

for (let i = 0; i < frutas.length; i++){
    if (frutas[i].length <= 4){ //se filtran las frutas que tengan 4 letras o menos
        frutasCortas.push(frutas[i]) //se agrega al nuevo array
    }
}

console.log("Frutas con menos o igual a 4 letras:", frutasCortas) //imprimimos el nuevo array

//punto 7: realizar función eliminar

function eliminarFruta(fruta){
    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i] === fruta){
            frutas.splice(i, 1) 
            return true
        }
    } 
    return false 
}

console.log("Eliminar mango: ", eliminarFruta("mango")); //se verifica si existe mango - false
console.log("Eliminar kiwi: ", eliminarFruta("kiwi")); //se verifica si existe kiwi - true
console.log("Frutas después de eliminar: ", frutas)