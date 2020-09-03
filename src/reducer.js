export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_POST: "SET_POST",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.user };
    case actionTypes.SET_POST:
      return { ...state, user: action.post };
    default:
      return state;
  }
};

export default reducer;
