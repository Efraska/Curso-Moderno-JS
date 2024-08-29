// Class Declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // Propiedades estaticas
    static bienvenida() {
        return 'Bienvenido al cajero'
    }
}

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() { // reescribir un método, basta con nombrarlo de la misma forma 
        return 'Bienvenido al cajero de empresas'
    }
}

const efra = new Cliente('Efra', 400);
const empresa =new Empresa('Código con juan', 500, 7201426154, 'Aprendizaje en Línea');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());