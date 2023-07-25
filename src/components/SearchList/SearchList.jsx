import { Link } from 'react-router-dom';
import StyledSearchList from './StyledSearchList';
import PropTypes from 'prop-types';

function SearchList({ resultSearch, location }) {
  return (
    <StyledSearchList>
      {resultSearch.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link state={{ from: location }} to={`${id}`}>
              {title}
            </Link>
          </li>
        );
      })}
    </StyledSearchList>
  );
}

export default SearchList;

SearchList.propTypes = {
  resultSearch: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  location: PropTypes.object.isRequired,
};
