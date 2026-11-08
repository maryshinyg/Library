import BookCard from "./BookCard";
function BookList({
  booksNames,
  onDelete,
  onMarkAsRead,
  onUpdateStatus,
  onUpdateRating,
}) {
  return (
    <>
      <h1>My Books</h1>
      <ul>
        {booksNames.map((item, index) => (
          <BookCard
            key={`${item.title}-${index}`}
            item={item}
            index={index}
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
