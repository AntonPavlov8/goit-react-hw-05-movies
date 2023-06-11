import { getTrendingMovies } from 'api/api';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  useEffect(() => {
    async function getMovies() {
      const data = await getTrendingMovies(props.movies.page);
      props.setMovies(data);
    }
    getMovies();
  }, []);
  return (
    <div>
      <ul>
        {props.movies.results.map((movie, i) => (
          <li key={i}>
            <Link to={`/movies/${movie.id}`} state={{ prevUrl: '/home' }}>
              {movie.original_title
                ? movie.original_title
                : movie.original_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
