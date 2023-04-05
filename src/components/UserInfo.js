export class UserInfo {
    constructor({ userName, userJob, userAvatar }) {
        this._avatar = document.querySelector(userAvatar);
        this._profileName = document.querySelector(userName);
        this._profileJob = document.querySelector(userJob);
        // this.getUserID = this.getUserID.bind(this);
    };
    
    getUserInfo() {
        return {
            name: this._profileName.textContent,
            job: this._profileJob.textContent,
            avatar: this._avatar.src,
        };
    };
    
    setUserInfo({ name, job}) {
        this._profileName.textContent = name;
        this._profileJob.textContent = job;
        
    };
    setUserAvatar(url) {
        this._avatar.src = url.avatar;
    }
    setUserId(id) {
        this._myId = id;
    };

    // getUserID() {
    //     return this._myId;
    // }
};