function BookCard({ item, index, onDelete, onUpdateStatus, onUpdateRating }) {
  return (
    <>
      <li>
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

        {item.status === "Read" && (
          <>
            <p>Rating: {item.rating}</p>
            <select
              value={item.rating ?? ""}
              onChange={(e) => onUpdateRating(item.title, e.target.value)}
            >
              <option value="">No Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </>
        )}
        <button type="button" onClick={() => onDelete(index)}>
          Delete
        </button>
      </li>
    </>
  );
}
export default BookCard;
