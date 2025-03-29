const API_URL = "http://localhost:8989/api/books";

// Fetch all books (initial load)
function fetchBooks() {
    fetch(API_URL)
        .then(response => response.json())
        .then(books => {
            displayBooks(books);
        })
        .catch(error => console.error("Error fetching books:", error));
}

// Display books in table
function displayBooks(books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    books.forEach(book => {
        bookList.innerHTML += `
            <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.genre}</td>
                <td>${book.availabilityStatus}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editBook(${book.id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteBook(${book.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Add or Update Book
function addOrUpdateBook() {
    const bookId = document.getElementById("bookId").value;
    const bookData = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        genre: document.getElementById("genre").value,
        availabilityStatus: document.getElementById("availabilityStatus").value
    };

    const method = bookId ? "PUT" : "POST";
    const url = bookId ? `${API_URL}/${bookId}` : API_URL;

    fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookData)
    })
    .then(response => response.json())
    .then(() => {
        fetchBooks(); // Refresh list
        clearForm();  // Clear input fields
    })
    .catch(error => console.error("Error saving book:", error));
}

// Edit Book (Pre-fill form)
function editBook(id) {
    fetch(`${API_URL}/${id}`)
        .then(response => response.json())
        .then(book => {
            document.getElementById("bookId").value = book.id;
            document.getElementById("title").value = book.title;
            document.getElementById("author").value = book.author;
            document.getElementById("genre").value = book.genre;
            document.getElementById("availabilityStatus").value = book.availabilityStatus;
        })
        .catch(error => console.error("Error fetching book:", error));
}

// Delete Book
function deleteBook(id) {
    if (confirm("Are you sure you want to delete this book?")) {
        fetch(`${API_URL}/${id}`, { method: "DELETE" })
            .then(() => fetchBooks()) // Refresh list
            .catch(error => console.error("Error deleting book:", error));
    }
}

// Search Books
function searchBooks() {
    const searchQuery = document.getElementById("searchInput").value.trim();
    const url = searchQuery ? `${API_URL}/search?title=${searchQuery}` : API_URL;

    fetch(url)
        .then(response => response.json())
        .then(books => {
            displayBooks(books);
        })
        .catch(error => console.error("Error searching books:", error));
}

// Clear Form
function clearForm() {
    document.getElementById("bookId").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("availabilityStatus").value = "Available";
}

// Load books on page load
window.onload = fetchBooks;
