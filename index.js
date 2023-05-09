import { registro, ler } from "./operaciones.js";

// Captando valores desde de la terminal
const argumentos = process.argv.slice(2);
// Destructurando para validar el indice 0
const validacion = argumentos[0];
// Validamos si el indice 0 es igual a registrar
if (validacion === "registrar") {
    // Guarda los valores enviado desde la terminal 
    const [nombre, edad, animal, color, enfermedad] = argumentos.slice(1);
    // Pasa estes valores a la función registro
    registro(nombre, edad, animal, color, enfermedad)
    // Si el indice 0 es igual leer 
} else if (validacion === "leer") {
    // Ejecuta la función ler
    ler();
} else {
    // Si indice 0 no es igual a registrar ni leer entonces el registro falla
    console.log("La validación falló");
}
