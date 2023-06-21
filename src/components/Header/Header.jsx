import {
  HeaderStyled,
  HeaderContainer,
  LogoContainer,
  LogoTitleContainer,
  LogoIcon,
  LogoTitle,
  AddressContainer,
  TitleStyled,
  AddressStyled,
  TelContainer,
  TelIcon,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
      <LogoContainer>
        <LogoIcon></LogoIcon>
        <LogoTitleContainer>
        <LogoTitle>BEEr</LogoTitle>
        <LogoTitle>MARKEt</LogoTitle>
        </LogoTitleContainer>
      </LogoContainer>

      <AddressContainer>
        <AddressStyled>
          <TitleStyled>Наша адреса:</TitleStyled>
          <p>м. Київ, </p>
          <p>вул. Степана Бандери</p>
        </AddressStyled>

        <AddressStyled>
          <TitleStyled>Години роботи:</TitleStyled>
          <p>Пн-Нд з 10:00 до 22:00</p>

          <TelContainer>
            <TelIcon />
            <a href="tel:+0442221133">(044) 222-11-33</a>
          </TelContainer>
        </AddressStyled>
      </AddressContainer>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
