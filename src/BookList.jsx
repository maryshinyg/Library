function BookList({ booksNames, onDelete, onMarkAsRead, onUpdateStatus }) {
  return (
    <>
      <h1>My Books</h1>
      <ul>
        {booksNames.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>Author: {item.author}</p>
            <p>Genre: {item.genre || "Not specified"}</p>
            <p>Status: {item.status}</p>

            <select
              value={item.status}
              onChange={(e) => onUpdateStatus(item.title, e.target.value)}
            >
              <option value="">Update the Status</option>
              <option value="Read">Read</option>
              <option value="Reading">Reading</option>
              <option value="DNF">DNF</option>
            </select>

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
