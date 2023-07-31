import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/register" className={css.element}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.element}>
        Sign in
      </NavLink>
    </div>
  );
};
