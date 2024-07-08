(()=>{"use strict";var e={};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,r(n.key),n)}}function r(e){var o=function(e,o){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(o)?o:o+""}e.p="";var n=function(){return e=function e(t){var o=t.objectItem,r=t.templateSelector,n=t.getCardImageSrc;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._imageValue=o.image,this._markValue=o.mark,this._modelValue=o.model,this._templateSelector=r,this._getCardImageSrc=n},(t=[{key:"_generateCard",value:function(){return this._templateElementContent=document.querySelector(this._templateSelector).content,this._element=this._templateElementContent.querySelector(".card").cloneNode(!0),this._cardImage=this._element.querySelector(".card__image"),this._cardImage.src=this._imageValue,this._cardMark=this._element.querySelector(".card__info-mark"),this._cardMark.textContent=this._markValue,this._cardModel=this._element.querySelector(".card__info-model"),this._cardModel.textContent=this._modelValue,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(t){e._getCardImageSrc(t.target.src)}))}},{key:"addCard",value:function(){return this._generateCard()}}])&&o(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,u(r.key),r)}}function u(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}var a=function(){return e=function e(t){var o=t.popupSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(o),this._popupElementClose=this._popupElement.querySelector(".popup__close")},(t=[{key:"openPopup",value:function(){this._popupElement.classList.add("popup_opened")}},{key:"setEventListeners",value:function(){var e=this;this._popupElementClose.addEventListener("click",(function(){e.closePopup()}))}},{key:"closePopup",value:function(){this._popupElement.classList.remove("popup_opened")}}])&&c(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function f(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}function p(e,t,o){return t=y(t),function(e,t){if(t&&("object"==l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,d()?Reflect.construct(t,o||[],y(e).constructor):t.apply(e,o))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,o){var r=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(arguments.length<3?e:o):n.value}},_.apply(null,arguments)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}var m=function(e){function t(e){var o,r=e.popupSelector,n=e.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=p(this,t,[{popupSelector:r}]))._popupElementForm=o._popupElement.querySelector(".popup__form"),o._popupElementFormInputs=o._popupElementForm.querySelectorAll(".popup__input"),o._submit=n,o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(t,e),o=t,(r=[{key:"_getInputsValues",value:function(){var e={};return this._popupElementFormInputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"_transferInputValues",value:function(){this._submit(this._getInputsValues())}},{key:"setEventListeners",value:function(){var e=this;_(y(t.prototype),"setEventListeners",this).call(this),this._popupElementForm.addEventListener("submit",(function(t){e._transferInputValues(),t.preventDefault(),e._clearInputsValues()}))}},{key:"_clearInputsValues",value:function(){this._popupElementFormInputs.forEach((function(e){e.value=""}))}},{key:"closePopup",value:function(){_(y(t.prototype),"closePopup",this).call(this),this._clearInputsValues()}}])&&s(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,r}(a);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,t,o){return t=S(t),function(e,t){if(t&&("object"==h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,g()?Reflect.construct(t,o||[],S(e).constructor):t.apply(e,o))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}var w=function(e){function t(e){var o=e.popupSelector,r=e.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,t,[{popupSelector:o,submit:r}])}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(t,e),o=t,Object.defineProperty(o,"prototype",{writable:!1}),o;var o}(m);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function E(e,t,o){return t=j(t),function(e,t){if(t&&("object"==O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,x()?Reflect.construct(t,o||[],j(e).constructor):t.apply(e,o))}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}var L=function(e){function t(e){var o=e.popupSelector,r=e.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,t,[{popupSelector:o,submit:r}])}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(t,e),o=t,Object.defineProperty(o,"prototype",{writable:!1}),o;var o}(m);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function C(e,t,o){return t=B(t),function(e,t){if(t&&("object"==A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,D()?Reflect.construct(t,o||[],B(e).constructor):t.apply(e,o))}function D(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(D=function(){return!!e})()}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}var T=function(e){function t(e){var o=e.popupSelector,r=e.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,t,[{popupSelector:o,submit:r}])}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(t,e),o=t,Object.defineProperty(o,"prototype",{writable:!1}),o;var o}(m);const I=e.p+"891387232aadf6f35a41.jpg",M=e.p+"0f62d6cca566c2b3478f.jpg";var F=[{image:e.p+"ef22cd01174e6fb299c7.jpg",mark:"Mercedes-Benz",model:"AMG GT"},{image:M,mark:"Porsche",model:"Panamera GTS"},{image:I,mark:"Audi",model:"A5"}],R=document.querySelectorAll(".control__button_add-card"),V=document.querySelectorAll(".header__button_sign-in"),z=document.querySelectorAll(".header__button_registry"),G=document.querySelector(".cards-list"),Y=document.querySelector(".footer").offsetTop,W=document.querySelectorAll(".header__button"),H=document.querySelectorAll(".control__button"),N=document.querySelector(".fixed-block");function J(){Y=document.querySelector(".footer").offsetTop}function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function Q(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,U(r.key),r)}}function U(e){var t=function(e,t){if("object"!=K(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!=K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==K(t)?t:t+""}function X(e,t,o){return t=ee(t),function(e,t){if(t&&("object"==K(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Z()?Reflect.construct(t,o||[],ee(e).constructor):t.apply(e,o))}function Z(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Z=function(){return!!e})()}function $(){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,o){var r=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=ee(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(arguments.length<3?e:o):n.value}},$.apply(null,arguments)}function ee(e){return ee=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ee(e)}function te(e,t){return te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},te(e,t)}var oe=function(e){function t(e){var o,r=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=X(this,t,[{popupSelector:r}]))._popupElementContainer=o._popupElement.querySelector(".popup__image-container"),o._popupElementImage=o._popupElementContainer.querySelector(".popup__image"),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&te(e,t)}(t,e),o=t,(r=[{key:"changePopupImageSrc",value:function(e){this._popupElementImage.src=e}},{key:"closePopup",value:function(){var e=this;$(ee(t.prototype),"closePopup",this).call(this),setTimeout((function(){e._popupElementImage.src=""}),500)}}])&&Q(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,r}(a);function re(e){return re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re(e)}function ne(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ie(r.key),r)}}function ie(e){var t=function(e,t){if("object"!=re(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!=re(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==re(t)?t:t+""}var ce=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._fixedBlockMenu=N,this._fixedBlockContent=this._fixedBlockMenu.querySelector(".fixed-block__content"),this._fixedAuth=this._fixedBlockContent.querySelector(".fixed-block__user-auth"),this._fixedAuthSign=this._fixedAuth.querySelector(".header__button_sign-in"),this._fixedAuthReg=this._fixedAuth.querySelector(".header__button_registry"),this._controlButtons=this._fixedBlockContent.querySelector(".control__buttons-container"),this._fixedBack=document.querySelector(".content__background-image"),this._fixedAreaRightBottom=document.querySelector(".fixed-block-right-bottom"),this._fixedButtonArrowImage=this._fixedAreaRightBottom.querySelector(".fixed-block-right-bottom__button-image"),this._footer=document.querySelector(".footer"),this.contentTopCoordinates=document.querySelector(".content").offsetTop},(t=[{key:"_setAttribute",value:function(){this._fixedAuth.classList.add("header__user-auth_row"),this._fixedAuthSign.classList.add("header__button_state"),this._fixedAuthReg.classList.add("header__button_state"),this._controlButtons.setAttribute("style","padding: 0")}},{key:"toggleFixedBlockVisible",value:function(e){window.pageYOffset>e&&(this._fixedBlockMenu.classList.contains("fixed-block_hidden")?this._fixedBlockMenu.classList.remove("fixed-block_visible"):this._fixedBlockMenu.classList.add("fixed-block_visible"))}},{key:"_setEventListeners",value:function(){var e=this;document.addEventListener("scroll",(function(){var t=window.pageYOffset,o=window.pageYOffset+window.innerHeight;t>e.contentTopCoordinates?(e._fixedBlockMenu.classList.contains("fixed-block_hidden")||e._fixedBlockMenu.classList.add("fixed-block_visible"),e._fixedBack.classList.add("content__background-image_position-fixed-mode"),o>Y?e._fixedAreaRightBottom.classList.add("fixed-block-right-bottom_absolute-mode"):e._fixedAreaRightBottom.classList.remove("fixed-block-right-bottom_absolute-mode")):(e._fixedBlockMenu.classList.remove("fixed-block_visible"),e._fixedBack.classList.remove("content__background-image_position-fixed-mode"),e._fixedAreaRightBottom.classList.remove("fixed-block-right-bottom_absolute-mode")),t>550?e._fixedButtonArrowImage.classList.add("fixed-block-right-bottom__button-image_visible"):e._fixedButtonArrowImage.classList.remove("fixed-block-right-bottom__button-image_visible")})),this._fixedButtonArrowImage.addEventListener("click",(function(){window.scrollTo(0,0)}))}},{key:"scrollWork",value:function(){this._setAttribute(),this._setEventListeners()}}])&&ne(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function ue(e){return ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ue(e)}function ae(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,le(r.key),r)}}function le(e){var t=function(e,t){if("object"!=ue(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!=ue(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==ue(t)?t:t+""}var se=function(){return e=function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardsListArray=Array.from(G.children),this._buttonOnModeDelete=document.querySelectorAll(".control__button_delete-card"),this._buttonsContainerOnModeDelete=document.querySelector(".fixed-block-right-bottom__buttons-container"),this._buttonOffModeDelete=document.querySelector(".fixed-block-right-bottom__button-text_cancel"),this._buttonDeleteCards=document.querySelector(".fixed-block-right-bottom__button-text_delete"),this._fixedButtonArrowImage=document.querySelector(".fixed-block-right-bottom__button-image"),this._fixedBackgroundImage=document.querySelector(".content__background-image"),this._cardToggleDelete=document.querySelectorAll(".card__button-image"),this._cardDarkMode=document.querySelectorAll(".card__dark-overlay"),this._cardImageDarkMode=document.querySelectorAll(".card__image"),this._cardsAreaForDelete=[],this._buttonsAuthorization=W,this._buttonsControl=H,this._fixedBlockMenu=N,this._toggleFixedBlockVisible=t,this._contentTopCoordinates=o},(t=[{key:"newCardForDelete",value:function(){this._cardsListArray=Array.from(G.children),this._cardToggleDelete=document.querySelectorAll(".card__button-image"),this._cardDarkMode=document.querySelectorAll(".card__dark-overlay"),this._cardImageDarkMode=document.querySelectorAll(".card__image"),this._nextChooseCardsForDelete()}},{key:"_listenerDeleteCard",value:function(e){var t=this,o=e.querySelector(".card__button-image"),r=e.querySelector(".card__image"),n=e.querySelector(".card__dark-overlay");o.addEventListener("click",(function(){t._toggleCardStyle(e,r,o,n),t._toggleCardForDelete(e)}))}},{key:"_nextChooseCardsForDelete",value:function(){var e=this;this._cardsListArray.forEach((function(t){0===e._cardsListArray.indexOf(t)&&e._listenerDeleteCard(t)}))}},{key:"firstChooseCardsForDelete",value:function(){var e=this;this._cardsListArray.forEach((function(t){e._listenerDeleteCard(t)}))}},{key:"_toggleCardStyle",value:function(e,t,o,r){e.classList.contains("card_delete-theme")?e.classList.replace("card_delete-theme","card_approve-delete"):e.classList.replace("card_approve-delete","card_delete-theme"),t.classList.toggle("card__image_dark-theme"),r.classList.toggle("card__dark-overlay_visible"),o.classList.toggle("card__button-image_toggle-bacground-image")}},{key:"_toggleCardForDelete",value:function(e){var t=this;e.classList.contains("card_approve-delete")?this._cardsAreaForDelete.push(e):this._cardsAreaForDelete.some((function(o){t._cardsAreaForDelete.indexOf(o)===t._cardsAreaForDelete.indexOf(e)&&t._cardsAreaForDelete.splice(t._cardsAreaForDelete.indexOf(e),1)}))}},{key:"setEventListeners",value:function(){var e=this;this._buttonOnModeDelete.forEach((function(t){t.addEventListener("click",(function(){e._onModeDelete()}))})),this._buttonDeleteCards.addEventListener("click",(function(){e._deleteCards()})),this._buttonOffModeDelete.addEventListener("click",(function(){e._offModeDelete()}))}},{key:"_onModeDelete",value:function(){this._fixedBackgroundImage.classList.add("content__background-image_delete-theme"),this._cardsListArray.forEach((function(e){e.classList.add("card_delete-theme")})),this._buttonsContainerOnModeDelete.classList.add("fixed-block-right-bottom__buttons-container_visible"),this._cardToggleDelete.forEach((function(e){e.classList.add("card__button-image_visible")})),this._cardDarkMode.forEach((function(e){e.classList.add("card__dark-overlay_visible")})),this._cardImageDarkMode.forEach((function(e){e.classList.add("card__image_dark-theme")})),this._buttonsAuthorization.forEach((function(e){e.setAttribute("disabled",!0)})),this._buttonsControl.forEach((function(e){e.setAttribute("disabled",!0)})),this._fixedBlockMenu.classList.add("fixed-block_hidden"),this._toggleFixedBlockVisible(this._contentTopCoordinates),this._fixedButtonArrowImage.classList.add("fixed-block-right-bottom__button-image_absolute")}},{key:"_offModeDelete",value:function(){this._fixedBackgroundImage.classList.remove("content__background-image_delete-theme"),this._cardsListArray.forEach((function(e){e.classList.remove("card_delete-theme")})),this._buttonsContainerOnModeDelete.classList.remove("fixed-block-right-bottom__buttons-container_visible"),this._cardToggleDelete.forEach((function(e){e.classList.remove("card__button-image_visible")})),this._cardDarkMode.forEach((function(e){e.classList.remove("card__dark-overlay_visible")})),this._cardImageDarkMode.forEach((function(e){e.classList.remove("card__image_dark-theme")})),this._cardsAreaForDelete.forEach((function(e){e.querySelector(".card__button-image").classList.remove("card__button-image_toggle-bacground-image"),e.classList.remove("card_approve-delete")})),this._cardsAreaForDelete.splice(0,this._cardsAreaForDelete.length),this._buttonsAuthorization.forEach((function(e){e.removeAttribute("disabled")})),this._buttonsControl.forEach((function(e){e.removeAttribute("disabled")})),this._fixedBlockMenu.classList.remove("fixed-block_hidden"),this._toggleFixedBlockVisible(this._contentTopCoordinates),this._fixedButtonArrowImage.classList.remove("fixed-block-right-bottom__button-image_absolute")}},{key:"_deleteCards",value:function(){0===this._cardsAreaForDelete.length?alert("выберите хотя бы одну машину, чтобы удалить"):(this._cardsAreaForDelete.forEach((function(e){e.remove(),J()})),this._offModeDelete())}}])&&ae(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function fe(e){var t=new n({objectItem:e,templateSelector:".card-template",getCardImageSrc:function(e){ye.changePopupImageSrc(e),ye.openPopup()}}).addCard();G.prepend(t),J()}R.forEach((function(e){e.addEventListener("click",(function(){pe.openPopup()}))})),V.forEach((function(e){e.addEventListener("click",(function(){de.openPopup()}))})),z.forEach((function(e){e.addEventListener("click",(function(){_e.openPopup()}))})),F.forEach((function(e){fe(e)}));var pe=new w({popupSelector:".popup_add-form",submit:function(e){fe(e),pe.closePopup(),me.newCardForDelete()}});pe.setEventListeners();var de=new L({popupSelector:".popup_sign-form",submit:function(e){de.closePopup(),alert("а вот и нет профиля")}});de.setEventListeners();var _e=new T({popupSelector:".popup_registry-form",submit:function(e){_e.closePopup(),alert("а вот и нет профиля")}});_e.setEventListeners();var ye=new oe({popupSelector:".popup_card-image"});ye.setEventListeners();var be=new ce;be.scrollWork();var me=new se(be.toggleFixedBlockVisible,be.contentTopCoordinates);me.setEventListeners(),me.firstChooseCardsForDelete()})();