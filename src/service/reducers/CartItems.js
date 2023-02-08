const cartItems = (state = [], action) => {
  // console.log("reducer", action);

  switch (action.type) {
    case "ADD_TO_CART":
      // console.log("Chal rha h", action.payload.element);
      return [...state, action.payload.element];
    default:
      return state;
  }
};
export default cartItems;
