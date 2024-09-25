export const reMenu = (state = false, action) => {
  switch (action.type) {
    case "MENU":
      return !state;
    default:
      return state;
  }
};

export const acMenu = () => ({ type: "MENU" });
