/* console.log(1 + 1);
try {
    autenticarUsuario();
} catch (error) {
    console.log(error);
}
console.log(2 + 2); */

function autenticarUsuario() {
    return new Promise((resolve, reject) => {
        const error = false

        setTimeout(() => {
            if (!error) {
                resolve('Usuario Autenticado')
            } else {
                reject('Usuario no registrado')
            }
        }, 3000)
    })
}

//Async await

async function ejecutar() {
    try {
        console.log(1 + 1);
        const respuesta = await autenticarUsuario();

        console.log(respuesta);
        console.log(2 + 2);
    } catch (error) {
        console.log();
    }
}

ejecutar()