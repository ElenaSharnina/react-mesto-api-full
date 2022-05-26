import { apiConfig } from "./constants.js";

export class Api {
  constructor(apiConfig) {
    this._url = apiConfig.url;
    this._headers = apiConfig.headers;
  }

  _checkResponse(res) {
    console.log(res);
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getUserInfoApi() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  setUserInfoApi(username, userjob) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,

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
      headers: this._headers,

      body: JSON.stringify({
        name: cardname,
        link: cardlink
      })

    })
      .then(this._checkResponse);
  }

  like(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(this._checkResponse);
  }

  dislike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse);
  }


  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,

    })
      .then(this._checkResponse);
  }

  changeAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,

      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(this._checkResponse);
  }
}

const api = new Api(apiConfig);
export default api;