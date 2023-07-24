import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { StyledCastList } from './StyledCastList';

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
              <h4>{name}</h4>
              <p>{character}</p>
            </li>
          );
        })}
    </StyledCastList>
  );
}
