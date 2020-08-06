// Config
import { root } from "./config";

export const api = Object.freeze({
  users: {
    getProfile: () => {
      return fetch(`${root}/profile`, {
        method: "GET",
        credentials: "include",
      });
    },
    createProfile: (payload) => {
      return fetch(`${root}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    },
    login: (payload) => {
      return fetch(`${root}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Base ${payload}`,
        },
        credentials: "include",
      });
    },
    updateProfile: (payload) => {
      return fetch(`${root}/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });
    },
    logout: () => {
      return fetch(`${root}/logout`, {
        method: "POST",
        credentials: "include",
      });
    },
  },
  tracker: {
    getScore: () => {
      return fetch(`${root}/reports`, {
        method: "GET",
        credentials: "include",
      });
    },
    getRecord: (payload) => {
      const params = new URLSearchParams({
        kind: payload,
      });

      return fetch(`${root}/records?${params}`, {
        method: "GET",
        credentials: "include",
      });
    },
    createRecord: ({ type, record }) => {
      const params = new URLSearchParams({
        kind: type,
      });

      return fetch(`${root}/records?${params}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          value: record,
        }),
      });
    },
    updateRecord: ({ type, record, hash }) => {
      const params = new URLSearchParams({
        kind: type,
      });

      return fetch(`${root}/records/${hash}/?${params}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          value: record,
        }),
      });
    },
    removeAllRecords: () => {
      return fetch(`${root}/reports/reset`, {
        method: "POST",
        credentials: "include",
      });
    },
  },
});
