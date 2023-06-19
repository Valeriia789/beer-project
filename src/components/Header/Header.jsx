import {
  HeaderStyled,
  LogoContainer,
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
      <LogoContainer>
        <LogoIcon></LogoIcon>
        <LogoTitle> BEER MARKEt</LogoTitle>
      </LogoContainer>

      <AddressContainer>
        <address>
          <TitleStyled>Наша адреса:</TitleStyled>
          <p>м. Київ, </p>
          <p>вул. Степана Бандери 136</p>
        </address>

        <AddressStyled>
          <TitleStyled>Години роботи:</TitleStyled>
          <p>Пн-Нд з 10:00 до 22:00</p>

          <TelContainer>
            <TelIcon />
            <a href="tel:+0442221133">(044) 222-11-33</a>
          </TelContainer>
        </AddressStyled>
      </AddressContainer>
    </HeaderStyled>
  );
};

export default Header;
