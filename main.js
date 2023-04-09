(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var n,r;return n=t,(r=[{key:"_showInputError",value:function(t){this._errorElement=this._formElement.querySelector("#".concat(t.id,"-error")),t.classList.add(this._inputErrorClass),this._errorElement.classList.add(this._errorClass),this._errorElement.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){this._errorElement=this._formElement.querySelector("#".concat(t.id,"-error")),t.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent=""}},{key:"_hasInvalidInput",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_toggleButtonState",value:function(){this._isValidForm=this._formElement.checkValidity(),this._buttonElement.classList.toggle(this._inactiveButtonClass,!this._isValidForm),this._buttonElement.disabled=!this._isValidForm}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._formElement.addEventListener("reset",(function(){setTimeout((function(){t._toggleButtonState()}),0)})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._toggleButtonState(),t._hasInvalidInput(e)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e){var n=e.data,r=e.templateSelector,o=e.handleCardClick,i=e.myId,u=e.handleDeleteCard,a=e.handleLikeCard,c=e.handleDeleteLikeCard;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._card=n,this._name=n.name,this._link=n.link,this._templateSelector=r,this._handleCardClick=o,this._userId=n._id,this._ownerId=n.owner._id,this._myId=i,this._likes=n.likes,this._handleDeleteCard=u,this._handleLikeCard=a,this._handleDeleteLikeCard=c}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".feed__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._buttonLike=this._card.querySelector(".feed__button-like"),this._buttonDelete=this._card.querySelector(".feed__button-delete"),this._likesCounter=this._card.querySelector(".feed__like-counter"),this._cardImg=this._card.querySelector(".feed__img"),this._cardTitle=this._card.querySelector(".feed__title"),this._likesCounter.textContent=this._likes.length,this._cardImg.alt=this._name,this._cardImg.src=this._link,this._cardTitle.textContent=this._name,this._likeCard(),this._checkDeleteCard(),this._setEventListeners(),this._card}},{key:"deleteCard",value:function(){this._card.remove(),this._card=null}},{key:"_checkDeleteCard",value:function(){this._ownerId!==this._myId&&this._buttonDelete.remove()}},{key:"isLiked",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._myId}))}},{key:"_likeCard",value:function(){this.isLiked()&&this._buttonLike.classList.add("feed__button-like_active")}},{key:"getlikesData",value:function(t){this._likes=t.likes}},{key:"handleLikeCard",value:function(){this._likesCounter.textContent=this._likes.length,this.isLiked()?this._buttonLike.classList.add("feed__button-like_active"):this._buttonLike.classList.remove("feed__button-like_active")}},{key:"_setEventListeners",value:function(){var t=this;this._cardImg.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)})),this._buttonDelete.addEventListener("click",(function(){t._handleDeleteCard({userId:t._userId})})),this._buttonLike.addEventListener("click",(function(){t._handleLikeCard({userId:t._userId})}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._buttonsClosePopup=this._popup.querySelector(".popup__button-close"),this._closeByEscape=this._closeByEscape.bind(this),this._buttonSubmit=this._popup.querySelector(".popup__button-save"),this._popupForm=this._popup.querySelector(".popup__form")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closeByEscape)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closeByEscape)}},{key:"_closeByEscape",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._buttonsClosePopup.addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&t.close()}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},f.apply(this,arguments)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImg=e._popup.querySelector(".popup__img-zoom"),e._cardTitle=e._popup.querySelector(".popup__img-title"),e}return e=u,(n=[{key:"open",value:function(t,e){f(y(u.prototype),"open",this).call(this),this._popupImg.src=e,this._popupImg.alt=t,this._cardTitle.textContent=t}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(o){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._handleFormSubmit=r,e._popupForm=e._popup.querySelector(".popup__form"),e._buttonSave=e._popupForm.querySelector(".popup__button-save"),e._buttonSaveText=e._buttonSave.textContent,e._inputList=Array.from(e._popupForm.querySelectorAll(".popup__input")),e}return e=u,n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"loadingData",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._buttonSave.textContent=t?e:this._buttonSaveText}},{key:"setEventListeners",value:function(){var t=this;_(b(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"close",value:function(){_(b(u.prototype),"close",this).call(this),this._popupForm.reset()}}],n&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e=t.popupSelector;return t.handleFormSubmit,function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return e=u,(n=[{key:"open",value:function(t){var e=t.userId,n=t.cards;w(C(u.prototype),"open",this).call(this),this._userId=e,this._cards=n}},{key:"setSubmitForm",value:function(t){this._handleSubmit=t}},{key:"setEventListeners",value:function(){var t=this;w(C(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit({userId:t._userId,cards:t._cards})}))}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var L=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){var n=e._renderer(t);e.addItem(n)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var R=function(){function t(e){var n=e.profileName,r=e.profileJob,o=e.profileAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._avatar=document.querySelector(o),this._profileName=document.querySelector(n),this._profileJob=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,job:this._profileJob.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;this._profileName.textContent=e,this._profileJob.textContent=n}},{key:"setUserAvatar",value:function(t){this._avatar.src=t.avatar}},{key:"setUserId",value:function(t){this._myId=t}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var B=function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"editUserInfo",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.job})}).then((function(t){return e._checkResponse(t)}))}},{key:"addCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,"Content-Type":"application/json",body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers,"Content-Type":"application/json"}).then((function(t){return e._checkResponse(t)}))}},{key:"likeCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers,"Content-Type":"application/json"}).then((function(t){return e._checkResponse(t)}))}},{key:"dislike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"DELETE",headers:this._headers,"Content-Type":"application/json"}).then((function(t){return e._checkResponse(t)}))}},{key:"editAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._checkResponse(t)}))}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),x={inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},A=document.querySelector(".profile__button-edit"),F=document.querySelector(".profile__button-add"),V=document.querySelector(".profile__button-avatar"),U=document.querySelector(".popup__form_edit"),N=document.querySelector(".popup__form_add"),J=document.querySelector(".popup__form_avatar"),z=document.querySelector(".popup__input_value_name"),G=document.querySelector(".popup__input_value_job");function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var M,$=new B({url:"https://mesto.nomoreparties.co/v1/cohort-62",headers:{Authorization:"f71e956f-38a7-4a42-a0a9-eb7efb8f8d45","Content-Type":"application/json"}}),K=[$.getUserInfo(),$.getInitialCards()];Promise.all(K).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return H(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M=o._id,Q.setUserInfo(o),Q.setUserAvatar(o),tt.renderItems(i)})).catch((function(t){console.log("Ошибка: ".concat(t))}));var Q=new R({profileName:".profile__name",profileJob:".profile__job",profileAvatar:".profile__avatar"}),W=function(t){var e=new i({data:t,myId:M,templateSelector:"#feed__template",handleCardClick:et,handleDeleteCard:function(t,n){rt.open(t,n),rt.setSubmitForm((function(t){$.deleteCard(t.userId).then((function(){rt.close(),e.deleteCard()})).catch((function(t){console.log("Ошибка: ".concat(t))}))}))},handleLikeCard:function(t){e.isLiked()?$.dislike(t.userId).then((function(t){e.getlikesData(t),e.handleLikeCard()})).catch((function(t){console.log("Ошибка: ".concat(t))})):$.likeCard(t.userId).then((function(t){e.getlikesData(t),e.handleLikeCard()})).catch((function(t){console.log("Ошибка: ".concat(t))}))}});return e.generateCard(t)},X=new S({popupSelector:".popup_add",handleFormSubmit:function(t){X.loadingData(!0),$.addCard({name:t.name,link:t.link}).then((function(t){tt.addItem(W(t),!0),X.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){X.loadingData(!1)}))}}),Y=new S({popupSelector:".popup_edit",handleFormSubmit:function(t){Y.loadingData(!0),$.editUserInfo(t).then((function(t){Q.setUserInfo(t),Y.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){Y.loadingData(!1)}))}}),Z=new S({popupSelector:".popup_edit-avatar",handleFormSubmit:function(t){Z.loadingData(!0),$.editAvatar(t).then((function(t){Q.setUserAvatar(t),Z.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){Z.loadingData(!1)}))}}),tt=new L({renderer:W},".feed__list");function et(t,e){nt.open(t,e)}var nt=new h(".popup_img"),rt=new j({popupSelector:".popup_delete-card",handleFormSubmit:function(t,e){rt.loadingData(!0),$.deleteCard(e).then((function(e){t.deleteCard(),rt.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){rt.loadingData(!1)}))}}),ot=new n(x,U);ot.enableValidation();var it=new n(x,N);it.enableValidation();var ut=new n(x,J);ut.enableValidation(),A.addEventListener("click",(function(){Y.open();var t=Q.getUserInfo();z.value=t.name,G.value=t.job,ot.resetValidation()})),F.addEventListener("click",(function(){X.open(),it.resetValidation()})),V.addEventListener("click",(function(){Z.open(),ut.resetValidation()})),Y.setEventListeners(),X.setEventListeners(),Z.setEventListeners(),rt.setEventListeners(),nt.setEventListeners()})();