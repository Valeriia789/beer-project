import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 16px 42px;

  @media (min-width: 481px) {
    padding: 32px 84px;
  }
  /* @media (min-width: 481px) {
    width: 480px;
  }

  @media (min-width: 769px) {
    width: 768px;
  } */
`;

export const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  padding: 16px 20px;

  list-style: none;
  background-color: #a7a6a28d;
`;

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

export const StyledImage = styled.img`
  max-width: 126px;
  max-height: 180px;
  border-radius: 3%;

  @media (min-width: 481px) {
    max-width: 280px;
    max-height: 360px;
  }
`;

export const StyledTitle = styled.h3`
  background-color: #e0cf537f;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-family: "Oswald";
  font-size: 32px;
  font-weight: 400;
  color: #000000c5;

  text-shadow: 2px 2px 4px #e9c147;

  /* transform: scale(1);
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(0.90);
  } */

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #e0cf532c;
    color: transparent;
    text-shadow: none;
  }

  @media (min-width: 481px) {
    font-size: 64px;
    font-weight: 500;
  }
`;
