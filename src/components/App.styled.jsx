import styled from "styled-components";
import bodyBgImg from "./bodyBgImg.jpg";

export const BodyContainer = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-image: url(${bodyBgImg});
  background-repeat: no-repeat;
  background-size: cover;

  overflow-y: scroll;
  cursor: default;
`;