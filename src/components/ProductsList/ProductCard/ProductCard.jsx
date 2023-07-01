import { CardContainer, ListItem, ProductImage, ProductTitle, ProductPrice } from "./ProductCard.styled";

const ProductCard = ({ product }) => {
  return (
    <ListItem>
      <ProductImage src={product.imgUrl} alt="" />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>
        {product.price}грн. за {product.per}
      </ProductPrice>
    </ListItem>
  );
};

export default ProductCard;
