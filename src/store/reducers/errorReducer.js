import { ERROR } from "../actions";

const initialState = {
  error: {
    statusCode: null,
    message: "",
    error: "",
  },
};

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR: {
      return {
        error: {
          statusCode: action.error.statusCode,
          message: action.error.message,
          error: action.error.error,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default ErrorReducer;
