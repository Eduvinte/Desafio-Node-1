import { writeFile } from "node:fs/promises";
import { readFile } from "node:fs/promises";

// Función para registrar citas
const registro = async (nombre, edad, animal, color, enfermedad) => {

   // Guardando los valores a la variable cita
   const cita = { nombre, edad, animal, color, enfermedad };
   
   // Lee el archivo
   const contenido = await readFile('citas.json', 'utf8')
   // Convierte lo hay que hay en Json
   const registros = JSON.parse(contenido)

   // Agregar el nuevo registro
   registros.push(cita)

   // Escribe la lista de registros en el archivo JSON
   await writeFile('citas.json', JSON.stringify(registros, null, 2));
   console.log("Cita registrada exitosamente");
}


const ler = async () => {

        const citas = await readFile('citas.json', 'utf8')
        const data = JSON.parse(citas)
        data.forEach((element) => {
            console.log(`
                ${element.nombre}
                ${element.edad}
                ${element.animal}
                ${element.color}
                ${element.enfermedad}
            `)
        });
}

export {registro, ler}