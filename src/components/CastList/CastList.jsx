import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { StyledCastList } from './StyledCastList';

export function CastList({ actors }) {
  // const actorWithPhoto = actors.filter(actor => actor.profile_path && actor);

  return (
    <StyledCastList>
      {actors
        .filter(actor => actor.profile_path && actor)
        .map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
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
