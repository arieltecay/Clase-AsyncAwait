/* Practicar en agregar el reject en cada promesa y permutar los errores */
/* Verificar tambien los errores en el promise.all */

/* function descargarClientes() {
    console.log('Descargando Clientes...');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Clientes descargado')
        }, 5000)
    })
}

function descargarProductos() {
    console.log('Descargando Productos...');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Productos descargado')
        }, 1000)
    })
} */

function descargarClientes() {
    console.log('Descargando Clientes...');
    return new Promise((resolve, reject) => {
        const valor = true;
        setTimeout(() => {
            (valor) ?
                (resolve('Cliente descargado.'))
                :
                (reject("El cliente no se ha descargado."));
        }, 5000)
    })
}

function descargarProductos() {
    console.log('Descargando Productos...');
    return new Promise((resolve, reject) => {
        const valor = true;
        setTimeout(() => {
            (valor) ? resolve('Producto descargado.') : reject("El producto no se ha descargado.");
        }, 1000)
    })
}

const app = async () => {
    try {
        /*         
        const clientes = await descargarClientes();
        console.log(clientes);
        
        const productos = await descargarProductos();
        console.log(productos); */

        const respuesta = await Promise.allSettled([descargarClientes(), descargarProductos()])
        mostrarHTML(respuesta);
        console.log("seguimos");

    } catch (error) {
        console.log(error);
    }
}

function mostrarHTML(respuesta) {
    const body = document.querySelector('body')
    respuesta.map(dato => {
        console.log(dato.value);
        const title = document.createElement('h3')
        title.textContent = dato.value
        body.appendChild(title)
    })
}

app()


/* const app = async () => {
    try {
                
        const clientes = await descargarClientes()
        console.log(clientes);
        const productos = await descargarProductos()
        console.log(productos);

        const respuesta = await Promise.all([descargarClientes(), descargarProductos()])
        console.log(respuesta[1]);

    } catch (error) {
        console.log(error);
    }
}

app()
 */