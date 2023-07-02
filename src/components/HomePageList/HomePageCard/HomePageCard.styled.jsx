import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ListItem = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;

  cursor: pointer;

  &:hover {
    box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
      0px 1px 1px rgba(0, 0, 0, 0.12);
  }
`;

export const StyledLink = styled(NavLink)`
  background-color: rgb(255, 241, 118, 0.5);

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border-radius: 3%;

  font-family: "Oswald";
  font-size: 32px;
  font-weight: 400;
  color: #000000c5;

  text-shadow: 2px 2px 4px rgba(233, 193, 71, 1);

  /* transform: scale(1);
transition: transform 0.5s ease-in-out;
&:hover {
  transform: scale(0.90);
} */

  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgb(255, 241, 118, 0.25);
    color: transparent;
    text-shadow: none;
  }

  @media (min-width: 481px) {
    font-size: 64px;
    font-weight: 500;
  }
`;

export const StyledImage = styled.img`
  max-width: 126px;
  max-height: 180px;
  border-radius: 3%;

  @media (min-width: 481px) {
    max-width: 280px;
    max-height: 360px;
  }
`;
