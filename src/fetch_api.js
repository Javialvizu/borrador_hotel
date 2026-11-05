async function consultarProductos() {

    console.log("Consultando API...");

    // Realizamos una solicitud HTTP GET
    const respuesta = await fetch(
        'https://dummyjson.com/products'
    );

    // Convertimos la respuesta a formato JSON
    const datos = await respuesta.json();

    // Mostramos los productos
    console.log(datos.products[0].title);
    console.log(datos.products[0].price);
    console.log(datos.products[0].category);
}

consultarProductos();


