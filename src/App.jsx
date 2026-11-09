import Header from "./Components/Header";
import BookList from "./Components/BookList";
import LibraryLayout from "./Components/LibraryLayout";
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");

  const [booksNames, setBooksNames] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    if (!savedBooks) return [];

    const books = JSON.parse(savedBooks);
    const booksWithIds = books.map((book) => ({
      ...book,
      id: book.id ?? crypto.randomUUID(),
    }));
    localStorage.setItem("books", JSON.stringify(booksWithIds));
    return booksWithIds;
  });
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const AddBook = () => {
    if (!text.trim()) return;
    setBooksNames([
      ...booksNames,
      {
        id: crypto.randomUUID(),
        title: text,
        status: "Unread",
        author: author,
        genre: genre,
        rating: null,
      },
    ]);
    setText("");
    setAuthor("");
    setGenre("");
  };

  const DeleteBook = (bookId) => {
    const updatedBooks = booksNames.filter((book) => book.id !== bookId);
    setBooksNames(updatedBooks);
  };

  const filteredBooks = booksNames.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      filter === "All" ||
      (filter === "Read" && book.status === "Read") ||
      (filter === "Unread" && book.status === "Unread") ||
      (filter === "Reading" && book.status === "Reading") ||
      (filter === "DNF" && book.status === "DNF");

    return matchesSearch && matchesFilter;
  });

  const UpdateBookStatus = (id, newStatus) => {
    const updatedBooks = booksNames.map((book) => {
      if (book.id === id) {
        return { ...book, status: newStatus };
      } else {
        return book;
      }
    });

    setBooksNames(updatedBooks);
  };

  const UpdateBookRating = (bookId, newRating) => {
    const updateRating = booksNames.map((book) => {
      if (book.id === bookId) {
        return {
          ...book,
          rating: newRating === "" ? null : Number(newRating),
        };
      } else {
        return book;
      }
    });
    setBooksNames(updateRating);
  };

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(booksNames));
  }, [booksNames]);

  return (
    <LibraryLayout filter={filter} setFilter={setFilter}>
      <div className="top-bar">
        <Header />

        <input
          className="search-input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search books..."
        />
      </div>

      <div className="add-book-section">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter book name"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
        />

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Select Genre (Optional)</option>
          <option value="Classic">Classic</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Thriller">Thriller</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Literary Fiction">Literary Fiction</option>
          <option value="Thriller">Thriller</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Non-fiction">Non-fiction</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit" onClick={AddBook}>
          Add Book
        </button>
      </div>

      <BookList
        booksNames={filteredBooks}
        onDelete={DeleteBook}
        onUpdateStatus={UpdateBookStatus}
        onUpdateRating={UpdateBookRating}
      />
    </LibraryLayout>
  );
}

export default App;
