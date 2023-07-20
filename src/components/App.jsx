import { Route, Routes } from 'react-router-dom';

import Container from './Container/Container';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import Layout from './Layout/Layout';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}
