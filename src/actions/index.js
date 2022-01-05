import listings from "../api/listings";

export const signIn = (userinfo) => {
  return {
    type: "SIGN_IN",
    payload: userinfo,
  };
};

export const searchFilter = (userInput) => {
  return {
    type: "SEARCH_FILTER",
    payload: userInput,
  };
};

export const priceFilter = (parameters) => {
  return {
    type: "PRICE_FILTER",
    payload: parameters,
  };
};

export const mechanicsFilter = (description) => {
  return {
    type: "MECHANICS_FILTER",
    payload: description,
  };
};

export const postListing = (listing) => async () => {
  let response = await listings.post("/listings", {
    user: listing.user,
    name: listing.name,
    title: listing.title,
    price: listing.price,
    condition: listing.condition,
    category: listing.selectedMechanics,
    min_player_count: listing.min,
    max_player_count: listing.max,
    image: listing.image,
  });
  // return {
  //   // type: "CREATE_POST",
  //   // payload: listing,
  // };
};

export const fetchListings = () => async (dispatch) => {
  const response = await listings.get("/listings");

  dispatch({ type: "FETCH_LISTINGS", payload: response.data });
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

// export const createListing = (formValues) => async (dispatch, getState) => {
//   const { userId } = getState().auth;
//   const response = await listings.post("/streams", { ...formValues, userId });
//   dispatch({ type: "CREATE_LISTING", payload: response.data });
// };

// export const fetchListings = () => async (dispatch) => {
//   const response = await listings.get("/listings");

//   dispatch({ type: "FETCH_LISTINGS", payload: response.data });
// };

// export const fetchListing = (id) => async (dispatch) => {
//   const response = await listings.get(`/listings/${id}`);

//   dispatch({ type: "FETCH_LISTING", payload: response.data });
// };

// export const editListing = (id, formValues) => async (dispatch) => {
//   const response = await listings.patch(`/listings/${id}`, formValues);

//   dispatch({ type: "EDIT_LISTINGS", payload: response.data });
//   history.push("/");
// };

// export const deleteListing = (id) => async (dispatch) => {
//   await listings.delete(`/listings/${id}`);

//   dispatch({ type: "DELETE_LISTING", payload: id });
//   history.push("/");
// };
