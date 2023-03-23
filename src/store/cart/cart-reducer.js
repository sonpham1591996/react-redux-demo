import { ADD_PRODUCT_TO_CART } from "./cart-actions";

const initializeState = {
  selectedProducts: [],
};

// Pure function
export const cartReducer = (state = initializeState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      if (
        state.selectedProducts.filter((sp) => sp.id === action.payload)
          .length === 0
      ) {
        return {
          selectedProducts: [
            ...state.selectedProducts,
            {
              id: action.payload,
              quantity: 1,
            },
          ],
        };
      }
      const newSelectedProducts = [];
      for (let sp of state.selectedProducts) {
        if (sp.id === action.payload) {
          sp.quantity += 1;
        }
        newSelectedProducts.push(sp);
      }
      return {
        selectedProducts: newSelectedProducts,
      };
    default:
      return state;
  }
};
