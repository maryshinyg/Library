function BookList({ booksNames, onDelete, onMarkAsRead }) {
  return (
    <>
      <h1>My Books</h1>
      <ul>
        {booksNames.map((item, index) => (
          <li key={index}>
            {item.title} {item.isRead && <span>(Read)</span>}
            <button type="button" onClick={() => onDelete(index)}>
              Delete
            </button>
            <button type="button" onClick={() => onMarkAsRead(index)}>
              Mark As Read?
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default BookList;
