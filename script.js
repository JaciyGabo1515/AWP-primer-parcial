// Espera a que todo el contenido del HTML se cargue
document.addEventListener('DOMContentLoaded', () => {
    
    // JSON o arreglo con los productos básicos de papelería
    const productos = [
        { nombre: "Paquete de 10 Plumas Negras", precio: 55.00 },
        { nombre: "Cuaderno Profesional 100 Hojas", precio: 38.50 },
        { nombre: "Caja de Marcadores Permanentes", precio: 89.90 }
    ];

    const container = document.getElementById('product-container');

    // Genera el HTML para cada producto y lo inserta en el contenedor
    productos.forEach(producto => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio.toFixed(2)} MXN</p>
        `;
        container.appendChild(productElement);
    });
});