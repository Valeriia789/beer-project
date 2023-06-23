import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";

import {NavContainer} from './NavigationMenu.styled'

const NavigationMenu = () => {
  return (
    <NavContainer>

        <NavLink to="/" end>
          Головна
        </NavLink>

        <NavLink to="/drinks">
          Напої
        </NavLink>

        <NavLink to="/snacks">
          Снеки
        </NavLink>

        <NavLink to="/promotions">
          Акції
        </NavLink>

        <NavLink to="/contacts">
          Контакти
        </NavLink>


      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/* <Outlet /> */}
      {/* </Suspense> */}
    </NavContainer>
  );
};

export default NavigationMenu;
