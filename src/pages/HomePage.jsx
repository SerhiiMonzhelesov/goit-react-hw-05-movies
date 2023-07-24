import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { requestMovies } from 'services/Api';
import { Loader } from 'components/Loader/Loader';
import { StyledList } from './StyledHomePage';

function HomePage() {
  const [trendMovies, setTrendMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const moviesList = await requestMovies();
        setTrendMovies(moviesList);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <h1>Trending today</h1>
      {error && <p>Ooops... Error: {error} </p>}
      {trendMovies && (
        <StyledList>
          {trendMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </StyledList>
      )}
    </>
  );
}

export default HomePage;
