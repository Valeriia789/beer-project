import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;

  padding: 6px 12px;

  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  /* background-color: rgb(255, 241, 118, 0.25); */

  @media (min-width: 481px) {
    padding: 12px 24px;
    font-size: 14px;
  }

  @media (min-width: 769px) {
    padding: 16px 64px;
    font-size: 18px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: "Oswald";
  font-size: 16px;
  font-weight: 300;

    &.active {
      text-shadow: 1px 1px 1px #ebebc2, 1px 8px 8px #fcf525;
  }
`