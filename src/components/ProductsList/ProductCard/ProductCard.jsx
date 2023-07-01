import React, { useState } from "react";
import {
  CardContainer,
  ListItem,
  ProductImage,
  ProductInfoContainer,
  ProductTitle,
  QuantityContainer,
  PriceContainer,
  InitialPriceStyled,
} from "./ProductCard.styled";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + product.quantity);
    setPrice((price) => price + product.price);
  };

  const decreaseQuantity = () => {
    if (quantity <= 0) {
      return;
    }

    setQuantity((quantity) => quantity - product.quantity);
    setPrice((price) => price - product.price);
  };

  return (
    <ListItem>
      <ProductImage src={product.imgUrl} alt="" />
      <ProductInfoContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <QuantityContainer>
          <button onClick={decreaseQuantity}>-</button>
          <p>{quantity} л.</p>
          <button onClick={increaseQuantity}>+</button>
        </QuantityContainer>

        <PriceContainer>
          <InitialPriceStyled>
            (Ціна: {product.price}грн. /{product.quantity} л.)
          </InitialPriceStyled>

          <p>Вартість: {price} грн.</p>
        </PriceContainer>
      </ProductInfoContainer>
    </ListItem>
  );
};

export default ProductCard;
