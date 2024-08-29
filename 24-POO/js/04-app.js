// Class Declaration
class Cliente {

    #nombre;

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    // Propiedades estaticas
    static bienvenida() {
        return 'Bienvenido al cajero'
    }
}

const efra = new Cliente('Efra', 200);
console.log(efra.mostrarInformacion());
// console.log(efra.#nombre);