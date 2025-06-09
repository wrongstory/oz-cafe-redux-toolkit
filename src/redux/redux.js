export const addToCart = (options, quantity, id) => {
  return {
    type: "addToCart",
    payload: { options, quantity, id },
  };
};

export const removeFromCart = (id) => {
  return {
    type: "removeFromCart",
    payload: { id },
  };
};

const cartReducer = () => {};

const menuReducer = () => {};

const rootReducer = () => {};
