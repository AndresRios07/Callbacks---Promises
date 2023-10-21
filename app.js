// PROBLEMA 1

const baseDatos1 = ["Canada", "EUA", "Mexico", "Ecuador", "Brazil", "Argentina", "Uruguay"]
const baseDatos2 = ["Japón", "Irán", "Corea del Sur", "Alemania", "Croacia", "España", "Inglaterra"]

function busquedaBaseDeDatos1(nombrePais, mensaje, otraBusqueda) {
    const elementoEncontrado = baseDatos1.find((pais) => pais === nombrePais)

    if (elementoEncontrado) {
        mensaje()
    }
    else {
        otraBusqueda(nombrePais, mensaje)
    }
}

function encontrado() {
    console.log("País encontrado");
}

function busquedaBaseDeDatos2(nombrePais, mensaje) {
    const elementoEncontrado = baseDatos2.find((pais) => pais === nombrePais)

    if (elementoEncontrado) {
        mensaje()
    }
    else {
        console.log("Dato no encontrado");
    }
}


// busquedaBaseDeDatos1("Alemania", encontrado, busquedaBaseDeDatos2);



// PROBLEMA 2

function promesa(cadena) {
    return new Promise((resolve, reject) => {
        const vocales = "AEIOUaeiou"
        const ultimaLetra = cadena[cadena.length - 1]
        const esVocal = vocales.includes(ultimaLetra)

        if (esVocal) {
            resolve(ultimaLetra)
        }
        else {
            reject("La última letra no es vocal: " + ultimaLetra)
        }
    })
}

promesa("asdkadjlasA")
.then(mensaje => console.log(mensaje))
.catch(error => console.log(error))