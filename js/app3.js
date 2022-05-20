const url = 'https://picsum.photos/list'
const body = document.querySelector("body")

document.addEventListener('DOMContentLoaded', function () {
    obtenerDatos()
})
/*Segundo metodo aprendido Convertir a Async Await*/


/* Primer metodo aprendido */
/* const obtenerDatos = () => {
    fetch(url)
        .then(datos => datos.json())
        .then(photos => console.log(photos))
        .catch(error => console.log(error))
} */

/* async function obtenerDatos() { */

const obtenerDatos = async () => {
    try {
        const resultado = await fetch(url);
        const resulJson = await resultado.json();
        mostrarHTML(resulJson);


    } catch (error) {
        console.log(error);
    }
};



const mostrarHTML = (datos) => {
    datos.map(dato => {
        const { id, author, post_url } = dato
        const div = document.createElement('div')
        div.innerHTML =
            "<div class='nombre-clase' id='id' >ID:" + id + "</div>" +
            "<div>Nombre del Autor:" + author + "</div>" +
            "<a target='_blank' href='" + post_url + "'>Ver imagen</a>"
        body.appendChild(div)
    })
}


/* function mostrarHTML(datos) {
    console.log(datos);

    datos.map(dato => {
        const { author, id, post_url } = dato;
        const html = document.createElement('div')
        html.innerHTML = `        
            <p> ----------------</p>
            <p class="parrafo"> Autor: ${author}</p>
            <p> Id: ${id} </p>
            <a href="${post_url}" target="_blank">ver imagen</a>
            <p> ----------------</p>        
        `
        body.appendChild(html)
    });
    const hoja = document.querySelector("body > div:nth-child(7)")
    hoja.classList.add('parrafo2')
} */
