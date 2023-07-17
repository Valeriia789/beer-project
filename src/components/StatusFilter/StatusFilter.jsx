import { useSelector, useDispatch } from "react-redux";

import { statusFilters } from "../../redux/beer/constants";
import { getStatusFilter } from "../../redux/beer/selectors";
import { setStatusFilter } from "../../redux/beer/filtersSlice";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div>
      <button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        Все
      </button>
      <button
        selected={filter === statusFilters.favorite}
        onClick={() => handleFilterChange(statusFilters.favorite)}
      >
        Улюблене
      </button>
    </div>
  );
};

export default StatusFilter;
