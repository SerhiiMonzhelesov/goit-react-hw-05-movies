export function ReviewList({ reviews }) {
  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
