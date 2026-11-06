import Header from "./Header";
import BookList from "./BookList";

function App() {
  const books = ["Dark Matter", "Mistborn", "Crime and Punishment"];
  return (
    <>
      <Header />
      <BookList booksCount={books.length} />
      <p>Keep track of the books you're reading.</p>
    </>
  );
}

export default App;
