import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass}>
        HomePages
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        MoviesPage
      </NavLink>
    </nav>
  );
};
export default Navigation;
