import HomePageCard from "./HomePageCard/HomePageCard";

import { CardsList } from "./HomePageList.styled";

const HomePageCardsList = ({ advertisingProducts }) => {
  return (
    <CardsList>
      {advertisingProducts.map((advertisingProduct) => (
        <HomePageCard product={advertisingProduct} />
      ))}
    </CardsList>
  );
};

export default HomePageCardsList;
