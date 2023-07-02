import { advertisingProducts } from "../../data/advertisingProducts";
import HomePageList from "../../components/HomePageList/HomePageList";

import { PageContainer } from "../commonStyles/PageContainer.styled";

export const HomePage = () => {
  return (
    <PageContainer>
      <HomePageList
        advertisingProducts={advertisingProducts}
      ></HomePageList>
    </PageContainer>
  );
};
