function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000){
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente() }`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira
}


// Instanciarlo
const efra = new Cliente('efra', 6000);
console.log(efra.tipoCliente());
console.log( efra.nombreClienteSaldo() );
efra.retiraSaldo(1000);
console.log( efra.nombreClienteSaldo() );

console.log(efra);
