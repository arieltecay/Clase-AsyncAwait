const url = 'https://picsum.photos/list'
const body = document.querySelector("body")

document.addEventListener('DOMContentLoaded', function () {
    obtenerDatos()
})

/* Primer metodo aprendido */
const obtenerDatos = () => {
    fetch(url)
        .then(datos => datos.json())
        .then(photos => mostrar(photos))
        .catch(error => console.log(error))
}


/*Segundo metodo aprendido Convertir a Async Await*/

