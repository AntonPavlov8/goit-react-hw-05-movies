import s from './navbar.module.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className={s.navBar}>
      <NavLink
        to="/home"
        className={({ isActive, isPending }) =>
          isPending ? s.navLink : isActive ? s.active : s.navLink
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive, isPending }) =>
          isPending ? s.navLink : isActive ? s.active : s.navLink
        }
      >
        Movies
      </NavLink>
    </div>
  );
};
