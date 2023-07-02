import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme, light, dark } from "../theme";

import { SharedLayout } from "./SharedLayout/SharedLayout";

import { HomePage } from "../pages/HomePage/HomePage";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";
import { DrinksPage } from "../pages/DrinksPage/DrinksPage";
import { BeerPage } from "../pages/BeerPage/BeerPage";
import { PromotionsPage } from "../pages/PromotionsPage/PromotionsPage";
import { SnacksPage } from "../pages/SnacksPage/SnacksPage";

import { BodyContainer } from "./App.styled";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BodyContainer>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="drinks" element={<DrinksPage />} />
            <Route path="beer" element={<BeerPage />} />
            <Route path="snacks" element={<SnacksPage />} />
            <Route path="promotions" element={<PromotionsPage />} />
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
        </Routes>

        <div>Привітики від Андрія і Валерії:)</div>
      </BodyContainer>
    </ThemeProvider>
  );
};
