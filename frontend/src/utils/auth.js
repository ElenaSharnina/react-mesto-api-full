export const BASE_URL = "https://api.mesto.students.nomoreparties.sbs";

function checkResponse(res) {
  if (res.status === 200 || 201) {
    return res.json();
  }
  return Promise.reject(`${res.status}`);
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err)
    })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        console.log(data.token);
        localStorage.setItem("token", data.token);
        return data.token;
      }
    })
    .catch((err) => console.log(err));
};
export function checkToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())

    .catch((err) => console.log(err));
}
