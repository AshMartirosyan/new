import { PASSWORD_CHANGED as PASSWORD_CHANGED } from "../actions";
import { SET_USER_DATA } from "../actions/auth";

const initialState = {
  userData: {
    id: null,
    createdAt: "",
    updatedAt: "",
    clubId: null,
    planKey: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    status: "",
  },
  isPasswordChanged: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        userData: {
          id: action.data.id,
          createdAt: action.data.createdAt,
          updatedAt: action.data.createdAt,
          clubId: action.data.clubId,
          planKey: action.data.planKey,
          firstName: action.data.firstName,
          lastName: action.data.lastName,
          email: action.data.email,
          role: action.data.role,
          status: action.data.state,
        },
      };
    }

    case PASSWORD_CHANGED: {
      return { ...state, isPasswordChanged: action.payload.isChanged };
    }
    default: {
      return state;
    }
  }
};

export default UserReducer;
