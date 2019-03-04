// import axios from "axios";

const initialState = {
  name: "",
  password: "",
  loading: false,
  userId: 0
};

const HANDLE_REGISTER = "HANDLE_REGISTER";
const HANDLE_REGISTER_PENDING = "HANDLE_REGISTER_PENDING";
const HANDLE_REGISTER_FULFILLED = "HANDLE_REGISTER_FULFILLED";

export function handleRegister(username, password) {
  return {
    type: HANDLE_REGISTER,
    payload: { username, password }
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_REGISTER:
      return Object.assign({}, state, {
        username: action.payload.username,
        password: action.payload.password
      });
    case HANDLE_REGISTER_PENDING:
      return { ...state, loading: true };
    case HANDLE_REGISTER_FULFILLED:
      return { ...state, loading: false };

    default:
      return state;
  }
}
