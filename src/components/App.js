import Header from "./Header/Header";
import { HomePage } from "../pages/HomePage/HomePage";


import { BodyContainer } from "./App.styled";

export const App = () => {
  return (
    <BodyContainer>
      <Header></Header>
      <HomePage ></HomePage>
    </BodyContainer>
  );
};
