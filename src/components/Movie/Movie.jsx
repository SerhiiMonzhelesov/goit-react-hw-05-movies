import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import PropTypes from 'prop-types';
import StyledMovie from './StyledMovie';
import StyledMovieContainer from './StyledMovieContainer';

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
      <StyledMovieContainer>
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
      </StyledMovieContainer>
    </>
  );
}

Movie.propTypes = {
  dataMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired
    ).isRequired,
    release_date: PropTypes.number.isRequired,
  }),
};
