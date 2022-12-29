const IVA =21;

function calcularIva(precioSinIva){
    const precioConIva = precioSinIva + (precioSinIva*IVA/100);
    return precioConIva.toFixed(2);
}

let precioProducto;
do{
    precioProductoIngresado = prompt('Ingrese el precio del producto, para terminar escriba ESC');
    const precioProducto = parseFloat(precioProductoIngresado);
    if (precioProducto>0) {
        alert('El precio con IVA es: '+ calcularIva(precioProducto))
    }  

} while (precioProductoIngresado !=='ESC');