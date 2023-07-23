import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import StyledMovie from './StyledMovie';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';

export function Movie({
  dataMovie: {
    title,
    overview,
    poster_path,
    vote_average,
    genres,
    release_date,
  },
}) {
  const location = useLocation();
  const goBackLink = useRef(location.state?.from);

  const allGenresMovie = genres.map(({ name }) => name).join(', ');
  const voteScore = `${Math.round(vote_average) * 10} %`;
  const releaseYear = `(${release_date.substring(0, 4)})`;

  return (
    <>
      <Link to={goBackLink.current ?? '/'}>Go back</Link>
      <StyledMovie>
        <div className="img-thumb">
          <img
            data-src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="lazyload blur-up"
          />
        </div>
        <div>
          <h1>
            {title} {releaseYear}
          </h1>
          <p>User Score: {voteScore}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{allGenresMovie}</p>
        </div>
      </StyledMovie>
    </>
  );
}
