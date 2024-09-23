export const reCount = (state = 1, action) => {
  switch (action.type) {
    case "INC":
      return state++;

    default:
      return state;
  }
};

export const acClear = () => ({ type: "INC" });
