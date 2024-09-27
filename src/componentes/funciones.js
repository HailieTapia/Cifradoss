export function cifrar(MCLA, Llave) {
    let resultado = "";
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    Llave = ((Llave % 26) + 26) % 26;
    if (MCLA) {
        for (let i = 0; i < MCLA.length; i++) {
            if (alfabeto.indexOf(MCLA[i]) != -1) {
                let posicion = (alfabeto.indexOf(MCLA[i]) + Llave) % 26;
                resultado += alfabeto[posicion];
            } else {
                resultado += MCLA[i];
            }
        }
    }
    return resultado;
}

export function descifrar(MCLA, Llave) {
    let resultado = "";
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    Llave = ((Llave % 26) + 26) % 26;
    if (MCLA) {
        for (let i = 0; i < MCLA.length; i++) {
            if (alfabeto.indexOf(MCLA[i]) != -1) {
                let posicion = (alfabeto.indexOf(MCLA[i]) - Llave + 26) % 26;
                resultado += alfabeto[posicion];
            } else {
                resultado += MCLA[i];
            }
        }
    }
    return resultado;
}
export function cifrarEscitala(mensaje, columnas) {
    if (columnas <= 0) return mensaje;
    let resultado = "";
    let filas = Math.ceil(mensaje.length / columnas);
    let matriz = [];

    // Rellenar la matriz con los caracteres del mensaje
    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            let index = i * columnas + j;
            fila.push(mensaje[index] || " ");  
        }
        matriz.push(fila);
    }

    //generar el mensaje cifrado
    for (let j = 0; j < columnas; j++) {
        for (let i = 0; i < filas; i++) {
            resultado += matriz[i][j];
        }
    }

    return resultado;
}

export function descifrarEscitala(mensajeCifrado, columnas) {
    if (columnas <= 0) return mensajeCifrado; // Validación de columnas
    let resultado = "";
    let filas = Math.ceil(mensajeCifrado.length / columnas);
    let matriz = [];

    // Rellenar la matriz leyendo en columnas
    for (let j = 0; j < columnas; j++) {
        for (let i = 0; i < filas; i++) {
            if (!matriz[i]) {
                matriz[i] = [];
            }
            matriz[i][j] = mensajeCifrado[j * filas + i] || ''; // Rellenar con vacío si no hay caracteres
        }
    }

    //mensaje original
    for (let i = 0; i < filas; i++) {
        resultado += matriz[i].join('');
    }

    // Eliminar rellenos
    return resultado.replace(/X/g, ''); 
}
