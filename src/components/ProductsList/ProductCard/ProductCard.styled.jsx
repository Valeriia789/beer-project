import styled from "styled-components";

export const CardContainer = styled.div`
  
`

export const ListItem = styled.li`
  background-color: #f4ecec82;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: min-content;
`

export const ProductImage = styled.img`
  width: 200px;
  height: 250px;

  object-fit: cover;

  @media (min-width: 481px) {
    /* max-width: 250px;
    max-height: 300px; */
  }
`

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Oswald";
  font-size: 14px;
  font-weight: 500;
`

export const ProductTitle = styled.h4`
  font-size: 12px;
  font-weight: 500;
`

export const QuantityContainer = styled.div`
  display: flex;
`

export const PriceContainer = styled.div`

`

export const InitialPriceStyled = styled.span`
  font-size: 10px;
`


