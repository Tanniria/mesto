export class UserInfo {
    constructor({ profileName, profileJob, profileAvatar }) {
        this._avatar = document.querySelector(profileAvatar);
        this._profileName = document.querySelector(profileName);
        this._profileJob = document.querySelector(profileJob);
    };
    
    getUserInfo() {
        return {
            name: this._profileName.textContent,
            job: this._profileJob.textContent,
            avatar: this._avatar.src
        };
    };
    
    setUserInfo({ name, about}) {
        this._profileName.textContent = name;
        this._profileJob.textContent = about;
    };

    setUserAvatar(url) {
        this._avatar.src = url.avatar;
    }

    setUserId(id) {
        this._myId = id;
    };
}; 