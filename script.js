// Función para mostrar la tabla correspondiente
document.getElementById("venta-btn").addEventListener("click", function() {
    mostrarTabla("venta-table");
});
document.getElementById("anulacion-btn").addEventListener("click", function() {
    mostrarTabla("anulacion-table");
});
document.getElementById("cierre-btn").addEventListener("click", function() {
    mostrarTabla("cierre-table");
});
document.getElementById("configuracion-btn").addEventListener("click", function() {
    mostrarTabla("configuracion-table");
});
document.getElementById("proveedor-btn").addEventListener("click", function() {
    mostrarTabla("proveedor-table");
});
document.getElementById("inventario-btn").addEventListener("click", function() {
    mostrarTabla("inventario-table");
});

// Función para mostrar la tabla correspondiente y ocultar las demás
function mostrarTabla(tablaId) {
    // Ocultar todas las tablas
    var tablas = document.querySelectorAll('.module-table');
    tablas.forEach(function(tabla) {
        tabla.style.display = 'none';
    });

    // Mostrar la tabla seleccionada
    var tabla = document.getElementById(tablaId);
    tabla.style.display = 'block';

    // Mostrar el botón de "Cerrar sesión"
    document.getElementById('logout-btn').style.display = 'inline-block';
}

// Mostrar el menú después de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block';
});
