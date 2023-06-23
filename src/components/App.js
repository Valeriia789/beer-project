import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import { HomePage } from "../pages/HomePage/HomePage";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";
import { DrinksPage } from "../pages/DrinksPage/DrinksPage";
import {PromotionsPage} from '../pages/PromotionsPage/PromotionsPage'
import {SnacksPage} from '../pages/SnacksPage/SnacksPage'

import NavigationMenu from "./NavigationMenu/NavigationMenu";
import { BodyContainer } from "./App.styled";

export const App = () => {
  return (
    <BodyContainer>
      <Header></Header>
      <NavigationMenu></NavigationMenu>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/snacks" element={<SnacksPage/>} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>

    </BodyContainer>
  );
};
