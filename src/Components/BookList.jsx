import BookCard from "./BookCard";
function BookList({
  booksNames,
  onDelete,
  onUpdateStatus,
  onUpdateRating,
  onSelectBook,
}) {
  return (
    <>
      <h1>My Books</h1>
      <ul className="book-grid">
        {booksNames.map((item) => (
          <BookCard
            key={item.id}
            item={item}
            onDelete={onDelete}
            onUpdateStatus={onUpdateStatus}
            onUpdateRating={onUpdateRating}
            onSelectBook={onSelectBook}
          />
        ))}
      </ul>
    </>
  );
}
export default BookList;
