// Función para buscar libros por título
function searchBooks() {
    const input = document.getElementById('search').value.toLowerCase();
    const books = document.getElementsByClassName('book');
    
    Array.from(books).forEach((book) => {
        const title = book.getAttribute('data-title').toLowerCase();
        const category = book.getAttribute('data-category');
        const selectedCategory = document.getElementById('category').value;
        
        // Mostrar u ocultar el libro según el título y la categoría seleccionada
        if (title.includes(input) && (selectedCategory === 'all' || selectedCategory === category)) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    });
}

// Función para filtrar libros por categoría
function filterByCategory() {
    const selectedCategory = document.getElementById('category').value;
    const books = document.getElementsByClassName('book');

    Array.from(books).forEach((book) => {
        const category = book.getAttribute('data-category');
        const input = document.getElementById('search').value.toLowerCase();
        const title = book.getAttribute('data-title').toLowerCase();

        // Mostrar u ocultar el libro según la categoría y la búsqueda actual
        if ((selectedCategory === 'all' || selectedCategory === category) && title.includes(input)) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    });
}

// Función para inicializar la página
function initLibrary() {
    document.getElementById('search').addEventListener('keyup', searchBooks);
    document.getElementById('category').addEventListener('change', filterByCategory);
}

// Inicializar la biblioteca cuando la página haya cargado completamente
document.addEventListener('DOMContentLoaded', initLibrary);