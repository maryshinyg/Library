import Header from "./Header";
import BookList from "./BookList";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [booksNames, setBooksNames] = useState([]);

  const AddBook = () => {
    if (!text.trim()) return;
    setBooksNames([...booksNames, text.trim()]);
    setText("");
  };
  const DeleteBook = (indexToDelete) => {
    const updatedBooks = booksNames.filter(
      (_, index) => index !== indexToDelete,
    );
    setBooksNames(updatedBooks);
  };
  return (
    <>
      <Header />
      <BookList booksNames={booksNames} onDelete={DeleteBook} />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" onClick={AddBook}>
        Add Book
      </button>
      <p>Keep track of the books you're reading.</p>
    </>
  );
}

export default App;
