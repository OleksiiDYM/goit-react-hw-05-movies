import { fetchMovieCredits } from '../../services/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import {
  CastContainer,
  CastList,
  CastItem,
  Img,
  CastDescr,
  CastName,
  CastChar,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
    fetchMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <CastContainer>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong...</p>}
      {credits.length > 0 && (
        <CastList>
          {credits.map(({ id, name, character, photo }) => {
            return (
              <CastItem key={id}>
                <Img src={photo} alt={name} />
                <CastDescr>
                  <CastName>{name}</CastName>
                  <CastChar>Character: {character}</CastChar>
                </CastDescr>
              </CastItem>
            );
          })}
        </CastList>
      )}
    </CastContainer>
  );
};

export default Cast;
