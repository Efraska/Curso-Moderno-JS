// Explicit Binding

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y Escucho ${el1} y ${el2}`)
}

const informacion = {
    nombre: 'Efra'
}
const musicafavorita = ['Reggae', 'Ska']

persona.call(informacion, musicafavorita[0], musicafavorita[1]) // En call tienes que pasarle el elemento en forma individual

persona.apply(informacion, musicafavorita) // en apply puedes pasar un arreglo completo

const nuevaFn = persona.bind(informacion, musicafavorita[0], musicafavorita[1]) // bind es similar a call solo que bind te crea una nueva funcion
nuevaFn()