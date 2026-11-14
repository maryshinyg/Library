function BookDetails({ book, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="book-details">
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre || "Not specified"}</p>
        <p>Status: {book.status}</p>
        <p>Description: {book.description || "No description available."}</p>
        <p>Rating: {book.rating !== null ? book.rating : "Not rated"}</p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
