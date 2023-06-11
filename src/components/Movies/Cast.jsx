import { getMovieCredits } from 'api/api';
import { useEffect, useState } from 'react';
import s from './cast.module.css';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (movieId !== '') {
      async function fetchCast() {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      }
      fetchCast();
    }
  }, [movieId]);

  return (
    <div>
      {cast && (
        <ul className={s.castList}>
          {cast.map(person => (
            <li key={person.id} className={s.castListItem}>
              <img
                width="150px"
                alt=""
                src={
                  person.profile_path
                    ? `https://image.tmdb.org/t/p/w300${person.profile_path}`
                    : ''
                }
              />
              <p> {person.name}</p>
              <p>{person.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
