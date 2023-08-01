import { NavLink } from "react-router-dom";
import styled from "styled-components";
import css from "./AuthNav.module.css";

const StyledLink = styled(NavLink)`
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  font-size: 19px;
  transition: transform 0.35s;

  &.active {
    color: orange;
  }
`;

export const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <StyledLink to="/register" className={css.element} exact>
        Register
      </StyledLink>
      <StyledLink to="/login" className={css.element} exact>
        Sign in
      </StyledLink>
    </div>
  );
};
