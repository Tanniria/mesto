class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options._headers;
    }
    _checkResponse(res) {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    };

    getInitialCards() {
        return fetch(`${this._url}/cards `, {
            headers: this._headers,
        })
        .then((res) => this._checkResponse(res));
    };

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
        })
        .then((res) => this._checkResponse(res))
    };
    editUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.job,
            }),
        })
        .then((res) => this._checkResponse(res));
    };
    addCard(data) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            }),
        })
        .then((res) => this._checkResponse(res));
    };
    deleteCard(cardId) {
        return fetch(`${this._baseURL}cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then((res) => this._checkResponse(res));
    };
    likeCard(cardId) {
        return fetch(`${this._baseURL}cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers,
        })
        .then((res) => this._checkResponse(res));
    };
    dislike(cardId) {
        return fetch(`${this._baseURL}cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then((res) => this._checkResponse(res));
    };
    editAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            }),
        })
        .then((res) => this._checkResponse(res));
    };
}