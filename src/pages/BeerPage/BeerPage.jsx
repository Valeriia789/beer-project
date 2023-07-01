import { beerData } from "../../data/products/beer/beerData";
import ProductsList from "../../components/ProductsList/ProductsList";

export const BeerPage = () => {
  return (

      <ProductsList productsList={beerData}></ProductsList>

  );
};
