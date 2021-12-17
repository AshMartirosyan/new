import { USER_LOGGED } from "../actions/auth";

const initialState = {
  isLogged: false,
  error: {
    statusCode: null,
    message: "",
    error: "",
  },
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED: {
      return { ...state, isLogged: action.isLogged };
    }
    default: {
      return state;
    }
  }
};

export default LoginReducer;
