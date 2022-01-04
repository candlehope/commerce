export default (state = { allListings: [] }, action) => {
  switch (action.type) {
    case "FETCH_LISTINGS":
      return { ...state, allListings: action.payload };
    case "SEARCH_FILTER":
      return { ...state, searchFilter: action.payload };
    case "PRICE_FILTER":
      // price_filter takes a list of two integers
      return { ...state, priceFilter: action.payload };
    default:
      return state;
  }
};
