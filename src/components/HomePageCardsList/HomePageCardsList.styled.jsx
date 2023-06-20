import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

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

  margin-left: auto;
  margin-right: auto;

  padding: 16px 60px;

  list-style: none;
  background-color: #a7a6a28d;
`;

export const ListItem = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  /* flex-basis: calc((100% - 20px) / 2); */

  align-items: center;
  justify-content: space-between;

  /* &:hover {
      box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.12);
    } */
`;

export const StyledImage = styled.img`
  max-width: 126px;
  max-height: 180px;
  border-radius: 3%;
`;

export const StyledTitle = styled.h3`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: end;

  width: 100%;
  height: 100%;

  font-family: "Oswald";
  font-size: 42px;
  font-weight: 300;
  text-shadow: 1px 1px 2px grey;

  background-color: #80807839;

    &:hover {
      background-color: transparent;
      color: transparent;
      text-shadow: none;
    }
`;
