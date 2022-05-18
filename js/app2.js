/* Practicar en agregar el reject en cada promesa y permutar los errores */
/* Verificar tambien los errores en el promise.all */

function descargarClientes() {
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
}

const app = async () => {
    try {
        /*         
        const clientes = await descargarClientes()
        console.log(clientes);
        const productos = await descargarProductos()
        console.log(productos); */

        const respuesta = await Promise.all([descargarClientes(), descargarProductos()])
        console.log(respuesta[1]);

    } catch (error) {
        console.log(error);
    }
}

app()
