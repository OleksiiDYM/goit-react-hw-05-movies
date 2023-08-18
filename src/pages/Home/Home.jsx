import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from '../../services/Api';
import Loader from '../../components/Loader/Loader';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { HomeContainer, HomeTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);
    const getMovies = async () => {
      try {
        const data = await fetchTrending();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Tranding this week</HomeTitle>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong...</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </HomeContainer>
  );
};

export default Home;
