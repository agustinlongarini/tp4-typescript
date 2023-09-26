type Rating = {
    count: number;
    rate: number;
};
    
type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Rating;
    title: string;
};
    
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then((products: Product[]) => {
    // Prepara la tabla
    let tableHTML: string = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th><th>Image</th><th>Category</th><th>Rating</th></tr></thead><tbody>';
    // Recorre todos los productos para generar las filas de la tabla
    products.forEach((p: Product) => {
    tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td><td><img src="${p.image}" style="width: 80px"></td><td>${p.category}</td><td>${p.rating.rate}</td></tr>`;
    });
    // Finaliza la tabla
    tableHTML += '</tbody>';
    // Inserta la tabla en el HTML
    document.querySelector('#tableElement')!.innerHTML = tableHTML;
    // Esconde el spinner
    const spinnerElement: HTMLElement = document.querySelector('#spinnerContainer')!;
    spinnerElement.style.display = 'none';  
});
    