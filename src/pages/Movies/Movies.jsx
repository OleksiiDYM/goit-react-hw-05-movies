import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from '../../services/Api';
import Loader from '../../components/Loader/Loader';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { FormDiv, Form, Input, Button } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const location = useLocation();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    try {
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
    searchQuery && fetchByQuery(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });

    setQuery('');
  };
  const onChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <FormDiv>
        <Form onSubmit={handleSubmit}>
          <Input type="text" value={query} onChange={onChange} />
          <Button type="submit">search</Button>
        </Form>
      </FormDiv>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong...</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
