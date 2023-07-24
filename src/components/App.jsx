import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Container from './Container/Container';
import Layout from './Layout/Layout';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Container>
    </Suspense>
  );
}
