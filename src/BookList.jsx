function BookList({ booksNames, onDelete }) {
  return (
    <>
      <h1>My Books</h1>
      <ul>
        {booksNames.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button type="button" onClick={() => onDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default BookList;
