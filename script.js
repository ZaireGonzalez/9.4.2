function login(event) {
    event.preventDefault();
    // Aquí puedes validar los datos del login si es necesario
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("menu-screen").style.display = "block";
}

function logout() {
    document.getElementById("menu-screen").style.display = "none";
    document.getElementById("login-screen").style.display = "block";
}

function showTable(module) {
    const tables = {
        venta: [
            ['Producto A', '10', '100', '$1000'],
            ['Producto B', '5', '50', '$500'],
            ['Producto C', '8', '80', '$800'],
            ['Producto D', '12', '120', '$1200'],
            ['Producto E', '15', '150', '$1500'],
        ],
        anulacion: [
            ['Producto A', '10', '100', '$1000'],
            ['Producto B', '5', '50', '$500'],
            ['Producto C', '8', '80', '$800'],
            ['Producto D', '12', '120', '$1200'],
            ['Producto E', '15', '150', '$1500'],
        ],
        cierre: [
            ['Producto A', '10', '100', '$1000'],
            ['Producto B', '5', '50', '$500'],
            ['Producto C', '8', '80', '$800'],
            ['Producto D', '12', '120', '$1200'],
            ['Producto E', '15', '150', '$1500'],
        ],
        configuracion: [
            ['Configuración A', 'Sí'],
            ['Configuración B', 'No'],
            ['Configuración C', 'Sí'],
            ['Configuración D', 'No'],
            ['Configuración E', 'Sí'],
        ],
        proveedor: [
            ['Proveedor A', 'Producto A'],
            ['Proveedor B', 'Producto B'],
            ['Proveedor C', 'Producto C'],
            ['Proveedor D', 'Producto D'],
            ['Proveedor E', 'Producto E'],
        ],
        inventario: [
            ['Producto A', '100'],
            ['Producto B', '50'],
            ['Producto C', '80'],
            ['Producto D', '120'],
            ['Producto E', '150'],
        ]
    };

    const tableData = tables[module] || [];
    let tableHTML = `<table><thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Total</th></tr></thead><tbody>`;
    
    tableData.forEach(row => {
        tableHTML += `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td></tr>`;
    });

    tableHTML += `</tbody></table>`;
    document.getElementById("table-container").innerHTML = tableHTML;
    document.getElementById("table-container").style.display = "block";
}
