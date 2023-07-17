import React, { useState } from "react";
// Імпортуємо хук
import { useDispatch } from "react-redux";

import { toggleFavorite } from "../../../redux/beer/operations";

import {
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

  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleFavorite(product));

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
    setPrice((price) => price + product.price);
  };

  const decreaseQuantity = () => {
    if (quantity <= 0) {
      return;
    }

    setQuantity((quantity) => quantity - 1);
    setPrice((price) => price - product.price);
  };

  return (
    <>
      <ProductImage src={product.imgUrl} alt="" />
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={product.favorite}
      />
      <ProductInfoContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <CounterContainer>
          <CounterButton onClick={decreaseQuantity}>-</CounterButton>
          <p>{quantity} л.</p>
          <CounterButton onClick={increaseQuantity}>+</CounterButton>
        </CounterContainer>

        <PriceContainer>
          <InitialPriceStyled>
            (Ціна: {product.price}грн. / 1 л.)
          </InitialPriceStyled>

          <p>Вартість: {price} грн.</p>
        </PriceContainer>
      </ProductInfoContainer>
    </>
  );
};

export default ProductCard;
