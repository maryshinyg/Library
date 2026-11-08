import BookCard from "./BookCard";
function BookList({ booksNames, onDelete, onUpdateStatus, onUpdateRating }) {
  return (
    <>
      <h1>My Books</h1>
      <ul>
        {booksNames.map((item) => (
          <BookCard
            key={item.id}
            item={item}
            onDelete={onDelete}
            onUpdateStatus={onUpdateStatus}
            onUpdateRating={onUpdateRating}
          />
        ))}
      </ul>
    </>
  );
}
export default BookList;
