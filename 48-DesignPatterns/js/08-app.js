// Mediator Pattern -
function Vendedor(nombre) {
    this.nombre = nombre
    this.sala = null
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de ${precio}`)
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`)
    }
}


function Comprador(nombre) {
    this.nombre = nombre
    this.sala = null
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`)
    }
}

function Subasta() {
    let compradores = {}

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario
            usuario.sala = this
        }
    }
}

// crear objetos
const efra = new Comprador('Efra')
const mati = new Comprador('Mati')
const vendedor = new Vendedor('Vendedor de Autos')
const subasta = new Subasta()

// Tienes que registrarlos
subasta.registrar(efra)
subasta.registrar(mati)
subasta.registrar(vendedor)

vendedor.oferta('Mustang', 3000)

efra.oferta(350, efra)
mati.oferta(400, mati)
efra.oferta(450, mati)
mati.oferta(500, mati)

vendedor.vendido('Mati')