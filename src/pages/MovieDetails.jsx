import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { Movie } from 'components/Movie/Movie';
import { Loader } from 'components/Loader/Loader';
import { requestMovie } from 'services/Api';

function MovieDetails() {
  const [dataMovie, setDataMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const movie = await requestMovie(id);
        setDataMovie(movie);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {dataMovie && <Movie dataMovie={dataMovie} />}
      <div>
        <h3>Additional information</h3>
        {error && <p>Ooops... Error: {error} </p>}
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default MovieDetails;
