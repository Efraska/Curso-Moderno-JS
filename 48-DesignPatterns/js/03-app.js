// Singleton - Caracteristica principal es que no te permite crear multiples instancias de una misma clase

let instancia = null;

class Persona {
  constructor(nombre, email) {
    if (!instancia) {
        this.nombre = nombre;
        this.email = email;
        instancia = this;
    } else {
        return instancia;
    }
  }
}

const persona = new Persona("Efra", "efra@correo.com");
console.log(persona);

// const persona2 = new Persona("Chris", "chris@correo.com");
// console.log(persona2);
