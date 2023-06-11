import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function MoviePage({ movieInfo }) {
  let state = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(null);
  const prevUrl = state.state?.prevUrl;

  if (prevUrl === '/home' && searchQuery !== prevUrl) {
    setSearchQuery(`/home`);
  } else if (
    prevUrl &&
    `/movies?query=${prevUrl}` !== searchQuery &&
    prevUrl !== '/home'
  ) {
    setSearchQuery(`/movies?query=${prevUrl}`);
  }

  let userScore = Math.round((movieInfo.vote_average / 10) * 100);

  return (
    <div>
      <p onClick={() => navigate(searchQuery)}>{`<-- Go back`}</p>
      <div style={{ display: 'flex', gap: '18px', maxWidth: '800px' }}>
        <img
          alt=""
          src={
            movieInfo.poster_path
              ? `https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`
              : ''
          }
        />
        <div>
          <h2>{movieInfo.original_title}</h2>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{movieInfo.overview}</p>
          <h3>Genres:</h3>
          <p>{movieInfo.genres?.map(g => g.name + ' ')}</p>
        </div>
      </div>
      <hr />
      <p>Additional Information:</p>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
