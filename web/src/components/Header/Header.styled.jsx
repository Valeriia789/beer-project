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

  font-family: ${props => props.theme.fonts.main};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 12px;

  @media (min-width: 481px) {
    padding: 12px 24px;
  }

  @media (min-width: 769px) {
    padding: 16px 32px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoTitleContainer = styled.div``;

export const LogoIcon = styled.div`
  width: 32px;
  height: 32px;

  margin-right: 5px;

  background: url(${beerIcon});
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 481px) {
    width: 42px;
    height: 42px;
  }

  @media (min-width: 769px) {
    width: 48px;
    height: 48px;

    margin-right: 10px;
  }
`;

export const LogoTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;

  /* text-shadow: 1px 1px 2px grey, 0px 10px 10px rgba(233, 193, 71, 1); */
  text-shadow: 1px 1px 2px grey;

  @media (min-width: 481px) {
    font-size: 28px;
    font-weight: 700;
  }

  @media (min-width: 769px) {
    font-size: 34px;
    font-weight: 700;
  }
`;

export const AddressContainer = styled.address`
  display: flex;
  align-items: center;

  font-size: 8px;
  font-weight: 500;

  text-shadow: 1px 1px 2px rgba(233, 193, 71, 1);

  @media (min-width: 481px) {
    font-size: 12px;
    font-weight: 400;
  }

  @media (min-width: 769px) {
    font-size: 16px;
  }
`;

export const TitleStyled = styled.h2`
  font-size: 10px;
  font-weight: 700;

  text-decoration: underline;

  @media (min-width: 481px) {
    font-size: 14px;
  }

  @media (min-width: 769px) {
    font-size: 16px;
  }
`;

export const AddressStyled = styled.address`
  margin-left: 10px;

  @media (min-width: 481px) {
    margin-left: 20px;
  }

  @media (min-width: 769px) {
    margin-left: 40px;
  }
`;

export const TelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TelIcon = styled.div`
  width: 10px;
  height: 10px;

  margin-right: 5px;
  background: url(${telIcon});
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 481px) {
    width: 12px;
  height: 12px;
  }

  @media (min-width: 769px) {
    width: 14px;
  height: 14px;
  }
`;
