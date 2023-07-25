import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { requestMovieBySearch } from 'services/Api';
import SearchList from 'components/SearchList/SearchList';
import StyledForm from './StyledMoviePage';

function MoviesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [resultSearch, setResultSearch] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const searchValue = searchParams.get('query');

  useEffect(() => {
    if (!searchValue) return;

    const fetchMoviesBySearch = async () => {
      try {
        setIsLoading(true);
        const searchData = await requestMovieBySearch(searchValue);
        setResultSearch(searchData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesBySearch();
  }, [searchValue]);

  const handleSubmit = event => {
    event.preventDefault();
    const searchName = event.target.children.search.value;
    setSearchParams({ query: searchName });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search movie..."
          required
        ></input>

        <button type="submit">Search</button>
      </StyledForm>
      {isLoading && <Loader />}
      {error && <p>Ooops... Error: {error}</p>}
      {resultSearch && (
        <SearchList resultSearch={resultSearch} location={location} />
      )}
    </>
  );
}

export default MoviesPage;
