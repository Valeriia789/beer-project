import styled from "styled-components";
// import mainBgBeerImg from './mainBgBeerImg.jpg'
import mainBgBeerImg from './components/HomePageCardsList/116.jpg'

export const StyledContainer = styled.div`
height: inherit;
  background-image: url(${mainBgBeerImg});
  background-repeat: no-repeat;
  background-size: cover;

  /* @media (max-width: 480px) {
    width: 320px;
  } */

  @media (max-width: 768px) {
    /* width: 768px; */
  }

`
