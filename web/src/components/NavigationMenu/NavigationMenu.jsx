import { NavContainer, StyledLink } from "./NavigationMenu.styled";

const NavigationMenu = () => {
  return (
    <NavContainer>
      <StyledLink to="/" >Головна</StyledLink>
      <StyledLink to="/drinks">Напої</StyledLink>
      <StyledLink to="/beer">Пиво</StyledLink>
      <StyledLink to="/snacks">Снеки</StyledLink>
      <StyledLink to="/promotions">Акції</StyledLink>
      <StyledLink to="/contacts">Контакти</StyledLink>
    </NavContainer>
  );
};

export default NavigationMenu;
