import { useSelector } from "react-redux";

import { getBeerList, getStatusFilter } from "../../redux/beer/selectors";
import { statusFilters } from "../../redux/beer/constants";

import ProductCard from "./ProductCard/ProductCard";
import { StyledList, ListItem } from "./ProductsList.styled";

const getVisibleBeerItems = (beerList, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.favorite:
      return beerList.filter((beerItem) => beerItem.favorite);
    default:
      return beerList;
  }
};

const ProductsList = () => {
  const beerList = useSelector(getBeerList);
  const statusFilter = useSelector(getStatusFilter);
  const visibleBeerItems = getVisibleBeerItems(beerList, statusFilter);

  return (
    <StyledList>
      {visibleBeerItems.map((beerItem) => (
        <ListItem key={beerItem.id}>
          <ProductCard key={beerItem.id} product={beerItem} />
        </ListItem>
      ))}
    </StyledList>
  );
};

export default ProductsList;
