import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import { SharedLayout } from "./SharedLayout/SharedLayout";

import { HomePage } from "../pages/HomePage/HomePage";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";
import { DrinksPage } from "../pages/DrinksPage/DrinksPage";
import { BeerPage } from "../pages/BeerPage/BeerPage";
import { PromotionsPage } from "../pages/PromotionsPage/PromotionsPage";
import { SnacksPage } from "../pages/SnacksPage/SnacksPage";

import { ThemeProvider } from "styled-components";
import { theme, light, dark } from "../theme";
import { BodyContainer } from "./App.styled";

// const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
// const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
// const DrinksPage = lazy(() => import("../pages/DrinksPage/DrinksPage"));
// const BeerPage = lazy(() => import("../pages/BeerPage/BeerPage"));
// const PromotionsPage = lazy(() => import("../pages/PromotionsPage/PromotionsPage"));
// const SnacksPage = lazy(() => import("../pages/SnacksPage/SnacksPage"));

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
