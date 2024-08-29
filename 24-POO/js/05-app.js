class Cliente {

    #nombre;

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const efra = new Cliente();
efra.setNombre('Efra');
console.log(efra.getNombre());