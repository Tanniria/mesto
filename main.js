(()=>{var t={240:()=>{}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var r,n;return r=t,(n=[{key:"_showInputError",value:function(t){this._errorElement=this._formElement.querySelector("#".concat(t.id,"-error")),t.classList.add(this._inputErrorClass),this._errorElement.classList.add(this._errorClass),this._errorElement.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){this._errorElement=this._formElement.querySelector("#".concat(t.id,"-error")),t.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent=""}},{key:"_hasInvalidInput",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_toggleButtonState",value:function(){this._isValidForm=this._formElement.checkValidity(),this._buttonElement.classList.toggle(this._inactiveButtonClass,!this._isValidForm),this._buttonElement.disabled=!this._isValidForm}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._formElement.addEventListener("reset",(function(){setTimeout((function(){t._toggleButtonState()}),0)})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._toggleButtonState(),t._hasInvalidInput(e)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var u=function(){function t(e,r,n,o,i,u,a,l){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._card=e,this._name=e.name,this._link=e.link,this._templateSelector=r,this._handleCardClick=n,this._likes=likes,this._userID=o,this._authorID=i,this._handleDeleteCard=u,this._handleLikeCard=a,this._handleDeleteLikeCard=l}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".feed__item").cloneNode(!0)}},{key:"deleteButton",value:function(){this._card.remove(),this._card=null}},{key:"_checkDeleteCard",value:function(){this._userID!==this._authorID&&this._buttonDelete.remove()}},{key:"likeCard",value:function(){this._buttonLike.classList.add("feed__button-like_active")}},{key:"dislikeCard",value:function(){this._buttonLike.classList.remove("feed__button-like_active")}},{key:"setLikesCounter",value:function(t){this._likesCounter.textContent=t}},{key:"_isCardLiked",value:function(){var t=this;return Array.from(this.card.likes).some((function(e){return e._id===t._userID}))}},{key:"toggleLike",value:function(){var t=this;return Array.from(this._card.likes).forEach((function(e){e._id===t._userID?t.likeCard():t.dislikeCard()}))}},{key:"_handleLikeCard",value:function(){this._buttonLike.classList.contains(".feed__button-like")?this._handleDeleteLikeCard():this._handleLikeCard()}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",(function(){return t._handleLikeCard()})),this._buttonDelete.addEventListener("click",(function(){return t._handleDeleteCard()})),this._cardImg.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._buttonLike=this._card.querySelector(".feed__button-like"),this._buttonDelete=this._card.querySelector(".feed__button-delete"),this._likesCounter=this._card.querySelector(".card__like-counter"),this._cardImg=this._card.querySelector(".feed__img"),this._cardTitle=this._card.querySelector(".feed__title"),this._cardImg.alt=this._name,this._cardImg.src=this._link,this._cardTitle.textContent=this._name,this.setLikesCounter(this._card.likes.length),this.toggleLike(),this._setEventListeners(),this._card}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._buttonsClosePopup=this._popup.querySelector(".popup__button-close"),this._closeByEscape=this._closeByEscape.bind(this),this._buttonSubmit=this._popup.querySelector(".popup__button-save")}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closeByEscape)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closeByEscape)}},{key:"_closeByEscape",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._buttonsClosePopup.addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&t.close()}))}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},p.apply(this,arguments)}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(n);if(o){var r=d(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImg=e._popup.querySelector(".popup__img-zoom"),e._cardTitle=e._popup.querySelector(".popup__img-title"),e}return e=u,(r=[{key:"open",value:function(t,e){p(d(u.prototype),"open",this).call(this),this._popupImg.src=e,this._popupImg.alt=t,this._cardTitle.textContent=t}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},v.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(n);if(o){var r=g(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popupSelector,n=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._handleFormSubmit=n,e._popupForm=e._popup.querySelector(".popup__form"),e._inputList=Array.from(e._popupForm.querySelectorAll(".popup__input")),e}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;v(g(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()}))}},{key:"renderLoading",value:function(t){this._buttonSubmit.textContent=t}},{key:"close",value:function(){v(g(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},E.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(n);if(o){var r=C(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popupSelector,n=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._handleFormSubmit=n,e}return e=u,(r=[{key:"open",value:function(t,e){E(C(u.prototype),"open",this).call(this),this._id=e,this._card=t}},{key:"setEventListeners",value:function(){var t=this;E(C(u.prototype),"setEventListeners",this).call(this),this._buttonSubmit.addEventListener("click",(function(){t._handleFormSubmit(t._card,t._id)}))}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}var I=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;this._initialArray=t,this._initialArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&P(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function D(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===x(o)?o:String(o)),n)}var o}var q=function(){function t(e){var r=e.userName,n=e.userJob;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(r),this._profileJob=document.querySelector(n),this._avatar=document.querySelector(userAvatar),this.getUserID=this.getUserID.bind(this)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,job:this._profileJob.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.job;t.avatar,this._profileName.textContent=e,this._profileJob.textContent=r}},{key:"setUserAvatar",value:function(t){this._avatar.src=t.avatar}},{key:"setUserId",value:function(t){this._userID=t}},{key:"getUserID",value:function(){return this._userID}}])&&D(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),T=r(240),B={inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},R=document.querySelector(".profile__button-edit"),A=document.querySelector(".profile__button-add"),V=document.querySelector(".popup__form_edit"),U=document.querySelector(".popup__form_add"),F=document.querySelector(".popup__form_avatar"),M=document.querySelector(".popup__input_value_name"),H=document.querySelector(".popup__input_value_job"),N=document.querySelector(".profile__button-avatar");function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var G=new q({userName:".profile__name",userJob:".profile__job",userAvatar:".profile__avatar"}),z=new T.Api({url:"https://mesto.nomoreparties.co/v1/cohort-62/",headers:{authorization:"f71e956f-38a7-4a42-a0a9-eb7efb8f8d45","Content-Type":"application/json"}});function W(t){var e=new u({data:t,userId:G.getUserID(),handleCardClick:function(){Z.open(t)},handleDeleteCard:function(){X.open(e,t._id)},handleLikeCard:function(){z.likeCard(t._id).then((function(t){e.toggleLike(),e.setLikesCounter(t.likes.length),e.likeCard()})).catch((function(t){console.log(t)}))},handleDeleteLikeCard:function(){z.dislike(t._id).then((function(t){e.toggleLike(),e.setLikesCounter(t.likes.length),e.dislikeCard()})).catch((function(t){console.log(t)}))}});return e.generateCard()}Promise.all([z.getUserInfo(),z.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return J(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];G.setUserInfo(i),G.setUserAvatar(i),G.setUserId(i._id),Y.renderItems(o)})).catch((function(t){console.log(t)}));var Y=new I({renderer:function(t){Y.addItem(W(t,handleCardClick))}},".feed__list");Y.renderItems([{name:"Каолиновый карьер",link:"https://images.unsplash.com/photo-1634767704190-74f517c9ab1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Таганай",link:"https://images.unsplash.com/photo-1625589934405-a180c2e53aa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{name:"Деревня Голубино",link:"https://moya-planeta.ru/upload/images/xl/a1/8f/a18f565ad49e76f2cfb2cd05d47251859a8564f1.jpg"},{name:"Озеро Джека Лондона",link:"https://moya-planeta.ru/upload/images/xl/73/f0/73f0687eb0659d975338e290bef8545ab9b4ca60.jpg"},{name:"Берег Каспия",link:"https://moya-planeta.ru/upload/images/xl/6f/01/6f01b3440cf555e801e631e1805d572446781fb0.jpg"},{name:"Остров Ушишир",link:"https://moya-planeta.ru/upload/images/xl/65/ed/65ed66361008d56ad066b5ac32080f058d507896.jpg"}]);var $=new S({popupSelector:".popup_edit",handleFormSubmit:function(t){$.renderLoading("Сохранение..."),z.editUserInfo(t).then((function(t){G.setUserInfo(t),$.close()})).catch((function(t){console.log(t)})).finally((function(){return $.renderLoading("Сохранить")}))}}),K=new S({popupSelector:".popup_add",handleFormSubmit:function(t){K.renderLoading("Создание..."),z.addCard(t).then((function(t){Y.addItem(W({name:t.name,link:t.link},handleCardClick)),K.close()})).catch((function(t){console.log(t)})).finally((function(){return K.renderLoading("Создать")}))}}),Q=new S({popupSelector:".popup_edit-avatar",handleFormSubmit:function(t){Q.renderLoading("Сохранение..."),z.editAvatar(t).then((function(t){G.setUserAvatar(t),Q.close()})).catch((function(t){console.log(t)})).finally((function(){return Q.renderLoading("Сохранить")}))}}),X=new L({popupSelector:".popup_delete-card",handleFormSubmit:function(t,e){X.renderLoading("Удаление..."),z.deleteCard(e).then((function(){newCard.deleteCard(),X.close()})).catch((function(t){console.log(t)})).finally((function(){return X.renderLoading("Да")}))}}),Z=new h(".popup_img"),tt=new n(B,V);tt.enableValidation();var et=new n(B,U);et.enableValidation();var rt=new n(B,F);rt.enableValidation(),R.addEventListener("click",(function(){$.open();var t=G.getUserInfo();M.value=t.name,H.value=t.job,tt.resetValidation()})),A.addEventListener("click",(function(){K.open(),et.resetValidation()})),N.addEventListener("click",(function(){Q.open();var t=G.getUserInfo();M.value=t.name,H.value=t.job,rt.resetValidation()})),$.setEventListeners(),K.setEventListeners(),Q.setEventListeners(),X.setEventListeners(),Z.setEventListeners()})()})();