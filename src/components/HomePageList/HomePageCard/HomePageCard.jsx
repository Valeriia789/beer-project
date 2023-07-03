import { ListItem, StyledImage, StyledLink } from "./HomePageCard.styled";

const HomePageCard = ({ product }) => {
  return (
    <ListItem key={product.id}>
      <StyledImage src={product.imgUrl} alt="" />

      <StyledLink to={product.id}>{product.title}</StyledLink>
    </ListItem>
  );
};

export default HomePageCard;
