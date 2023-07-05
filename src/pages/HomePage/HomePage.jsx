import { advertisingProducts } from "../../data/advertisingProducts";
import HomePageList from "../../components/HomePageList/HomePageList";

import { PageContainer } from "../commonStyles/PageContainer.styled";

const HomePage = () => {
  return (
    <PageContainer>
      <HomePageList
        advertisingProducts={advertisingProducts}
      ></HomePageList>
    </PageContainer>
  );
};

export default HomePage