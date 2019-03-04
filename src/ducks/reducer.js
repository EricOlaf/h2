import axios from "axios";

const initialState = {
  name: "",
  password: "",
  loading: false,
  userID: 0
};

const HANDLE_REGISTER = "HANDLE_REGISTER";
// const HANDLE_REGISTER_PENDING = "HANDLE_REGISTER_PENDING";
// const HANDLE_REGISTER_FULFILLED = "HANDLE_REGISTER_FULFILLED";

export function handleRegister(username, password) {
  return {
    type: HANDLE_REGISTER,
    payload: axios.post("/api/register", { username, password })
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_REGISTER:
      return Object.assign({}, state, {
        username: action.payload.username,
        password: action.payload.password,
        userID: action.payload.id
      });
    default:
      return state;
  }
}
