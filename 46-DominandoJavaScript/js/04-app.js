// Implicit Binding

const usuario = {
    nombre: 'Efra',
    edad: 36,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
    },
    mascota: {
        nombre: 'Gaara',
        edad: 1,
        informacion() {
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();