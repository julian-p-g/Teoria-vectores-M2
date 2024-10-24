// Comentario en linea

/*
 Comentario en bloque
*/

// Como se inicializa un vector
// Inicializar vacio
let vector = [];

// Inicializar un vectr con informacion
let numeros = [9, 10, 22, 3, 4, 11, 50, 99];

let nombres = ["Brandon", "Alexa", "Siri"];

let logicos = [true, false, true, true];

// Como se muestra la informacion de un vector


console.log(numeros);
console.log(nombres);
console.log(logicos);

//mostar un valor en especifico
console.log(numeros[6]);
console.log(nombres[2]);
console.log(logicos[3]);

// Como recorrer un vector
for(let i = 0; i <numeros.length; i++) {
    console.log(numeros [i]);
}

for(let j = 0; j <nombres.length; j++) {
    console.log(nombres [j]);
}

for(let k = 0; k <logicos.length; k++) {
    console.log(logicos [k]);
} 

// Como agrgar datos en un vector
numeros.push(300, 500, 100);

console.log(numeros);

nombres.push("Laura", "Martin");

console.log(nombres);

logicos.push(true, false);

console.log(logicos);

// Como se eliminan datos en un veector
//pop() elimina el ultimo
numeros.pop();

console.log(numeros);

//slice (posicion_inicial, cantidad_de_datos_borrados)
numeros.splice(4, 2);

console.log(numeros);