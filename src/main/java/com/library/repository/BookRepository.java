package com.library.repository;

import com.library.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {
    // Search books by title (case-insensitive)
    List<Book> findByTitleContainingIgnoreCase(String title);

    // Search books by author (case-insensitive)
    List<Book> findByAuthorContainingIgnoreCase(String author);

    // Search books by both title and author (case-insensitive)
    List<Book> findByTitleContainingIgnoreCaseAndAuthorContainingIgnoreCase(String title, String author);
}
