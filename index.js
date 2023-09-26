fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (products) {
    // Prepara la tabla
    var tableHTML = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th><th>Image</th><th>Category</th><th>Rating</th></tr></thead><tbody>';
    // Recorre todos los productos para generar las filas de la tabla
    products.forEach(function (p) {
        tableHTML += "<tr><td>".concat(p.id, "</td><td>").concat(p.title, "</td><td>").concat(p.description, "</td><td>").concat(p.price, "</td><td><img src=\"").concat(p.image, "\" style=\"width: 80px\"></td><td>").concat(p.category, "</td><td>").concat(p.rating.rate, "</td></tr>");
    });
    // Finaliza la tabla
    tableHTML += '</tbody>';
    // Inserta la tabla en el HTML
    document.querySelector('#tableElement').innerHTML = tableHTML;
    // Esconde el spinner
    var spinnerElement = document.querySelector('#spinnerContainer');
    spinnerElement.style.display = 'none';
});
