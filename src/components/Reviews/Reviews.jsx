import { fetchMovieReviews } from '../../services/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import { ReviewsContainer } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams('movieId');
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ReviewsContainer>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong...</p>}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
