import HomePageCardsList from "../../components/HomePageCardsList/HomePageCardsList";
import { advertisingProducts } from "../../data/advertisingProducts";

export const HomePage = () => {
  return (
    <>
    <HomePageCardsList advertisingProducts={advertisingProducts}></HomePageCardsList>
    </>
  )
}