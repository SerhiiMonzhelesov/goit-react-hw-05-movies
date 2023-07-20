import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { Movie } from 'components/Movie/Movie';
import { Loader } from 'components/Loader/Loader';
import { requestMovie } from 'services/Api';

export function MovieDetails() {
  const [dataMovie, setDataMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const movie = await requestMovie(id);
        setDataMovie(movie);
      } catch (error) {
        console.log(error);
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
