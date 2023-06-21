import styled from "styled-components";
import headerBgImg from "./headerBgImg.jpg";
import beerIcon from "./beerIcon.svg";
import telIcon from "./telIcon.svg";

export const HeaderStyled = styled.header`
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */

  background: url(${headerBgImg});
  background-repeat: no-repeat;
  background-size: cover;

  font-family: "Oswald";
`;

export const HeaderContainer = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: space-between;
  padding: 6px 12px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  /* padding: 10px; */
`;

export const LogoTitleContainer = styled.div``;

export const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  /* width: 48px;
  height: 48px; */

  margin-right: 5px;

  background: url(${beerIcon});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const LogoTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;

  /* font-size: 48px;
  font-weight: 700; */

  text-shadow: 1px 1px 2px grey;
`;

export const AddressContainer = styled.address`
  display: flex;

  /* padding: 10px; */

  font-size: 8px;
  font-weight: 500;
  /* font-size: 14px;
  font-weight: 500; */
`;

export const TitleStyled = styled.h2`
  font-size: 10px;
  font-weight: 700;

  /* font-size: 18px;
  font-weight: 700; */
`;

export const AddressStyled = styled.address`
  margin-left: 10px;
`;

export const TelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TelIcon = styled.div`
  width: 10px;
  height: 10px;
  /* width: 16px;
  height: 16px; */

  margin-right: 5px;
  background: url(${telIcon});
  background-repeat: no-repeat;
  background-size: contain;
`;
