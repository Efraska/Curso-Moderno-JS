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

const efra = new Cliente('Efra', 400);
console.log(efra.mostrarInformacion());
console.log(efra);

console.log(Cliente.bienvenida() );

// Class Expression
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const efra2 = new Cliente2('Efra', 400);
console.log(efra2.mostrarInformacion());
console.log(efra2)