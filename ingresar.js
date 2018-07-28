const fs = require('fs')

let  IngresarPersona = (personas) => {

    return new Promise( (resolve, reject) => {

        let data = []

        if(!personas) {
            reject('Ha ocurrido un error')
            return;
        }

        if(typeof personas.nombre != 'object') {
            data.push(`\nNombre: ${personas.nombre} Edad: ${personas.edad} Profesion: ${personas.profesion} \n`)
        }

        else{
            for(let i = 0; i < personas.nombre.length; i++){
                data.push(`\nNombre: ${personas.nombre[i]} Edad: ${personas.edad[i]} Profesion: ${personas.profesion[i]} \n`)
            }
        }
       
        fs.writeFile('./personas.txt', `${data}`, (err) => {
            if (err) throw(err)
            else resolve(data)
        })
        
    })

}

module.exports = {
    IngresarPersona
}