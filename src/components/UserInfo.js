export class UserInfo {
    constructor({ userName, userJob }) {
        this._profileName = document.querySelector(userName);
        this._profileJob = document.querySelector(userJob);
    };

    getUserInfo() {
        return {
            name: this._profileName.textContent,
            job: this._profileJob.textContent,
        };
    };
    
    setUserInfo({ edit_input_name, edit_input_job }) {
        this._profileName.textContent = edit_input_name;
        this._profileJob.textContent = edit_input_job;
      };
};