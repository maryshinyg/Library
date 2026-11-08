import Header from "./Header";
import BookList from "./BookList";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [booksNames, setBooksNames] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const AddBook = () => {
    if (!text.trim()) return;
    setBooksNames([
      ...booksNames,
      {
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

  const DeleteBook = (indexToDelete) => {
    const updatedBooks = booksNames.filter(
      (_, index) => index !== indexToDelete,
    );
    setBooksNames(updatedBooks);
  };

  const MarkUpdate = (indexToUpdate) => {
    const updatedBooks = booksNames.map((book, index) => {
      if (index === indexToUpdate) {
        return { ...book, status: "Read" };
      } else {
        return book;
      }
    });
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

  const UpdateBookStatus = (title, newStatus) => {
    const updatedBooks = booksNames.map((book) => {
      if (book.title === title) {
        return { ...book, status: newStatus };
      } else {
        return book;
      }
    });

    setBooksNames(updatedBooks);
  };

  const UpdateBookRating = (bookTitle, newRating) => {
    const updateRating = booksNames.map((book) => {
      if (book.title === bookTitle) {
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
  return (
    <>
      <Header />
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Unread")}>Unread</button>
      <button onClick={() => setFilter("Reading")}>Reading</button>
      <button onClick={() => setFilter("Read")}>Read</button>
      <button onClick={() => setFilter("DNF")}>DNF</button>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search books..."
      />

      <BookList
        booksNames={filteredBooks}
        onDelete={DeleteBook}
        onMarkAsRead={MarkUpdate}
        onUpdateStatus={UpdateBookStatus}
        onUpdateRating={UpdateBookRating}
      />
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
        <option value="Fantasy">Fantasy</option>
        <option value="Romance">Romance</option>
        <option value="Thriller">Thriller</option>
        <option value="Mystery">Mystery</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Non-fiction">Non-fiction</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit" onClick={AddBook}>
        Add Book
      </button>
      <p>Keep track of the books you're reading.</p>
    </>
  );
}

export default App;
