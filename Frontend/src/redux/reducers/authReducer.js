const initialState = {};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "user_register":
      return {
        ...state,
        auth: [action.payload, ...state.auth],
      };

    default: {
      return state;
    }
  }
};

export default auth;
