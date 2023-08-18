import { MovieItem, MovieLink, Img, MovieTitle } from './Home.styled';

export const MovieList = ({ movies }) => {
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
