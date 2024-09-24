export const reCount = (state = 3, action) => {
  switch (action.type) {
    case "INC":
      state = state + 1;
      return state;

    default:
      return state;
  }
};

export const acCount = (payload) => ({ type: "INC", payload });
