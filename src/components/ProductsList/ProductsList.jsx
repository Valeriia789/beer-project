import ProductCard from "./ProductCard/ProductCard"
import { StyledList } from "./ProductsList.styled"

const ProductsList = ({productsList}) => {
  return (

        <StyledList>
          {productsList.map((product) => <ProductCard product={product}/>)}
        </StyledList>

  )
}

export default ProductsList