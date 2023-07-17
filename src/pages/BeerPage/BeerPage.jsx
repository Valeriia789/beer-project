import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBeerList } from "../../redux/beer/operations";
import { getError, getIsLoading } from "../../redux/beer/selectors";

import StatusFilter from "../../components/StatusFilter/StatusFilter";
import ProductsList from "../../components/ProductsList/ProductsList";

import { PageContainer } from "../commonStyles/PageContainer.styled";

const BeerPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchBeerList());
  }, [dispatch]);

  return (
    <PageContainer>
      <StatusFilter />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <ProductsList />
    </PageContainer>
  );
};

export default BeerPage;
