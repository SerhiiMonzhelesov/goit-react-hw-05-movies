import { Link } from 'react-router-dom';

function SearchList({ resultSearch, location }) {
  console.log(location);
  return (
    <ul>
      {resultSearch.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link state={{ from: location }} to={`${id}`}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchList;
