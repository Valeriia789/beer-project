import { beerData } from "../../data/products/beer/beerData";
import ProductsList from "../../components/ProductsList/ProductsList";

export const BeerPage = () => {
  return (
    <>
      <h3>Пиво </h3>
      <ProductsList productsList={beerData}></ProductsList>
    </>
  );
};
