import { beerData } from "../../data/products/beer/beerData";
import ProductsList from "../../components/ProductsList/ProductsList";

import { PageContainer } from "../commonStyles/PageContainer.styled";

const BeerPage = () => {
  return (
    <PageContainer>
      <ProductsList productsList={beerData}></ProductsList>
    </PageContainer>
  );
};

export default BeerPage