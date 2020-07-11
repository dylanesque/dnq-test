function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/goals/goals.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/goals/goals.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGoalsGoalsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"flex-row\">\r\n\r\n  <section class=\"checkbox-column flex-column\">\r\n    <h1>What developmental goals do you want to set for yourself?</h1>\r\n    <mat-checkbox class=\"\" [(ngModel)]=\"carrier_change\">Carrier change</mat-checkbox>\r\n    <mat-checkbox class=\"\" [(ngModel)]=\"promotion\">Promotion</mat-checkbox>\r\n    <mat-checkbox class=\"\" [(ngModel)]=\"professional_development\">Professional Development</mat-checkbox>\r\n    <mat-checkbox class=\"\" [(ngModel)]=\"organizational_commitment\">Organizational Commitment</mat-checkbox>\r\n    <mat-checkbox class=\"\" [(ngModel)]=\"satisfaction_levels\">Satisfaction Levels</mat-checkbox>\r\n  </section>\r\n  <section class=\"info-column\">\r\n    <mat-icon aria-hidden=\"false\" aria-label=\"info icon\">info</mat-icon>\r\n    <p>The most important point about developmental networks is that one size does not fit all.\r\n      The developmental network perspective challenges the idea that there is one “perfect mentor”\r\n      out there for you and that all you have to do is find that person. It is the exception rather\r\n      than the rule that one person can provide all of the developmental assistance you need, especially\r\n      as your needs change over the course of your career. Different people will benefit from different\r\n      types of networks at different times in their careers. When judging your developmental needs, it\r\n      is important that you and the people in your developmental network understand your own personal\r\n      goals and aspirations, as well as the organizational and professional context you are in</p>\r\n  </section>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLandingLandingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex-column\">\r\n  <main class=\"landing-main\">\r\n    <div class=\"landing-text\">\r\n      <h3>Development Network Questionnaire</h3>\r\n\r\n      <ul>\r\n        <li>Challenge the idea that there is one perfect mentor to find.</li>\r\n        <li>\r\n          Raises questions: Who is on my personal board of directors? Who is\r\n          missing?\r\n        </li>\r\n        <li>\r\n          When it comes to mentoring and developmental networks, one size does\r\n          NOT fit all.\r\n        </li>\r\n        <li>\r\n          The best network for you may not be the best for someone else: it\r\n          depends on your goals!\r\n        </li>\r\n      </ul>\r\n\r\n      <button class=\"button button-white\">\r\n        <a routerLink=\"/survey-start\">Create Your Relationship Map</a>\r\n      </button>\r\n    </div>\r\n\r\n    <img\r\n    class=\"centered-image\"\r\n    src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\r\n    alt=\"Photo of a Shiba Inu\"\r\n  />\r\n  </main>\r\n\r\n  <div class=\"landing-lower flex-row\">\r\n    <div class=\"landing-card\">\r\n      <h3 class=\"landing-sub-heading\">Critical To Leadership Development</h3>\r\n      <img\r\n        class=\"centered-image\"\r\n        src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\r\n        alt=\"Photo of a Shiba Inu\"\r\n      />\r\n    </div>\r\n    <div class=\"landing-card\">\r\n      <h3 class=\"landing-sub-heading\">Development Relationship Types</h3>\r\n      <table>\r\n        <tbody>\r\n          <tr class=\"table-top\">\r\n            <td class=\"top-row first-column\">&nbsp;</td>\r\n            <td class=\"top-row\">Career Assistance</td>\r\n            <td class=\"top-row final-column\">Psychosocial Assistance</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"first-column\">Mentor</td>\r\n            <td>HIGH</td>\r\n            <td class=\"final-column\">HIGH</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"first-column\">Sponsor</td>\r\n            <td>HIGH</td>\r\n            <td class=\"final-column\">LOW</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"first-column\">Friend</td>\r\n            <td>LOW</td>\r\n            <td class=\"final-column\">HIGH</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"first-column bottom-row\">Ally</td>\r\n            <td class=\"bottom-row\">LOW</td>\r\n            <td class=\"final-column bottom-row\">LOW</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"landing-card\">\r\n      <img\r\n        src=\"../../assets/monica.jpg\"\r\n        alt=\"Picture of Monica Higgins\"\r\n        class=\"centered-image\"\r\n      />\r\n      <h3 class=\"landing-sub-heading\">Monica Higgins</h3>\r\n      <p>\r\n        Monica Higgins joined the Harvard Faculty in 1995 and is the Kathleen\r\n        McCartney Professor of Education Leadership at the Harvard Graduate\r\n        School of Education (HGSE) where her research and teaching focus on the\r\n        areas of leadership development and organizational change.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n  <a routerLink=\"/\"><h1>DNQ</h1></a>\r\n  <!-- TODO: Add active state styling and toggle appearance of survey navigation -->\r\n  <div *ngIf=\"showSurveyLinks\" class=\"flex-row\">\r\n    <h4>People</h4>\r\n    <h4>Value</h4>\r\n    <h4>Goals</h4>\r\n  </div>\r\n  <button mat-stroked-button (click)=\"auth.login()\" *ngIf=\"!auth.loggedIn\" class=\"button button-blue\">Log In</button>\r\n  <button mat-stroked-button (click)=\"auth.logout()\" *ngIf=\"auth.loggedIn\" class=\"button button-blue\">Log Out</button>\r\n</header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/network-build/network-build.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/network-build/network-build.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNetworkBuildNetworkBuildComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n  <ng-container *ngFor=\"let snapshot of networkSnapshot; index as i\">\r\n    <app-network-card [networkNames]=\"networkNames\" [person]=\"snapshot\" [count]=\"i + 1\"></app-network-card>\r\n  </ng-container>\r\n  <div #target></div>\r\n  <button\r\n    [disabled]=\"networkSize >= 6\"\r\n    (click)=\"addCard()\"\r\n    class=\"button button-blue no-border\"\r\n  >\r\n    + Add Person\r\n  </button>\r\n  <div>\r\n    <button\r\n      (click)=\"onSubmitNetwork()\"\r\n      [disabled]=\"networkSize < 2\"\r\n      class=\"button button-dark no-border\"\r\n    >\r\n      Continue\r\n    </button>\r\n    <button class=\"button button-blue no-border\">Cancel</button>\r\n  </div>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/network-card/network-card.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/network-card/network-card.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNetworkCardNetworkCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n  <div class=\"flex-row\">\r\n    <app-down-arrow\r\n    *ngIf=\"!isCardOpen\"\r\n    (click)=\"toggleCard()\"\r\n    ></app-down-arrow>\r\n    <app-up-arrow\r\n    *ngIf=\"isCardOpen\"\r\n    (click)=\"toggleCard()\"\r\n    ></app-up-arrow>\r\n    <h1>\r\n      Person {{ count }}<span *ngIf=\"networkExists === true\">: {{ person.name }}</span>\r\n    </h1>\r\n  </div>\r\n  <div *ngIf=\"networkExists === true && !isCardOpen\" class=\"flex-row\">\r\n    <h3>Social Arena: {{ person.socialArena }}</h3>\r\n    <h3>Category: {{ person.statusCategory }}</h3>\r\n    <h3>Emotional Closeness: {{ person.emotionalCloseness }}</h3>\r\n  </div>\r\n\r\n  <div *ngIf=\"isCardOpen\" class=\"card-body flex-row\">\r\n    <form #personForm=\"ngForm\" (ngSubmit)=\"onSubmit(personForm.value)\">\r\n      <div class=\"first-column\">\r\n        <div class=\"flex-column\">\r\n          <label>Person Name</label>\r\n          <input\r\n            (change)=\"addNameToNetwork(person.name)\"\r\n            type=\"text\"\r\n            class=\"bottom-border\"\r\n            name=\"name\"\r\n            id=\"name{{ count }}\"\r\n            [(ngModel)]=\"person.name\"\r\n            required\r\n          />\r\n        </div>\r\n\r\n        <div class=\"flex-column\">\r\n          <label for=\"statusCategory{{ count }}\">Status Category</label>\r\n          <select\r\n            name=\"statusCategory\"\r\n            id=\"statusCategory{{ count }}\"\r\n            class=\"input-container\"\r\n            [(ngModel)]=\"person.statusCategory\"\r\n            required\r\n          >\r\n            <option></option>\r\n            <option value=\"superior\">Superior</option>\r\n            <option value=\"mentor\">Mentor</option>\r\n            <option value=\"peer\">Peer</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"flex-column\">\r\n          <label for=\"emotionalCloseness{{ count }}\">Emotional Closeness</label>\r\n          <select\r\n            name=\"emotionalCloseness\"\r\n            id=\"emotionalCloseness{{ count }}\"\r\n            class=\"input-container\"\r\n            [(ngModel)]=\"person.emotionalCloseness\"\r\n            required\r\n          >\r\n            <option></option>\r\n            <option value=\"very_close\">Very Close</option>\r\n            <option value=\"close\">Close</option>\r\n            <option value=\"less_than_close\">Less Than Close</option>\r\n            <option value=\"distant\">Distant</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"flex-column\">\r\n          <label for=\"socialArena{{ count }}\">Social Arena</label>\r\n          <select\r\n            name=\"socialArena\"\r\n            id=\"socialArena{{ count }}\"\r\n            class=\"input-container\"\r\n            [(ngModel)]=\"person.socialArena\"\r\n            required\r\n          >\r\n            <option></option>\r\n            <option value=\"current_job\">Current Job</option>\r\n            <option value=\"former_job\">Former Job</option>\r\n            <option value=\"family\">Family</option>\r\n            <option value=\"friends\">Friends</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex-column second-column\">\r\n        <div>\r\n          <h4>Gender</h4>\r\n          <div class=\"flex-row input-container\">\r\n            <input\r\n              type=\"radio\"\r\n              name=\"gender\"\r\n              id=\"same_gender{{ count }}\"\r\n              value=\"same_gender\"\r\n              [ngModel]=\"person.gender\"\r\n            />\r\n            <label for=\"same_gender{{ count }}\" class=\"radio-label\"\r\n              >Same as you</label\r\n            >\r\n            <input\r\n              type=\"radio\"\r\n              name=\"gender\"\r\n              id=\"different_gender{{ count }}\"\r\n              value=\"different_gender\"\r\n              [ngModel]=\"person.gender\"\r\n            />\r\n            <label for=\"different_gender{{ count }}\" class=\"radio-label\"\r\n              >Different</label\r\n            >\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <h4>Race/Ethnicity</h4>\r\n          <div class=\"flex-row input-container\">\r\n            <input\r\n              type=\"radio\"\r\n              name=\"raceEthnicity\"\r\n              id=\"same_race{{ count }}\"\r\n              value=\"same_race\"\r\n              [ngModel]=\"person.raceEthnicity\"\r\n            />\r\n            <label for=\"same_race{{ count }}\" class=\"radio-label\"\r\n              >Same as you</label\r\n            >\r\n            <input\r\n              type=\"radio\"\r\n              name=\"raceEthnicity\"\r\n              id=\"different_race{{ count }}\"\r\n              value=\"different_race\"\r\n              [ngModel]=\"person.raceEthnicity\"\r\n            />\r\n            <label for=\"different_race{{ count }}\" class=\"radio-label\"\r\n              >Different</label\r\n            >\r\n          </div>\r\n          <label for=\"\">Connected to other people in your network</label>\r\n          <ng-container *ngFor=\"let name of networkNames\">\r\n            <ng-container *ngIf=\"name !== person.name\">\r\n              <input\r\n                type=\"checkbox\"\r\n                name=\"network_connections\"\r\n                id=\"network_connections\"\r\n              />\r\n              <label for=\"network_connections\">{{ name }}</label>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"card-questions\">\r\n      <mat-icon aria-hidden=\"false\" aria-label=\"info icon\">info</mat-icon>\r\n      <h4>Questions you can ask</h4>\r\n      <p>Who is helping me in my professional development?</p>\r\n      <p>Who is on my personal board of directors?</p>\r\n      <p>What does that portfolio or network look like?</p>\r\n      <p>\r\n        How does my developmental network affect goals that are important to me?\r\n      </p>\r\n    </div>\r\n  </div>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<pre *ngIf=\"auth.userProfile$ | async as profile\">\r\n<code>{{ profile | json }}</code>\r\n</pre>\r\n<h1>Profile is live!</h1>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/survey-start/survey-start.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/survey-start/survey-start.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSurveyStartSurveyStartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n  <div class=\"text-div\">\r\n    <h2>People In Your Development Network</h2>\r\n\r\n    <p>\r\n      Think back over the past year. During that time, who are the people who\r\n      have taken an active interest in and concerted action to help you to\r\n      advance in your career by providing professional and/or personal guidance?\r\n      These are the people who constitute your current developmental network.\r\n    </p>\r\n\r\n    <p>\r\n      These people may span a number of different dimensions, so please think\r\n      broadly. For example, they may be people with whom you work or have\r\n      worked, old or new friends, people you know in your community, or family\r\n      members. The interest and action these people take to help your career may\r\n      be targeted to:\r\n    </p>\r\n\r\n    <p>\r\n      (1) professional development (directly applying to your job or career,\r\n      such as input on your current job or job performance, or information or\r\n      advice about potential career moves), and/or\r\n    </p>\r\n\r\n    <p>\r\n      (2) personal development (applying to such areas as clarifying your\r\n      personal aspirations or helping negotiate work-life balance issues).\r\n    </p>\r\n  </div>\r\n  <aside>\r\n    <p>\r\n      Please enter the initials (or some other brief identifier you will\r\n      remember) of at least two and up to six of these people\r\n    </p>\r\n    <p>\r\n      On subsequent pages, you will be asked a series of questions about each of\r\n      the people you have named.\r\n    </p>\r\n  </aside>\r\n</main>\r\n<div class=\"buttons\">\r\n  <button class=\"button button-dark no-border\"><a routerLink=\"/network-build\">Continue</a></button>\r\n  <button class=\"button button-blue no-border\">Cancel</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-home/user-home.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-home/user-home.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserHomeUserHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n  <section>\r\n    <div class=\"intro-card left-card\">\r\n      <div class=\"flex-row\">\r\n        <app-down-arrow\r\n          *ngIf=\"!isMapCardOpen\"\r\n          (click)=\"toggleMapCard()\"\r\n        ></app-down-arrow>\r\n        <app-up-arrow\r\n          *ngIf=\"isMapCardOpen\"\r\n          (click)=\"toggleMapCard()\"\r\n        ></app-up-arrow>\r\n        <h3>DNQ Relationship Map</h3>\r\n      </div>\r\n      <ng-container *ngIf=\"isMapCardOpen\">\r\n        <p>\r\n          Let's get your first DNQ completed and generate your Relationship Map\r\n        </p>\r\n        <ol>\r\n          <li>List essential people in your network</li>\r\n          <li>Grade their career and personal support for you</li>\r\n        </ol>\r\n        <p>\r\n          Get your Relationship Map and see how your network compares to 5 years\r\n          ago.\r\n        </p>\r\n        <button class=\"button button-blue\">\r\n          <a routerLink=\"/survey-start\" class=\"button-blue\">Start</a>\r\n        </button>\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"intro-card left-card\">\r\n      <div class=\"flex-row\">\r\n        <app-down-arrow\r\n          *ngIf=\"!isSampleCardOpen\"\r\n          (click)=\"toggleSampleCard()\"\r\n        ></app-down-arrow>\r\n        <app-up-arrow\r\n          *ngIf=\"isSampleCardOpen\"\r\n          (click)=\"toggleSampleCard()\"\r\n        ></app-up-arrow>\r\n        <h3>Relationship Map Sample</h3>\r\n      </div>\r\n      <ng-container *ngIf=\"isSampleCardOpen\">\r\n        <img\r\n          class=\"centered-image\"\r\n          src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\r\n          alt=\"Photo of a Shiba Inu\"\r\n        />\r\n      </ng-container>\r\n    </div>\r\n  </section>\r\n\r\n  <section>\r\n    <div class=\"intro-card right-card\">\r\n      <h3>ABOUT</h3>\r\n      <p><strong>Name:</strong> Sarah Mitchell</p>\r\n      <p><strong>Organization:</strong> RedBand Systems</p>\r\n      <p><strong>Relationship Maps:</strong> None</p>\r\n    </div>\r\n    <!-- TODO: Break this section off into a resuable, standalone component since it reappears on the Results page -->\r\n    <div class=\"intro-card right-card\">\r\n      <div class=\"flex-row\">\r\n        <app-down-arrow\r\n          *ngIf=\"!isGuideCardOpen\"\r\n          (click)=\"toggleGuideCard()\"\r\n        ></app-down-arrow>\r\n        <app-up-arrow\r\n          *ngIf=\"isGuideCardOpen\"\r\n          (click)=\"toggleGuideCard()\"\r\n        ></app-up-arrow>\r\n        <h3>INTERPRETIVE GUIDE</h3>\r\n      </div>\r\n      <ng-container *ngIf=\"isGuideCardOpen\">\r\n        <h4>Career and Psychosocial Help</h4>\r\n        <p>\r\n          Career help encompasses such functions as advocacy, coaching,\r\n          providing exposure and visibility, protecting such potentially\r\n          damaging career situations, and providing connections to challenging\r\n          assignments and information about potential new career opportunities,\r\n          Psychosocial help includes role modeling, counseling, providing\r\n          acceptance and confirmation, friendship and caring and sharing beyond\r\n          the boundaries of work relationships.\r\n        </p>\r\n      </ng-container>\r\n    </div>\r\n  </section>\r\n</main>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/value-intro/value-intro.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/value-intro/value-intro.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsValueIntroValueIntroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"value-intro-page\">\r\n  <mat-card-title>Career and Psychosocial Value</mat-card-title>\r\n\r\n  <mat-card-content>\r\n    <p>On a scale from 1 to 7, where 1 is \"never, not at all\" and 7 is \"to the maximum extent possible\",\r\n    please answer the following questions about the extent to which each person provides the types of help listed for you</p>\r\n    <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n  </mat-card-content>\r\n</mat-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/value/value.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/value/value.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsValueValueComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-table title=\"Career Help\"></app-table>\r\n<app-table title=\"Psychological Help\"></app-table>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/table/table.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/table/table.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsTableTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n<table>\n  <th *ngFor='let column of displayColumns'>{{ column }}</th>\n  <tr *ngFor=\"let question of questions\">\n    <td class=\"question-column\">{{ question }}</td>\n    <td *ngFor=\"let name of networkNames\" class=\"dropdown-column\">\n      <app-value-dropdown></app-value-dropdown>\n    </td>\n  </tr>\n</table>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/value-dropdown/value-dropdown.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/value-dropdown/value-dropdown.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsValueDropdownValueDropdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <mat-label>Select</mat-label>\n  <mat-select>\n    <mat-option *ngFor=\"let choice of dropdownChoices\" [value]=\"choice.value\">{{\n      choice\n    }}</mat-option>\n  </mat-select>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/landing/landing.component */
    "./src/app/components/landing/landing.component.ts");
    /* harmony import */


    var _components_network_build_network_build_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/network-build/network-build.component */
    "./src/app/components/network-build/network-build.component.ts");
    /* harmony import */


    var _components_survey_start_survey_start_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/survey-start/survey-start.component */
    "./src/app/components/survey-start/survey-start.component.ts");
    /* harmony import */


    var _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/user-home/user-home.component */
    "./src/app/components/user-home/user-home.component.ts");
    /* harmony import */


    var _components_value_intro_value_intro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/value-intro/value-intro.component */
    "./src/app/components/value-intro/value-intro.component.ts");
    /* harmony import */


    var _components_goals_goals_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/goals/goals.component */
    "./src/app/components/goals/goals.component.ts");
    /* harmony import */


    var _components_value_value_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/value/value.component */
    "./src/app/components/value/value.component.ts");

    var routes = [{
      path: '',
      component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
      pathMatch: 'full'
    }, {
      path: 'goals',
      component: _components_goals_goals_component__WEBPACK_IMPORTED_MODULE_10__["GoalsComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'network-build',
      component: _components_network_build_network_build_component__WEBPACK_IMPORTED_MODULE_6__["NetworkBuildComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'profile',
      component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'survey-start',
      component: _components_survey_start_survey_start_component__WEBPACK_IMPORTED_MODULE_7__["SurveyStartComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'user-home',
      component: _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_8__["UserHomeComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'value',
      component: _components_value_value_component__WEBPACK_IMPORTED_MODULE_11__["ValueComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'value-intro',
      component: _components_value_intro_value_intro_component__WEBPACK_IMPORTED_MODULE_9__["ValueIntroComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'dnq';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/nav-bar/nav-bar.component */
    "./src/app/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/landing/landing.component */
    "./src/app/components/landing/landing.component.ts");
    /* harmony import */


    var _components_network_build_network_build_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/network-build/network-build.component */
    "./src/app/components/network-build/network-build.component.ts");
    /* harmony import */


    var _components_network_card_network_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/network-card/network-card.component */
    "./src/app/components/network-card/network-card.component.ts");
    /* harmony import */


    var _components_survey_start_survey_start_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/survey-start/survey-start.component */
    "./src/app/components/survey-start/survey-start.component.ts");
    /* harmony import */


    var _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/user-home/user-home.component */
    "./src/app/components/user-home/user-home.component.ts");
    /* harmony import */


    var _components_value_intro_value_intro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/value-intro/value-intro.component */
    "./src/app/components/value-intro/value-intro.component.ts");
    /* harmony import */


    var _components_value_value_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/value/value.component */
    "./src/app/components/value/value.component.ts");
    /* harmony import */


    var _components_goals_goals_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/goals/goals.component */
    "./src/app/components/goals/goals.component.ts");
    /* harmony import */


    var _shared_components_up_arrow_up_arrow_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./shared/components/up-arrow/up-arrow.component */
    "./src/app/shared/components/up-arrow/up-arrow.component.ts");
    /* harmony import */


    var _shared_components_down_arrow_down_arrow_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./shared/components/down-arrow/down-arrow.component */
    "./src/app/shared/components/down-arrow/down-arrow.component.ts");
    /* harmony import */


    var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./shared/components/table/table.component */
    "./src/app/shared/components/table/table.component.ts");
    /* harmony import */


    var _shared_components_value_dropdown_value_dropdown_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./shared/components/value-dropdown/value-dropdown.component */
    "./src/app/shared/components/value-dropdown/value-dropdown.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_17__["NavBarComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_19__["LandingComponent"], _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_23__["UserHomeComponent"], _components_survey_start_survey_start_component__WEBPACK_IMPORTED_MODULE_22__["SurveyStartComponent"], _components_network_build_network_build_component__WEBPACK_IMPORTED_MODULE_20__["NetworkBuildComponent"], _components_network_card_network_card_component__WEBPACK_IMPORTED_MODULE_21__["NetworkCardComponent"], _components_value_intro_value_intro_component__WEBPACK_IMPORTED_MODULE_24__["ValueIntroComponent"], _components_value_value_component__WEBPACK_IMPORTED_MODULE_25__["ValueComponent"], _components_goals_goals_component__WEBPACK_IMPORTED_MODULE_26__["GoalsComponent"], _shared_components_up_arrow_up_arrow_component__WEBPACK_IMPORTED_MODULE_27__["UpArrowComponent"], _shared_components_down_arrow_down_arrow_component__WEBPACK_IMPORTED_MODULE_28__["DownArrowComponent"], _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_29__["TableComponent"], _shared_components_value_dropdown_value_dropdown_component__WEBPACK_IMPORTED_MODULE_30__["ValueDropdownComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this = this;

          return this.auth.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
            if (!loggedIn) {
              _this.auth.login(state.url);
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/components/goals/goals.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/goals/goals.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGoalsGoalsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1, p, mat-icon, mat-checkbox {\r\n  color: black;\r\n}\r\n\r\nmain {\r\n  background-color: white;\r\n}\r\n\r\n.checkbox-column {\r\n  width: 65%;\r\n}\r\n\r\n.info-column {\r\n  width: 35%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb2Fscy9nb2Fscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nb2Fscy9nb2Fscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEsIHAsIG1hdC1pY29uLCBtYXQtY2hlY2tib3gge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jaGVja2JveC1jb2x1bW4ge1xyXG4gIHdpZHRoOiA2NSU7XHJcbn1cclxuXHJcbi5pbmZvLWNvbHVtbiB7XHJcbiAgd2lkdGg6IDM1JTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/goals/goals.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/goals/goals.component.ts ***!
    \*****************************************************/

  /*! exports provided: GoalsComponent */

  /***/
  function srcAppComponentsGoalsGoalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoalsComponent", function () {
      return GoalsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GoalsComponent = /*#__PURE__*/function () {
      function GoalsComponent() {
        _classCallCheck(this, GoalsComponent);
      }

      _createClass(GoalsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GoalsComponent;
    }();

    GoalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-goals',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./goals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/goals/goals.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./goals.component.css */
      "./src/app/components/goals/goals.component.css"))["default"]]
    })], GoalsComponent);
    /***/
  },

  /***/
  "./src/app/components/landing/landing.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/landing/landing.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLandingLandingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n  border-collapse: collapse;\r\n  margin: 0 auto;\r\n}\r\n\r\ntd {\r\n  border: 1px solid white;\r\n  text-align: center;\r\n  width: 7vw;\r\n}\r\n\r\n.bottom-row {\r\n  border-bottom: none;\r\n}\r\n\r\n.final-column {\r\n  border-right: none;\r\n}\r\n\r\n.first-column {\r\n  border-left: none;\r\n  color: yellow;\r\n}\r\n\r\n.landing-card {\r\n  background-color: #469be8;\r\n  margin-right: 1rem;\r\n  padding: 0.5rem;\r\n  width: 32vw;\r\n}\r\n\r\n.landing-lower {\r\n  height: 50vh;\r\n}\r\n\r\n.landing-main {\r\n  display: flex;\r\n  height: 50vh;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.landing-sub-heading {\r\n  text-align: center;\r\n}\r\n\r\n.matrix-image {\r\n  height: 35vh;\r\n  width: 25vw;\r\n}\r\n\r\n.top-row {\r\n  border-top: none;\r\n  color: aquamarine;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxudGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogN3Z3O1xyXG59XHJcblxyXG4uYm90dG9tLXJvdyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLmZpbmFsLWNvbHVtbiB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4uZmlyc3QtY29sdW1uIHtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4ubGFuZGluZy1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY5YmU4O1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgd2lkdGg6IDMydnc7XHJcbn1cclxuXHJcbi5sYW5kaW5nLWxvd2VyIHtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbn1cclxuXHJcbi5sYW5kaW5nLW1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5sYW5kaW5nLXN1Yi1oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXRyaXgtaW1hZ2Uge1xyXG4gIGhlaWdodDogMzV2aDtcclxuICB3aWR0aDogMjV2dztcclxufVxyXG5cclxuLnRvcC1yb3cge1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgY29sb3I6IGFxdWFtYXJpbmU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/landing/landing.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/landing/landing.component.ts ***!
    \*********************************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppComponentsLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent() {
        _classCallCheck(this, LandingComponent);
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingComponent;
    }();

    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing.component.css */
      "./src/app/components/landing/landing.component.css"))["default"]]
    })], LandingComponent);
    /***/
  },

  /***/
  "./src/app/components/nav-bar/nav-bar.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavBarNavBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\nh4 {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.active-link {\r\n  text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuaDQge1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLmFjdGl2ZS1saW5rIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/nav-bar/nav-bar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
    \*********************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppComponentsNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/survey.service */
    "./src/app/services/survey.service.ts");

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent(auth, survey) {
        _classCallCheck(this, NavBarComponent);

        this.auth = auth;
        this.survey = survey;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.survey.surveyHasBegun.subscribe(function (status) {
            return _this2.showSurveyLinks = status;
          });
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"]
      }];
    };

    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.css */
      "./src/app/components/nav-bar/nav-bar.component.css"))["default"]]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/components/network-build/network-build.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/network-build/network-build.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNetworkBuildNetworkBuildComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV0d29yay1idWlsZC9uZXR3b3JrLWJ1aWxkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/network-build/network-build.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/network-build/network-build.component.ts ***!
    \*********************************************************************/

  /*! exports provided: NetworkBuildComponent */

  /***/
  function srcAppComponentsNetworkBuildNetworkBuildComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkBuildComponent", function () {
      return NetworkBuildComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _network_card_network_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../network-card/network-card.component */
    "./src/app/components/network-card/network-card.component.ts");
    /* harmony import */


    var _services_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/network.service */
    "./src/app/services/network.service.ts");
    /* harmony import */


    var src_app_shared_models_Network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/models/Network */
    "./src/app/shared/models/Network.ts");

    var NetworkBuildComponent = /*#__PURE__*/function () {
      function NetworkBuildComponent(network) {
        _classCallCheck(this, NetworkBuildComponent);

        this.network = network;
        this.networkNames = [];
      }

      _createClass(NetworkBuildComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.network.doesNetworkExist) {// this.network.getNetworkSnapshot.subscribe(snapshot => {
            //  this.networkSnapshot = snapshot;
            // });
            // this.network.networkSize.next(this.networkSnapshot.length);
            // this.network.networkSize.subscribe(size => this.networkSize = size);
            // this.generateNetworkNames();
          } else {
            this.networkSize = 1;
            this.networkSnapshot = [this.network.newCard]; // this.networkSnapshot = PEOPLE;

            this.generateNetworkNames();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "addCard",
        value: function addCard() {
          this.closeCard(this.networkSize);
          this.network.networkSize.next(this.networkSize += 1);
          this.networkSnapshot.push(new src_app_shared_models_Network__WEBPACK_IMPORTED_MODULE_4__["Person"]());
        }
      }, {
        key: "generateNetworkNames",
        value: function generateNetworkNames() {
          this.networkNames = this.networkSnapshot.map(function (person) {
            return person.name;
          });
        } // TODO: implement functionality

      }, {
        key: "closeCard",
        value: function closeCard(currentNetworkSize) {} // sets the 'isCardOpen' value on the currently opened card to false
        // TODO: implement functionality

      }, {
        key: "onSubmitNetwork",
        value: function onSubmitNetwork() {// fires the submission for the forms(?)
          // POSTs the network snapshot via the network service
          // navigates the router to the next page of the survey
        }
      }]);

      return NetworkBuildComponent;
    }();

    NetworkBuildComponent.ctorParameters = function () {
      return [{
        type: _services_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('target', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      "static": false
    })], NetworkBuildComponent.prototype, "entry", void 0);
    NetworkBuildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-network-build',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./network-build.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/network-build/network-build.component.html"))["default"],
      entryComponents: [_network_card_network_card_component__WEBPACK_IMPORTED_MODULE_2__["NetworkCardComponent"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./network-build.component.css */
      "./src/app/components/network-build/network-build.component.css"))["default"]]
    })], NetworkBuildComponent);
    /***/
  },

  /***/
  "./src/app/components/network-card/network-card.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/network-card/network-card.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNetworkCardNetworkCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 70%;\r\n}\r\n\r\nh3 {\r\n  padding-left: 1rem;\r\n  padding-right: 2rem;\r\n}\r\n\r\ninput, select {\r\n  margin-bottom: 2rem;\r\n  margin-left: 2rem;\r\n}\r\n\r\nlabel {\r\n  margin-left: 2rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\nmain {\r\n  background-color: #fff;\r\n  color: black;\r\n  margin: 1px auto;\r\n  width: 95vw;\r\n}\r\n\r\n.card-questions {\r\n  border-left: 1px solid #969696;\r\n  color: #969696;\r\n}\r\n\r\n.first-column, .second-column {\r\n  margin-right: 3rem;\r\n  width: 50%;\r\n}\r\n\r\n.input-container {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.open-card {\r\n  height: 70vh;\r\n}\r\n\r\n.radio-label {\r\n  margin-left: 4px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXR3b3JrLWNhcmQvbmV0d29yay1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV0d29yay1jYXJkL25ldHdvcmstY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbmgzIHtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcclxufVxyXG5cclxuaW5wdXQsIHNlbGVjdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBtYXJnaW4tbGVmdDogMnJlbTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW46IDFweCBhdXRvO1xyXG4gIHdpZHRoOiA5NXZ3O1xyXG59XHJcblxyXG4uY2FyZC1xdWVzdGlvbnMge1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzk2OTY5NjtcclxuICBjb2xvcjogIzk2OTY5NjtcclxufVxyXG5cclxuLmZpcnN0LWNvbHVtbiwgLnNlY29uZC1jb2x1bW4ge1xyXG4gIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4ub3Blbi1jYXJkIHtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbi5yYWRpby1sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/network-card/network-card.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/network-card/network-card.component.ts ***!
    \*******************************************************************/

  /*! exports provided: NetworkCardComponent */

  /***/
  function srcAppComponentsNetworkCardNetworkCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkCardComponent", function () {
      return NetworkCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/network.service */
    "./src/app/services/network.service.ts");

    var NetworkCardComponent = /*#__PURE__*/function () {
      function NetworkCardComponent(network) {
        _classCallCheck(this, NetworkCardComponent);

        this.network = network;
        this.filteredNames = [];
        this.isCardOpen = false;
      }

      _createClass(NetworkCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // TODO: Improve on this functionality so that one individual card can't push multiple names

      }, {
        key: "addNameToNetwork",
        value: function addNameToNetwork(name) {
          this.networkNames.push(name);
        } // TODO: implement functionality

      }, {
        key: "closeCard",
        value: function closeCard(target) {} // All network cards will subscribe to a network build event that gets sent when a new card is opened
        // when that event is emitted, it will fire this function, which will close the card unless it's name matches the target name sent
        // TODO: implement functionality

      }, {
        key: "onSubmit",
        value: function onSubmit(person) {// submits form
          // sends alert to network service or parent component to open new card (if there are less than 6) and close current card
        }
      }, {
        key: "toggleCard",
        value: function toggleCard() {
          this.isCardOpen = !this.isCardOpen;
        }
      }]);

      return NetworkCardComponent;
    }();

    NetworkCardComponent.ctorParameters = function () {
      return [{
        type: _services_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NetworkCardComponent.prototype, "person", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NetworkCardComponent.prototype, "count", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NetworkCardComponent.prototype, "networkNames", void 0);
    NetworkCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-network-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./network-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/network-card/network-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./network-card.component.css */
      "./src/app/components/network-card/network-card.component.css"))["default"]]
    })], NetworkCardComponent);
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/profile/profile.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(auth) {
        _classCallCheck(this, ProfileComponent);

        this.auth = auth;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/components/profile/profile.component.css"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/survey-start/survey-start.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/survey-start/survey-start.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSurveyStartSurveyStartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "aside {\r\n  background-color: whitesmoke;\r\n  height: 25vh;\r\n  margin: 0 auto;\r\n  padding: 1rem;\r\n  width: 25vw;\r\n}\r\n\r\nh2, p {\r\n  color: black;\r\n}\r\n\r\nmain {\r\n  background-color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 90vh;\r\n  margin: 0 auto;\r\n  width: 95vw;\r\n}\r\n\r\n.buttons {\r\n  margin-left: 1.4rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.text-div {\r\n  width: 50%;\r\n  margin: 2rem;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXJ2ZXktc3RhcnQvc3VydmV5LXN0YXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VydmV5LXN0YXJ0L3N1cnZleS1zdGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXNpZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgaGVpZ2h0OiAyNXZoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgd2lkdGg6IDI1dnc7XHJcbn1cclxuXHJcbmgyLCBwIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDk1dnc7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBtYXJnaW4tbGVmdDogMS40cmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi50ZXh0LWRpdiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDJyZW07XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/survey-start/survey-start.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/survey-start/survey-start.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SurveyStartComponent */

  /***/
  function srcAppComponentsSurveyStartSurveyStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyStartComponent", function () {
      return SurveyStartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SurveyStartComponent = /*#__PURE__*/function () {
      function SurveyStartComponent() {
        _classCallCheck(this, SurveyStartComponent);
      }

      _createClass(SurveyStartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SurveyStartComponent;
    }();

    SurveyStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-survey-start',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./survey-start.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/survey-start/survey-start.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./survey-start.component.css */
      "./src/app/components/survey-start/survey-start.component.css"))["default"]]
    })], SurveyStartComponent);
    /***/
  },

  /***/
  "./src/app/components/user-home/user-home.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/user-home/user-home.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserHomeUserHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3, h4, p, li {\r\n  color: black;\r\n  padding: 2px;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.intro-card {\r\n  background-color: #fff;\r\n  height: 40vh;\r\n  margin: 5px;\r\n}\r\n\r\n.left-card {\r\n  width: 56vw;\r\n}\r\n\r\n.right-card {\r\n  width: 40vw;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWhvbWUvdXNlci1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWhvbWUvdXNlci1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMywgaDQsIHAsIGxpIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG5tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW50cm8tY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5sZWZ0LWNhcmQge1xyXG4gIHdpZHRoOiA1NnZ3O1xyXG59XHJcblxyXG4ucmlnaHQtY2FyZCB7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/user-home/user-home.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/user-home/user-home.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserHomeComponent */

  /***/
  function srcAppComponentsUserHomeUserHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function () {
      return UserHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var UserHomeComponent = /*#__PURE__*/function () {
      function UserHomeComponent(auth) {
        _classCallCheck(this, UserHomeComponent);

        this.auth = auth;
        this.isMapCardOpen = false;
        this.isSampleCardOpen = false;
        this.isGuideCardOpen = false;
      }

      _createClass(UserHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleMapCard",
        value: function toggleMapCard() {
          this.isMapCardOpen = !this.isMapCardOpen;
        }
      }, {
        key: "toggleSampleCard",
        value: function toggleSampleCard() {
          this.isSampleCardOpen = !this.isSampleCardOpen;
        }
      }, {
        key: "toggleGuideCard",
        value: function toggleGuideCard() {
          this.isGuideCardOpen = !this.isGuideCardOpen;
        }
      }]);

      return UserHomeComponent;
    }();

    UserHomeComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    UserHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-home/user-home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-home.component.css */
      "./src/app/components/user-home/user-home.component.css"))["default"]]
    })], UserHomeComponent);
    /***/
  },

  /***/
  "./src/app/components/value-intro/value-intro.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/value-intro/value-intro.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsValueIntroValueIntroComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card-title {\r\n  text-align: center;\r\n}\r\n\r\n.value-intro-img {\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n.value-intro-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 80vh;\r\n  margin: 3rem auto 0 auto;\r\n  width: 75vw;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92YWx1ZS1pbnRyby92YWx1ZS1pbnRyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92YWx1ZS1pbnRyby92YWx1ZS1pbnRyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnZhbHVlLWludHJvLWltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi52YWx1ZS1pbnRyby1wYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIG1hcmdpbjogM3JlbSBhdXRvIDAgYXV0bztcclxuICB3aWR0aDogNzV2dztcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/value-intro/value-intro.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/value-intro/value-intro.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ValueIntroComponent */

  /***/
  function srcAppComponentsValueIntroValueIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValueIntroComponent", function () {
      return ValueIntroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ValueIntroComponent = /*#__PURE__*/function () {
      function ValueIntroComponent() {
        _classCallCheck(this, ValueIntroComponent);
      }

      _createClass(ValueIntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ValueIntroComponent;
    }();

    ValueIntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-value-intro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./value-intro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/value-intro/value-intro.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./value-intro.component.css */
      "./src/app/components/value-intro/value-intro.component.css"))["default"]]
    })], ValueIntroComponent);
    /***/
  },

  /***/
  "./src/app/components/value/value.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/value/value.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsValueValueComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmFsdWUvdmFsdWUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/value/value.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/value/value.component.ts ***!
    \*****************************************************/

  /*! exports provided: ValueComponent */

  /***/
  function srcAppComponentsValueValueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValueComponent", function () {
      return ValueComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ValueComponent = /*#__PURE__*/function () {
      function ValueComponent() {
        _classCallCheck(this, ValueComponent);
      }

      _createClass(ValueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ValueComponent;
    }();

    ValueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-value',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./value.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/value/value.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./value.component.css */
      "./src/app/components/value/value.component.css"))["default"]]
    })], ValueComponent);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @auth0/auth0-spa-js */
    "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.esm.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(router) {
        var _this3 = this;

        _classCallCheck(this, AuthService);

        this.router = router; // Create an observable of Auth0 instance of client

        this.auth0Client$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Object(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
          domain: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].domain,
          client_id: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].clientId,
          redirect_uri: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].rootUrl,
          audience: 'hasura'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1), // Every subscription receives the same shared value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        })); // Define observables for SDK methods that return promises by default
        // For each Auth0 SDK method, first ensure the client instance is ready
        // concatMap: Using the client instance, call SDK method; SDK returns a promise
        // from: Convert that resulting promise into an observable

        this.isAuthenticated$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (client) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.isAuthenticated());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
          return _this3.loggedIn = res;
        }));
        this.handleRedirectCallback$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (client) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.handleRedirectCallback());
        })); // Create subject and public observable of user profile data

        this.userProfileSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.userProfile$ = this.userProfileSubject$.asObservable(); // Create a local property for login status

        this.loggedIn = null; // On initial load, check authentication state with authorization server
        // Set up local auth streams if user is already authenticated

        this.localAuthSetup(); // Handle redirect from Auth0 login

        this.handleAuthCallback();
      } // When calling, options can be passed if desired
      // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser


      _createClass(AuthService, [{
        key: "getUser$",
        value: function getUser$(options) {
          var _this4 = this;

          return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (client) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.getUser(options));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
            return _this4.userProfileSubject$.next(user);
          }));
        }
      }, {
        key: "localAuthSetup",
        value: function localAuthSetup() {
          var _this5 = this;

          // This should only be called on app initialization
          // Set up local authentication streams
          var checkAuth$ = this.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (loggedIn) {
            if (loggedIn) {
              // If authenticated, get user and set in app
              // NOTE: you could pass options here if needed
              return _this5.getUser$();
            } // If not authenticated, return stream that emits 'false'


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(loggedIn);
          }));
          checkAuth$.subscribe();
        }
      }, {
        key: "login",
        value: function login() {
          var redirectPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
          // A desired redirect path can be passed to login method
          // (e.g., from a route guard)
          // Ensure Auth0 client instance exists
          this.auth0Client$.subscribe(function (client) {
            // Call method to log in
            client.loginWithRedirect({
              redirect_uri: "".concat(window.location.origin),
              appState: {
                target: redirectPath
              }
            });
          });
        }
      }, {
        key: "handleAuthCallback",
        value: function handleAuthCallback() {
          var _this6 = this;

          // Call when app reloads after user logs in with Auth0
          var params = window.location.search;

          if (params.includes('code=') && params.includes('state=')) {
            var targetRoute; // Path to redirect to after login processsed

            var authComplete$ = this.handleRedirectCallback$.pipe( // Have client, now call method to handle auth callback redirect
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (cbRes) {
              // Get and set target redirect route from callback results
              targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function () {
              // Redirect callback complete; get user and login status
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([_this6.getUser$(), _this6.isAuthenticated$]);
            })); // Subscribe to authentication completion observable
            // Response will be an array of user and login status

            authComplete$.subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  user = _ref2[0],
                  loggedIn = _ref2[1];

              // Redirect to target route after callback processing
              _this6.router.navigate([targetRoute]);
            });
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          // Ensure Auth0 client instance exists
          this.auth0Client$.subscribe(function (client) {
            // Call method to log out
            client.logout({
              client_id: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].clientId,
              returnTo: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].rootUrl
            });
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/network.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/network.service.ts ***!
    \*********************************************/

  /*! exports provided: NetworkService */

  /***/
  function srcAppServicesNetworkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
      return NetworkService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var NetworkService = /*#__PURE__*/function () {
      function NetworkService() {
        _classCallCheck(this, NetworkService);

        this.doesNetworkExist = false;
        this.networkSize = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
        this.newCard = {
          name: 'Name',
          socialArena: 'mentor',
          statusCategory: 'superior',
          emotionalCloseness: 'less_than_close',
          gender: 'same_gender',
          raceEthnicity: 'same_race'
        };
      }

      _createClass(NetworkService, [{
        key: "incrementNetworkSize",
        value: function incrementNetworkSize(networkSize) {
          this.networkSize.next(networkSize + 1);
        }
      }, {
        key: "getNetworkSnapshot",
        value: function getNetworkSnapshot() {// HTTP method to retrieve network snapshot from server
          // assign results to this.networkSnapshot
          // assign length to this.networkSize
        }
      }, {
        key: "postNetworkSnapshot",
        value: function postNetworkSnapshot() {// HTTP method to post network snapshot to the server
        }
      }]);

      return NetworkService;
    }();

    NetworkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NetworkService);
    /***/
  },

  /***/
  "./src/app/services/survey.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/survey.service.ts ***!
    \********************************************/

  /*! exports provided: SurveyService */

  /***/
  function srcAppServicesSurveyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyService", function () {
      return SurveyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SurveyService = function SurveyService() {
      _classCallCheck(this, SurveyService);

      this.surveyHasBegun = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    };

    SurveyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SurveyService);
    /***/
  },

  /***/
  "./src/app/shared/components/down-arrow/down-arrow.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/components/down-arrow/down-arrow.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsDownArrowDownArrowComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Rvd24tYXJyb3cvZG93bi1hcnJvdy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/down-arrow/down-arrow.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/down-arrow/down-arrow.component.ts ***!
    \**********************************************************************/

  /*! exports provided: DownArrowComponent */

  /***/
  function srcAppSharedComponentsDownArrowDownArrowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownArrowComponent", function () {
      return DownArrowComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DownArrowComponent = /*#__PURE__*/function () {
      function DownArrowComponent() {
        _classCallCheck(this, DownArrowComponent);
      }

      _createClass(DownArrowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DownArrowComponent;
    }();

    DownArrowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-down-arrow',
      template: "\n  <mat-icon\n  aria-hidden=\"false\"\n  aria-label=\"down arrowSVG icon\"\n  >expand_more</mat-icon>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./down-arrow.component.css */
      "./src/app/shared/components/down-arrow/down-arrow.component.css"))["default"]]
    })], DownArrowComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/table/table.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/shared/components/table/table.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsTableTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "main {\r\n  background-color: #fff;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 45vh;\r\n  margin: 1px auto;\r\n  width: 95vw;\r\n}\r\n\r\ntable, th {\r\n  background-color: white;\r\n  color: black;\r\n  text-align: left;\r\n}\r\n\r\n.dropdown-column {\r\n  padding-right: 3rem;\r\n}\r\n\r\n.question-column {\r\n  width: 42%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0NXZoO1xyXG4gIG1hcmdpbjogMXB4IGF1dG87XHJcbiAgd2lkdGg6IDk1dnc7XHJcbn1cclxuXHJcbnRhYmxlLCB0aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb2x1bW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5xdWVzdGlvbi1jb2x1bW4ge1xyXG4gIHdpZHRoOiA0MiU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/table/table.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/table/table.component.ts ***!
    \************************************************************/

  /*! exports provided: TableComponent */

  /***/
  function srcAppSharedComponentsTableTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
      return TableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _mock_Questions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../mock/Questions */
    "./src/app/shared/mock/Questions.ts");
    /* harmony import */


    var _services_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/network.service */
    "./src/app/services/network.service.ts");
    /* harmony import */


    var _mock_People__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../mock/People */
    "./src/app/shared/mock/People.ts");

    var TableComponent = /*#__PURE__*/function () {
      function TableComponent(network) {
        _classCallCheck(this, TableComponent);

        this.network = network;
        this.displayColumns = [];
        this.networkNames = [];
        this.questions = [];
      }

      _createClass(TableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.networkNames = _mock_People__WEBPACK_IMPORTED_MODULE_4__["PEOPLE"].map(function (person) {
            return person.name;
          });
          this.buildColumns(this.title, this.networkNames); // TODO: Refactor the below code so that the questions are passed into the component
          // as an input when psychological help questions are determined

          this.questions = _mock_Questions__WEBPACK_IMPORTED_MODULE_2__["CAREER_QUESTIONS"];
        }
      }, {
        key: "buildColumns",
        value: function buildColumns(tableName, members) {
          var _this$displayColumns;

          (_this$displayColumns = this.displayColumns).push.apply(_this$displayColumns, [tableName].concat(_toConsumableArray(members)));
        }
      }]);

      return TableComponent;
    }();

    TableComponent.ctorParameters = function () {
      return [{
        type: _services_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TableComponent.prototype, "title", void 0);
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/table/table.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./table.component.css */
      "./src/app/shared/components/table/table.component.css"))["default"]]
    })], TableComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/up-arrow/up-arrow.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/components/up-arrow/up-arrow.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsUpArrowUpArrowComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VwLWFycm93L3VwLWFycm93LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/up-arrow/up-arrow.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/up-arrow/up-arrow.component.ts ***!
    \******************************************************************/

  /*! exports provided: UpArrowComponent */

  /***/
  function srcAppSharedComponentsUpArrowUpArrowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpArrowComponent", function () {
      return UpArrowComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UpArrowComponent = /*#__PURE__*/function () {
      function UpArrowComponent() {
        _classCallCheck(this, UpArrowComponent);
      }

      _createClass(UpArrowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UpArrowComponent;
    }();

    UpArrowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-up-arrow',
      template: "\n  <mat-icon\n  aria-hidden=\"false\"\n  aria-label=\"up arrow SVG icon\"\n  >expand_less</mat-icon>",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./up-arrow.component.css */
      "./src/app/shared/components/up-arrow/up-arrow.component.css"))["default"]]
    })], UpArrowComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/value-dropdown/value-dropdown.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/shared/components/value-dropdown/value-dropdown.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsValueDropdownValueDropdownComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ZhbHVlLWRyb3Bkb3duL3ZhbHVlLWRyb3Bkb3duLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/value-dropdown/value-dropdown.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/value-dropdown/value-dropdown.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ValueDropdownComponent */

  /***/
  function srcAppSharedComponentsValueDropdownValueDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValueDropdownComponent", function () {
      return ValueDropdownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ValueDropdownComponent = /*#__PURE__*/function () {
      function ValueDropdownComponent() {
        _classCallCheck(this, ValueDropdownComponent);

        this.dropdownChoices = ['1 Never/Not at All', '2', '3', '4 Somewhat', '5', '6', '7 Maximum Possible'];
      }

      _createClass(ValueDropdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ValueDropdownComponent;
    }();

    ValueDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-value-dropdown',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./value-dropdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/value-dropdown/value-dropdown.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./value-dropdown.component.css */
      "./src/app/shared/components/value-dropdown/value-dropdown.component.css"))["default"]]
    })], ValueDropdownComponent);
    /***/
  },

  /***/
  "./src/app/shared/mock/People.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/mock/People.ts ***!
    \***************************************/

  /*! exports provided: PEOPLE */

  /***/
  function srcAppSharedMockPeopleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PEOPLE", function () {
      return PEOPLE;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PEOPLE = [{
      name: 'Dave',
      socialArena: 'current_job',
      statusCategory: 'superior',
      emotionalCloseness: 'less_than_close',
      gender: 'same_gender',
      raceEthnicity: 'same_race'
    }, {
      name: 'Catherine',
      socialArena: 'current_job',
      statusCategory: 'peer',
      emotionalCloseness: 'close',
      gender: 'different_gender',
      raceEthnicity: 'different_race'
    }, {
      name: 'Gabe',
      socialArena: 'family',
      statusCategory: 'peer',
      emotionalCloseness: 'very_close',
      gender: 'same_gender',
      raceEthnicity: 'same_race'
    }, {
      name: 'Erta',
      socialArena: 'family',
      statusCategory: 'peer',
      emotionalCloseness: 'close',
      gender: 'different_gender',
      raceEthnicity: 'same_race'
    }, {
      name: 'Michael',
      socialArena: 'pervious',
      statusCategory: 'superior',
      emotionalCloseness: 'close',
      gender: 'same_gender',
      raceEthnicity: 'different_race'
    }, {
      name: 'Odi',
      socialArena: 'friends',
      statusCategory: 'peer',
      emotionalCloseness: 'very_close',
      gender: 'different_gender',
      raceEthnicity: 'different_race'
    }];
    /***/
  },

  /***/
  "./src/app/shared/mock/Questions.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/mock/Questions.ts ***!
    \******************************************/

  /*! exports provided: CAREER_QUESTIONS, PSYCHOSOCIAL_QUESTIONS */

  /***/
  function srcAppSharedMockQuestionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CAREER_QUESTIONS", function () {
      return CAREER_QUESTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PSYCHOSOCIAL_QUESTIONS", function () {
      return PSYCHOSOCIAL_QUESTIONS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CAREER_QUESTIONS = ['Provides you with opportunities that stretch you professionally', 'Creates opportunities for visibility for you in your career', 'Opens doors for you professionally', 'Acts as a sponsor for you', 'Acts as a buffer for you for you from situations that could threaten your career achievement'];
    var PSYCHOSOCIAL_QUESTIONS = ['Provides you with opportunities that stretch you professionally', 'Creates opportunities for visibility for you in your career', 'Opens doors for you professionally', 'Acts as a sponsor for you', 'Acts as a buffer for you for you from situations that could threaten your career achievement'];
    /***/
  },

  /***/
  "./src/app/shared/models/Network.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/models/Network.ts ***!
    \******************************************/

  /*! exports provided: Network, Person */

  /***/
  function srcAppSharedModelsNetworkTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Network", function () {
      return Network;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Person", function () {
      return Person;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Network = function Network() {
      _classCallCheck(this, Network);
    };

    var Person = function Person() {
      _classCallCheck(this, Person);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      clientId: 'HQuj4siVaegsaYVl9RoiPMn9rpdewSnM',
      rootUrl: "http://localhost:3000",
      domain: 'dev-ya38vtmm.auth0.com'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Michael C.000\Desktop\Angular\dnq\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map