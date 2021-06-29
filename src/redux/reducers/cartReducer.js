const initialState = {
  items: [],
  total: 0,
  qty: 0,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_CART":
      return {
        ...state,
        items: action.items,
        total: action.items.reduce(
          (accumulator, currentValue) => accumulator + currentValue.totalPrice
        ),
      };
    case "":
      return {};
    case "":
      return {};
    default:
      return state;
  }
}
export default cartReducer;
