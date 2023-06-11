import { searchMovies } from 'api/api';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    async function fetchData() {
      const data = await searchMovies(searchQuery);
      setSearchResults(data.results);
    }
    if (searchQuery) {
      fetchData();
    }
  }, [searchParams]);

  const searchFn = e => {
    e.preventDefault();
    const value = e.target.elements[0].value;
    setSearchParams({ query: value });
  };

  return (
    <div>
      <form onSubmit={searchFn}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <div>
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ prevUrl: searchQuery }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
