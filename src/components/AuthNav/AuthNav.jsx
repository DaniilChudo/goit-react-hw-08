import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/login" className={css.link}>
        Log In
      </NavLink>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
    </nav>
  );
};
