// Variables
var productos = [
    { id: 1, nombre: "Proteína en Polvo", precio: 30 },
    { id: 2, nombre: "Creatina", precio: 20 },
    { id: 3, nombre: "BCAA", precio: 25 }
];

var carrito = [];

// Funciones
function mostrarProductos() {
    var productosList = document.getElementById("productos-list");
    productosList.innerHTML = "<h2>Productos Disponibles:</h2>";

    productos.forEach(function(producto) {
        var productoItem = document.createElement("div");
        productoItem.classList.add("producto");
        productoItem.innerHTML = `${producto.id}. ${producto.nombre} - $${producto.precio} <button onclick="agregarProducto(${producto.id})">Agregar</button>`;
        productosList.appendChild(productoItem);
    });
}

function actualizarCarrito() {
    var carritoList = document.getElementById("carrito-list");
    var total = 0;

    carritoList.innerHTML = "";
    carrito.forEach(function(producto) {
        var carritoItem = document.createElement("li");
        carritoItem.textContent = `${producto.nombre} - $${producto.precio}`;
        carritoList.appendChild(carritoItem);
        total += producto.precio;
    });

    var totalElement = document.getElementById("total");
    totalElement.textContent = `Total: $${total}`;
}

function agregarProducto(id) {
    var productoSeleccionado = productos.find(function(producto) {
        return producto.id === id;
    });

    if (productoSeleccionado) {
        carrito.push(productoSeleccionado);
        actualizarCarrito();
    }
}

function agregarProductoPrompt() {
    var idProducto = parseInt(prompt("Ingrese el ID del producto que desea agregar al carrito:"));
    if (isNaN(idProducto)) {
        alert("ID de producto inválido. Intente nuevamente.");
        return;
    }

    var productoSeleccionado = productos.find(function(producto) {
        return producto.id === idProducto;
    });

    if (productoSeleccionado) {
        carrito.push(productoSeleccionado);
        actualizarCarrito();
        alert(`"${productoSeleccionado.nombre}" se ha agregado al carrito.`);
    } else {
        alert("Producto no encontrado.");
    }
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    alert("El carrito se ha vaciado.");
}

// Ejecución de las funciones
mostrarProductos();