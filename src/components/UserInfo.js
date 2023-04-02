export class UserInfo {
    constructor({ userName, userJob }) {
        this._profileName = document.querySelector(userName);
        this._profileJob = document.querySelector(userJob);
        this._avatar = document.querySelector(userAvatar);
        this.getUserID = this.getUserID.bind(this);
    };

    getUserInfo() {
        return {
            name: this._profileName.textContent,
            job: this._profileJob.textContent,
            avatar: this._avatar.src,
        };
    };
    
    setUserInfo({ name, job, avatar }) {
        this._profileName.textContent = name;
        this._profileJob.textContent = job;
    };
    setUserAvatar(url) {
        this._avatar.src = url.avatar;
    };

    setUserId(Id) {
        this._userID = Id;
    };
    getUserID() {
        return this._userID;
    }
};