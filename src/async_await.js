console.log("1. Inicio del programa");

async function consultarHotel() {

    console.log("2. Consultando información");

    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log("3. Información recibida");
}

consultarHotel();

console.log("4. Programa continúa");
