import {
  ListContainer,
  CardsList,
  ListItem,
  StyledImage,
  StyledTitle,
} from "./HomePageCardsList.styled";

const HomePageCardsList = ({ advertisingProducts }) => {
  return (
    <ListContainer>
      <CardsList>
        {advertisingProducts.map((advertisingProduct) => (
          <ListItem>
            <StyledImage src={advertisingProduct.imgUrl} alt="" />

            <StyledTitle>{advertisingProduct.title}</StyledTitle>
          </ListItem>
        ))}
      </CardsList>
    </ListContainer>
  );
};

export default HomePageCardsList;
