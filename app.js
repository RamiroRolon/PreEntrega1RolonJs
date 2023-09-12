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

    productos.forEach(function(producto) {
        var productoItem = document.createElement("div");
        productoItem.classList.add("producto");
        productoItem.innerHTML = `${producto.nombre} - $${producto.precio} <button onclick="agregarProducto(${producto.id})">Agregar</button>`;
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
        guardarCarritoEnStorage(); // Almacenar carrito en localStorage
    }
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    guardarCarritoEnStorage(); // Almacenar carrito vacío en localStorage
}

function cargarCarritoDesdeStorage() {
    var carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
    if (carritoGuardado) {
        carrito = carritoGuardado;
        actualizarCarrito();
    }
}

function guardarCarritoEnStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Manejo del evento "Vaciar Carrito"
document.getElementById("vaciar-carrito").addEventListener("click", function() {
    vaciarCarrito();
});

// Ejecución de las funciones
mostrarProductos();
cargarCarritoDesdeStorage(); // Cargar carrito desde localStorage al cargar la página