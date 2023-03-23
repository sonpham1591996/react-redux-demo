export const SHOW_GLOBAL_TOAST = "SHOW_GLOBAL_TOAST";
export const RESET_GLOBAL_TOAST = "RESET_GLOBAL_TOAST";

export const showGlobalToastAction = (type, msg) => {
  return {
    type: SHOW_GLOBAL_TOAST,
    payload: {
      type,
      msg,
    },
  };
};

export const resetGlobalToastAction = () => {
  return {
    type: RESET_GLOBAL_TOAST,
  };
};

export const getGlobalToastData = (state) => {
  return state.globalToastReducer;
};
