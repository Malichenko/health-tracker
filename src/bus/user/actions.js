// Core
import { replace } from "connected-react-router";
import { batch } from "react-redux";

// Api
import { api } from "../../api";

// Types
import { types } from "./types";

// Routes
import { book } from "../../navigation/book";

export const userActions = Object.freeze({
  // Sync
  startFetching: () => {
    return {
      type: types.USER_START_FETCHING,
    };
  },
  stopFetching: () => {
    return {
      type: types.USER_STOP_FETCHING,
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.USER_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    };
  },
  fill: (payload) => {
    return {
      type: types.USER_FILL,
      payload,
    };
  },
  // Async
  getProfile: () => async (dispatch) => {
    dispatch(userActions.startFetching());

    try {
      const response = await api.users.getProfile();

      if (response.status === 200) {
        const { data } = await response.json();

        dispatch(userActions.fill(data));
      } else {
        dispatch(replace(book.login.url));
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      dispatch(userActions.stopFetching());
    }
  },
  createProfile: (payload) => async (dispatch) => {
    dispatch(userActions.startFetching());

    try {
      const response = await api.users.createProfile(payload);
      if (response.status === 201) {
        dispatch(replace(book.login.url));
      } else {
        const error = {
          status: response.status,
        };
        dispatch(userActions.setFetchingError(error));
      }
    } catch (error) {
    } finally {
      dispatch(userActions.stopFetching());
    }
  },
  login: (payload) => async (dispatch) => {
    dispatch(userActions.startFetching());

    try {
      const response = await api.users.login(payload);

      if (response.status === 200) {
        dispatch(replace(book.home.url));
      } else {
        const error = {
          status: response.status,
        };
        dispatch(userActions.setFetchingError(error));
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      dispatch(userActions.stopFetching());
    }
  },
  updateProfile: (payload) => async (dispatch) => {
    dispatch(userActions.startFetching());

    try {
      const response = await api.users.updateProfile(payload);

      if (response.status === 200) {
        const { data } = await response.json();

        batch(() => {
          dispatch(userActions.fill(data));
          dispatch(replace(book.home.url));
        });
      } else {
        const error = {
          status: response.status,
        };

        batch(() => {
          dispatch(userActions.setFetchingError(error));
          dispatch(replace(book.login.url));
        });
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      dispatch(userActions.stopFetching());
    }
  },
  logout: () => async (dispatch) => {
    dispatch(userActions.startFetching());

    try {
      const response = await api.users.logout();

      if (response.status === 204) {
        batch(() => {
          dispatch(replace(book.login.url));
          dispatch(userActions.fill(null));
        });
      } else {
        const error = {
          status: response.status,
        };

        batch(() => {
          dispatch(userActions.setFetchingError(error));
          dispatch(replace(book.login.url));
        });
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      dispatch(userActions.stopFetching());
    }
  },
});
