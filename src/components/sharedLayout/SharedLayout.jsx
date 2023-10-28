import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <Link to="/" className={css.link}>
            Home
          </Link>
          <Link to="/catalog" className={css.link}>
            Catalog
          </Link>
          <Link to="/favorites" className={css.link}>
            Favorites
          </Link>
        </nav>
      </header>
      <main className="main">
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
