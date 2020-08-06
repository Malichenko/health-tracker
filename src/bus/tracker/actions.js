// Core
import { batch } from "react-redux";
import { replace } from "connected-react-router";

// Api
import { api } from "../../api";

// Types
import { types } from "./types";

// Routes
import { book } from "../../navigation/book";

export const trackerActions = Object.freeze({
  // Sync
  startFetching: () => {
    return {
      type: types.TRACKER_START_FETCHING,
    };
  },
  stopFetching: () => {
    return {
      type: types.TRACKER_STOP_FETCHING,
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.TRACKER_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    };
  },
  fillRecord: (payload) => {
    return {
      type: types.TRACKER_FILL_RECORD,
      error: false,
      payload,
    };
  },
  fillScore: (payload) => {
    return {
      type: types.TRACKER_FILL_SCORE,
      error: false,
      payload: payload / 2,
    };
  },
  reset: () => {
    return {
      type: types.TRACKER_RESET,
    };
  },
  // Async
  getScore: () => async (dispatch) => {
    dispatch(trackerActions.startFetching());

    const response = await api.tracker.getScore();

    if (response.status === 200) {
      const { data } = await response.json();

      dispatch(trackerActions.fillScore(data));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(trackerActions.setFetchingError(error));
    }

    dispatch(trackerActions.stopFetching);
  },
  getRecord: (payload) => async (dispatch) => {
    dispatch(trackerActions.startFetching());

    try {
      const response = await api.tracker.getRecord(payload);

      if (response.status === 200) {
        const { data, hash } = await response.json();

        if (hash !== 0) {
          dispatch(
            trackerActions.fillRecord({
              type: payload,
              value: {
                hash,
                value: data,
              },
            }),
          );
        }
      } else {
        const error = {
          status: response.status,
        };

        batch(() => {
          dispatch(trackerActions.setFetchingError(error));
          dispatch(replace(book.login.url));
        });
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      dispatch(trackerActions.stopFetching());
    }
  },
  createRecord: (payload) => async (dispatch) => {
    dispatch(trackerActions.startFetching());

    try {
      const response = await api.tracker.createRecord(payload);

      if (response.status === 201) {
        const { data, hash } = await response.json();

        batch(() => {
          dispatch(
            trackerActions.fillRecord({
              type: payload,
              value: {
                hash,
                value: data,
              },
            }),
          );
          dispatch(trackerActions.getScore());
        });
      } else {
        const error = {
          status: response.status,
        };

        batch(() => {
          dispatch(trackerActions.setFetchingError(error));
          dispatch(replace(book.login.url));
        });
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      dispatch(trackerActions.stopFetching());
    }
  },
  updateRecord: (payload) => async (dispatch) => {
    dispatch(trackerActions.startFetching());

    try {
      const response = await api.tracker.updateRecord(payload);

      if (response.status === 204) {
        batch(() => {
          dispatch(
            trackerActions.fillRecord({
              type: payload.type,
              value: {
                hash: payload.hash,
                value: payload.record,
              },
            }),
          );
          dispatch(trackerActions.getScore());
        });
      } else {
        const error = {
          status: response.status,
        };

        batch(() => {
          dispatch(trackerActions.setFetchingError(error));
          dispatch(replace(book.login.url));
        });
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      dispatch(trackerActions.stopFetching());
    }
  },
  removeAllRecords: () => async (dispatch) => {
    dispatch(trackerActions.startFetching());

    try {
      const response = await api.tracker.removeAllRecords();

      if (response.status === 204) {
        batch(() => {
          dispatch(trackerActions.fillScore());
          dispatch(trackerActions.reset());
          dispatch(replace(book.home.url));
        });
      } else {
        const error = {
          status: response.status,
        };

        dispatch(trackerActions.setFetchingError(error));
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      dispatch(trackerActions.stopFetching());
    }
  },
});
