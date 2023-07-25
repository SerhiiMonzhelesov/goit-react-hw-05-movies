import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { StyledCastList } from './StyledCastList';
import PropTypes from 'prop-types';

export function CastList({ actors }) {
  return (
    <StyledCastList>
      {actors
        .filter(actor => actor.profile_path && actor)
        .map(({ name, character, profile_path, cast_id }) => {
          return (
            <li key={cast_id}>
              <div className="thumb">
                <img
                  data-src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  className="lazyload blur-up"
                />
              </div>
              <div className="descrActor">
                <h4>{name}</h4>
                <p>{character}</p>
              </div>
            </li>
          );
        })}
    </StyledCastList>
  );
}

CastList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      cast_id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
