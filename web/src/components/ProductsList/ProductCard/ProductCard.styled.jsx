import styled from "styled-components";

export const CardContainer = styled.div``;

export const ProductImage = styled.img`
  width: 200px;
  height: 250px;

  object-fit: cover;

  @media (min-width: 481px) {
    /* max-width: 250px;
    max-height: 300px; */
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Oswald";
  font-size: 14px;
  font-weight: 500;
`;

export const ProductTitle = styled.h4`
  font-size: 12px;
  font-weight: 500;
`;

export const CounterContainer = styled.div`
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InitialPriceStyled = styled.span`
  font-size: 10px;
`;

export const CounterButton = styled.button`
  padding: 6px 12px;

  border: none;
  border-radius: 30%;

  cursor: pointer;
`;
