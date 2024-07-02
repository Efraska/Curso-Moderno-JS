const enlace = document.createElement('A');

// agregandole el texto
enlace.textContent = 'Nuevo Enlace';

// Añadiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace);

enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');
enlace.onclick = miFunction;

// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
// console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFunction() {
    alert('Diste click');
}

// Crear un CARD
const pararafo1 = document.createElement('P');
pararafo1.textContent = 'Concierto';
pararafo1.classList.add('categoria', 'concierto');

const pararafo2 = document.createElement('P');
pararafo2.textContent = 'Concierto de Rock';
pararafo2.classList.add('titulo');

const pararafo3 = document.createElement('P');
pararafo3.textContent = '$800 por persona';
pararafo3.classList.add('precio');

// Crear div con la clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(pararafo1);
info.appendChild(pararafo2);
info.appendChild(pararafo3);

// Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el card
const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);

// asignar info
card.appendChild(info);

// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);
