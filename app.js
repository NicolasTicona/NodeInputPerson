//Ingresar el nombre del usuario
//Editar sus datos por consola
//Guardar la data en un array

const argv = require('yargs')
    .command('nuevo', 'Ingresar una nueva persona: Nombre, edad, profesion', (
        {
            nombre: {
                alias: 'n',
                demand: true
            },
            edad:{ 
                alias: 'e',
                demand: true
            },
            profesion: {
                alias: 'p',
                demand: true
            }
        }
    ))
    .help()
    .argv

const {IngresarPersona} = require('./ingresar')

let personas_data = argv

IngresarPersona(personas_data)
    .then( (data) => {
        data.forEach(persona => {
            console.log(persona)
        });
    })
    .catch(err => console.log(err))