import { REPORT_ERRORS, FETCH_POSTS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  items: [],
  errors: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
        errors: [],
      };
    case REPORT_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: [],
      };
    default:
      return state;
  }
}
