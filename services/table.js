import {SERVER_URL} from '../config';

export function getTablesByRoom(room_id) {
  let url = `${SERVER_URL}/get/tablesByRoom/${room_id}`;
  let settings = {
    method: 'GET',
  };
  return fetch(url, settings)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((responseJSON) => {
      return responseJSON;
    });
}

export function createTable() {
  let url = `${SERVER_URL}/create/table`;
  let settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(url, settings)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(response.statusText);
    })
    .then((responseJSON) => {
      return responseJSON;
    });
}
