import { getMovieReviews } from 'api/api';
import { useEffect, useState } from 'react';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (movieId !== '') {
      async function fetchReviews() {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      }
      fetchReviews();
    }
  }, [movieId]);

  return (
    <div>
      {reviews && reviews.total_results > 0 ? (
        <ul>
          {reviews.results.map(review => (
            <li key={review.id}>
              <b>Author: {review.author}</b>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        `We don't have any reviews for this movie.`
      )}
    </div>
  );
}
