# Digital Library Book Management System


Project Description

The Digital Library Book Management System is a full-stack web application that allows users to manage a collection of books. The system provides features such as adding, updating, deleting, and searching for books. It is built using:

Backend: Java Spring Boot (with Spring Data JPA and PostgreSQL)

Frontend: HTML, CSS, JavaScript, and Bootstrap

Database: PostgreSQL

Features

Add a new book to the library

Update existing book details

Delete a book from the collection

Search for books by title

List all books in the database

Technologies Used

Backend:

Java Spring Boot

Spring Data JPA

PostgreSQL

REST APIs

Frontend:

HTML

CSS

JavaScript

Bootstrap

Fetch API for AJAX requests

Setup Instructions

Prerequisites

Java JDK 17 or later

Spring Boot

PostgreSQL Database

Backend Setup

Clone the repository:

git clone https://github.com/your-repository.git
cd digital-library

Configure the PostgreSQL database in application.properties:

spring.datasource.url=jdbc:postgresql://localhost:5432/library_db
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password
spring.jpa.hibernate.ddl-auto=update

Run the Spring Boot application:

mvn spring-boot:run

Frontend Setup

Open index.html in your web browser.

Ensure the backend is running at http://localhost:8989/api/books.

Use the interface to add, edit, delete, or search books.

API Endpoints

Method

Endpoint

Description

GET

/api/books

Get all books

GET

/api/books/{id}

Get a book by ID

POST

/api/books

Add a new book

PUT

/api/books/{id}

Update book details

DELETE

/api/books/{id}

Delete a book

GET

/api/books/search?title={title}

Search books by title


Author
Tejashri Jadhav
