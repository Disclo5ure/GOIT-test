import { Routes, Route } from 'react-router-dom';
import SharedLayout from './sharedLayout/SharedLayout';
import { Home } from 'pages/home/Home';
import { Catalog } from 'pages/catalog/Catalog';
import { Favorites } from 'pages/favorites/Favorites';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
