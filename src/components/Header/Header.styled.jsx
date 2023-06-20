import styled from "styled-components";
import beerIcon from "./beerIcon.svg";
import telIcon from "./telIcon.svg";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  padding: 12px 6px;
  /* padding: 20px 60px; */
  font-family: "Oswald";
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  margin-right: auto;
/* 
  padding: 10px; */
`;

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
  font-size: 18px;
  font-weight: 500;

  /* font-size: 48px;
  font-weight: 700; */

  text-shadow: 1px 1px 2px grey;
`;

export const AddressContainer = styled.address`
  display: flex;
  /* align-items: start; */
  justify-content: space-between;

  /* padding: 10px; */

  font-family: "Oswald";

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
  width: 12px;
  height: 12px;
  /* width: 16px;
  height: 16px; */

  margin-right: 5px;
  background: url(${telIcon});
  background-repeat: no-repeat;
  background-size: contain;
`;
