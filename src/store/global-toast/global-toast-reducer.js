import { RESET_GLOBAL_TOAST, SHOW_GLOBAL_TOAST } from "./global-toast-actions";

const initializeState = {
  show: false,
  type: undefined,
  msg: undefined,
};

// Pure function
export const globalToastReducer = (state = initializeState, action) => {
  switch (action.type) {
    case SHOW_GLOBAL_TOAST:
      return {
        ...action.payload,
        show: true,
      };
    case RESET_GLOBAL_TOAST:
      return {
        ...initializeState,
      };
    default:
      return state;
  }
};
