const shortid = require('shortid');

export const toggleFavorite = beerItemId => {
  return {
    type: "beerList/toggleFavorite",
    payload: beerItemId,
  };
};

export const setStatusFilter = value => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};