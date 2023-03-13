export class UserInfo {
    constructor({name, job}) {
        this._profileName = document.querySelector(name);
        this._profileJob = document.querySelector(job);
    };

    getUserInfo() {
        return {
            userName: this._profileName.textContent,
            userJob: this._profileJob.textContent,
        };
    };
    
    setUserInfo({edit_input_name, edit_input_job}) {
        this._profileName.textContent = edit_input_name;
        this._profileJob.textContent = edit_input_job;
    };
};