export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";

export const addProductToCart = (productId) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: productId,
  };
};

export const getProductsFromCart = (state) => {
  return state.cartReducer.selectedProducts;
};
