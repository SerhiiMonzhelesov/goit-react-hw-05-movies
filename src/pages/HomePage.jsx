import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { requestMovies } from 'services/Api';

import { Loader } from 'components/Loader/Loader';

function HomePage() {
  const [trendMovies, setTrendMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const moviesList = await requestMovies();
        setTrendMovies(moviesList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <h1>Trending today</h1>
        {trendMovies && (
          <ul>
            {trendMovies.map(movie => (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default HomePage;
