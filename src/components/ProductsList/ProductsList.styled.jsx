import styled from "styled-components";

export const ListContainer = styled.div``;

export const StyledList = styled.ul`
  background-color: #fff;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;

  padding: 16px 20px;

  list-style: none;
  background-color: rgb(255, 241, 118, 0.25);

  @media (min-width: 481px) {
    padding: 32px 84px;
  }
`;

export const ListItem = styled.li`
  background-color: rgb(255, 241, 118, 0.5);

  max-width: min-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 6px;

  border-radius: 6%;
  overflow: hidden;
`;