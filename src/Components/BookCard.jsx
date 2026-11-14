function BookCard({ item, onDelete, onUpdateStatus, onUpdateRating }) {
  return (
    <>
      <li className="book-card">
        <h3>{item.title}</h3>
        <p>Author: {item.author}</p>
        <p>Genre: {item.genre || "Not specified"}</p>
        <p>Status: {item.status}</p>

        <select
          value={item.status}
          onChange={(e) => onUpdateStatus(item.id, e.target.value)}
        >
          <option value="">Update the Status</option>
          <option value="Read">Read</option>
          <option value="Reading">Reading</option>
          <option value="DNF">DNF</option>
        </select>

        {item.status === "Read" && (
          <>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={
                    star <= (item.rating || 0)
                      ? "star-button filled"
                      : "star-button"
                  }
                  onClick={() => onUpdateRating(item.id, star)}
                >
                  {star <= (item.rating || 0) ? "★" : "☆"}
                </button>
              ))}
            </div>
          </>
        )}
        <button type="button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
      </li>
    </>
  );
}
export default BookCard;
