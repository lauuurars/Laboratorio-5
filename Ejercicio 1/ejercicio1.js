
//Desarrollo 

const opciones = ["PIEDRA", "PAPEL", "TIJERA"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max); 
}

let computadora = opciones[getRandomInt(3)]; //se obtiene un valor aleatorio entre 0 y 2 para la computadora

let jugar = true;

while (jugar){

    let usuario = prompt("Juegue PIEDRA, PAPEL o TIJERA").toUpperCase(); //solicitamos al usuario que ingrese una de las opciones, toUpperCase() convierte el texto a mayusculas 
    if (usuario === "PIEDRA" || usuario === "PAPEL" || usuario === "TIJERA"){
        if (usuario == computadora){ 
            console.log("¡ESTAMOS EMPATADOS!")
        }else if (usuario == "PIEDRA" && computadora == "TIJERA"){ //&& se usa para comparar 2 condiciones al mismo tiempo
            console.log("¡FELICIDADES...GANASTE! 😄")
        }else if (usuario == "PAPEL" && computadora == "PIEDRA"){
            console.log("¡FELICIDADES...GANASTE! 😄")
        }else if (usuario == "TIJERA" && computadora == "PAPEL"){
            console.log("¡FELICIDADES...GANASTE! 😄")
        }else{
            console.log("LO SIENTO...PERDISTE 🥺")
        }

        let respuesta = prompt("¿Quieres jugar de nuevo?").toUpperCase(); //preguntamos al usuario si desea jugar otra vez y transformamos el texto a mayus
        if (respuesta === "SI"){
            jugar = true;
        }else if (respuesta === "NO"){
            jugar = false;
        console.log("Gracias por jugar")
        }
    } 
} 



