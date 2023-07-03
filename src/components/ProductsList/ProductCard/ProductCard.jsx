import React, { useState } from "react";
import {
  ListItem,
  ProductImage,
  ProductInfoContainer,
  ProductTitle,
  CounterContainer,
  PriceContainer,
  InitialPriceStyled,
  CounterButton,
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
    <ListItem key={product.id}>
      <ProductImage src={product.imgUrl} alt="" />
      <ProductInfoContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <CounterContainer>
          <CounterButton onClick={decreaseQuantity}>-</CounterButton>
          <p>{quantity} л.</p>
          <CounterButton onClick={increaseQuantity}>+</CounterButton>
        </CounterContainer>

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
