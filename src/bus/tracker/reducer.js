// Types
import { types } from "./types";

// Other
const initialState = Object.freeze({
  isLoading: false,
  error: false,
  score: null,
  record: {
    breakfast: null,
    lunch: null,
    dinner: null,
    steps: null,
    fruits: null,
    vegetables: null,
    junk: null,
    water: null,
    sleep: null,
    coffee: null,
  },
});

export const trackerReducer = (state = initialState, { type, payload }) => {
  
  switch (type) {
    case types.TRACKER_START_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case types.TRACKER_STOP_FETCHING:
      return {
        ...state,
        isLoading: false,
      };
    case types.TRACKER_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
        profile: null,
      };
    case types.TRACKER_FILL_RECORD:
      return {
        ...state,
        error: null,
        record: {
          ...state.record,
          [payload.type]: payload.value,
        },
      };
    case types.TRACKER_FILL_SCORE:
      return {
        ...state,
        error: null,
        score: payload,
      };
    case types.TRACKER_RESET:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
