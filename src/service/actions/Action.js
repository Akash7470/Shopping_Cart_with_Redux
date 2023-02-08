export const addToCartButton = (data) => {
  // console.log("action", data);
  return (dispatch) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: data,
    });
  };
};
