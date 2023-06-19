import styled from "styled-components";
import BeerHeaderSquoosh from "./BeerHeaderSquoosh.jpg";
import beerIcon from "./beerIcon.svg";
import telIcon from "./telIcon.svg";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 60px;

  background: url(${BeerHeaderSquoosh});
  background-repeat: no-repeat;
  background-size: cover;

  font-family: "Oswald";
  /* background-position:75% 25%; */
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 10px;

  border-top-left-radius: 30%;
  border-bottom-right-radius: 30%;

  background-color: #e8e1bf3a;
`;

export const LogoIcon = styled.div`
  width: 48px;
  height: 48px;

  margin-right: 10px;
  background: url(${beerIcon});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const LogoTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;

  text-shadow: 1px 1px 2px grey;
`;

export const AddressContainer = styled.address`
  display: flex;
  align-items: start;
  justify-content: space-between;

  padding: 10px;

  border-top-left-radius: 30%;
  border-bottom-right-radius: 30%;

  background-color: #e8e1bf3a;

  font-family: "Oswald";
  font-size: 14px;
  font-weight: 500;
`;

export const TitleStyled = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

export const AddressStyled = styled.address`
  margin-left: 40px;
`;

export const TelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TelIcon = styled.div`
  width: 16px;
  height: 16px;

  margin-right: 5px;
  background: url(${telIcon});
  background-repeat: no-repeat;
  background-size: contain;
`;
