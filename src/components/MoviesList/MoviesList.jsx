import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieItem,
  MovieLink,
  Img,
  MovieTitle,
  MovieList,
} from '../../pages/Home/Home.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieList>
      {movies.map(({ id, title, poster }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <Img src={poster} alt={title} />
            <MovieTitle>
              <h3>{title}</h3>
            </MovieTitle>
          </MovieLink>
        </MovieItem>
      ))}
    </MovieList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    })
  ).isRequired,
};
