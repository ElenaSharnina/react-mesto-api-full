import { apiConfig } from "./constants.js";

export class Api {
  constructor(apiConfig) {
    this._url = apiConfig.url;
  }

  _checkResponse(res) {
    console.log(res);
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getUserInfoApi(token) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
    })
      .then(this._checkResponse);
  }

  getInitialCards(token) {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
    })
      .then(this._checkResponse);
  }

  setUserInfoApi(username, userjob) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('token')}`
      },

      body: JSON.stringify({
        name: username,
        about: userjob
      })
    })
      .then(this._checkResponse);
  }

  addNewCard(cardname, cardlink) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('token')}`
      },

      body: JSON.stringify({
        name: cardname,
        link: cardlink
      })

    })
      .then(this._checkResponse);
  }

  like(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
    })
      .then(this._checkResponse);
  }

  dislike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
    })
      .then(this._checkResponse);
  }
  s

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('token')}`
      },

    })
      .then(this._checkResponse);
  }

  changeAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('token')}`
      },

      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(this._checkResponse);
  }
}

const api = new Api(apiConfig);
export default api;