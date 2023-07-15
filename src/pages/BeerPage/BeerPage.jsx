import StatusFilter from "../../components/StatusFilter/StatusFilter";
import ProductsList from "../../components/ProductsList/ProductsList";

import { PageContainer } from "../commonStyles/PageContainer.styled";

const BeerPage = () => {
  return (
    <PageContainer>
      <StatusFilter/>
      <ProductsList></ProductsList>
    </PageContainer>
  );
};

export default BeerPage