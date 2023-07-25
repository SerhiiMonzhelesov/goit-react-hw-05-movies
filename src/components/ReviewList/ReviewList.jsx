import PropTypes from 'prop-types';
import StyledReviewsList from './StyledReviewsList';

export function ReviewList({ reviews }) {
  return (
    <>
      <StyledReviewsList>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          );
        })}
      </StyledReviewsList>
    </>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
