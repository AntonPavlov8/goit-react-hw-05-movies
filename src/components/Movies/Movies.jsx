import { getMovieData } from 'api/api';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Search from './Search';

export default function Movies({ setMovieData }) {
  let { movieid } = useParams();

  useEffect(() => {
    if (movieid) {
      async function setMovie() {
        const data = await getMovieData(movieid);
        setMovieData({
          id: movieid,
          info: data,
        });
      }
      setMovie();
    }
  }, [movieid, setMovieData]);

  return <div>{movieid ? <Outlet /> : <Search />}</div>;
}
