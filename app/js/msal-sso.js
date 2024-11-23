/*! msal v1.0.0 2019-05-04 */
"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
    else if (typeof define === "function" && define.amd)
        define("Msal", [], factory);
    else if (typeof exports === "object") exports["Msal"] = factory();
    else root["Msal"] = factory();
})(window, function () {
    return /******/ (function (modules) {
        // webpackBootstrap
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) {
                /******/ return installedModules[moduleId].exports;
                /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = (installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {},
                /******/
            });
            /******/
            /******/ // Execute the module function
            /******/ modules[moduleId].call(
                module.exports,
                module,
                module.exports,
                __webpack_require__
            );
            /******/
            /******/ // Flag the module as loaded
            /******/ module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/ return module.exports;
            /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function (exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) {
                /******/ Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter,
                });
                /******/
            }
            /******/
        };
        /******/
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function (exports) {
            /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module",
                });
                /******/
            }
            /******/ Object.defineProperty(exports, "__esModule", {
                value: true,
            });
            /******/
        };
        /******/
        /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function (value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (
                mode & 4 &&
                typeof value === "object" &&
                value &&
                value.__esModule
            )
                return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value,
            });
            /******/ if (mode & 2 && typeof value != "string")
                for (var key in value)
                    __webpack_require__.d(
                        ns,
                        key,
                        function (key) {
                            return value[key];
                        }.bind(null, key)
                    );
            /******/ return ns;
            /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function (module) {
            /******/ var getter =
                module && module.__esModule
                    ? /******/ function getDefault() {
                          return module["default"];
                      }
                    : /******/ function getModuleExports() {
                          return module;
                      };
            /******/ __webpack_require__.d(getter, "a", getter);
            /******/ return getter;
            /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/
        /******/
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__((__webpack_require__.s = 17));
        /******/
    })(
        /************************************************************************/
        /******/ [
            /* 0 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var tslib_1 = __webpack_require__(1);
                var Constants_1 = __webpack_require__(2);
                var ClientAuthError_1 = __webpack_require__(4);
                var Constants_2 = __webpack_require__(2);
                /**
                 * @hidden
                 */
                var Utils = /** @class */ (function () {
                    function Utils() {}
                    //#region General Util
                    /**
                     * Utils function to compare two Account objects - used to check if the same user account is logged in
                     *
                     * @param a1: Account object
                     * @param a2: Account object
                     */
                    Utils.compareAccounts = function (a1, a2) {
                        if (!a1 || !a2) {
                            return false;
                        }
                        if (
                            a1.homeAccountIdentifier &&
                            a2.homeAccountIdentifier
                        ) {
                            if (
                                a1.homeAccountIdentifier ===
                                a2.homeAccountIdentifier
                            ) {
                                return true;
                            }
                        }
                        return false;
                    };
                    /**
                     * Decimal to Hex
                     *
                     * @param num
                     */
                    Utils.decimalToHex = function (num) {
                        var hex = num.toString(16);
                        while (hex.length < 2) {
                            hex = "0" + hex;
                        }
                        return hex;
                    };
                    /**
                     * MSAL JS Library Version
                     */
                    Utils.getLibraryVersion = function () {
                        return Constants_2.Library.version;
                    };
                    /**
                     * Creates a new random GUID - used to populate state?
                     * @returns string (GUID)
                     */
                    Utils.createNewGuid = function () {
                        // RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
                        // pseudo-random numbers.
                        // The algorithm is as follows:
                        //     Set the two most significant bits (bits 6 and 7) of the
                        //        clock_seq_hi_and_reserved to zero and one, respectively.
                        //     Set the four most significant bits (bits 12 through 15) of the
                        //        time_hi_and_version field to the 4-bit version number from
                        //        Section 4.1.3. Version4
                        //     Set all the other bits to randomly (or pseudo-randomly) chosen
                        //     values.
                        // UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
                        // time-low               = 4hexOctet
                        // time-mid               = 2hexOctet
                        // time-high-and-version  = 2hexOctet
                        // clock-seq-and-reserved = hexOctet:
                        // clock-seq-low          = hexOctet
                        // node                   = 6hexOctet
                        // Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
                        // y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
                        // y values are 8, 9, A, B
                        var cryptoObj = window.crypto; // for IE 11
                        if (cryptoObj && cryptoObj.getRandomValues) {
                            var buffer = new Uint8Array(16);
                            cryptoObj.getRandomValues(buffer);
                            //buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
                            buffer[6] |= 0x40; //buffer[6] | 01000000 will set the 6 bit to 1.
                            buffer[6] &= 0x4f; //buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
                            //buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
                            buffer[8] |= 0x80; //buffer[8] | 10000000 will set the 7 bit to 1.
                            buffer[8] &= 0xbf; //buffer[8] & 10111111 will set the 6 bit to 0.
                            return (
                                Utils.decimalToHex(buffer[0]) +
                                Utils.decimalToHex(buffer[1]) +
                                Utils.decimalToHex(buffer[2]) +
                                Utils.decimalToHex(buffer[3]) +
                                "-" +
                                Utils.decimalToHex(buffer[4]) +
                                Utils.decimalToHex(buffer[5]) +
                                "-" +
                                Utils.decimalToHex(buffer[6]) +
                                Utils.decimalToHex(buffer[7]) +
                                "-" +
                                Utils.decimalToHex(buffer[8]) +
                                Utils.decimalToHex(buffer[9]) +
                                "-" +
                                Utils.decimalToHex(buffer[10]) +
                                Utils.decimalToHex(buffer[11]) +
                                Utils.decimalToHex(buffer[12]) +
                                Utils.decimalToHex(buffer[13]) +
                                Utils.decimalToHex(buffer[14]) +
                                Utils.decimalToHex(buffer[15])
                            );
                        } else {
                            var guidHolder =
                                "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
                            var hex = "0123456789abcdef";
                            var r = 0;
                            var guidResponse = "";
                            for (var i = 0; i < 36; i++) {
                                if (
                                    guidHolder[i] !== "-" &&
                                    guidHolder[i] !== "4"
                                ) {
                                    // each x and y needs to be random
                                    r = (Math.random() * 16) | 0;
                                }
                                if (guidHolder[i] === "x") {
                                    guidResponse += hex[r];
                                } else if (guidHolder[i] === "y") {
                                    // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                                    r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                                    r |= 0x8; // set pos 3 to 1 as 1???
                                    guidResponse += hex[r];
                                } else {
                                    guidResponse += guidHolder[i];
                                }
                            }
                            return guidResponse;
                        }
                    };
                    //#endregion
                    //#region Time
                    /**
                     * Returns time in seconds for expiration based on string value passed in.
                     *
                     * @param expires
                     */
                    Utils.expiresIn = function (expires) {
                        // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
                        if (!expires) {
                            expires = "3599";
                        }
                        return this.now() + parseInt(expires, 10);
                    };
                    /**
                     * return the current time in Unix time. Date.getTime() returns in milliseconds.
                     */
                    Utils.now = function () {
                        return Math.round(new Date().getTime() / 1000.0);
                    };
                    //#endregion
                    //#region String Ops
                    /**
                     * Check if a string is empty
                     *
                     * @param str
                     */
                    Utils.isEmpty = function (str) {
                        return (
                            typeof str === "undefined" ||
                            !str ||
                            0 === str.length
                        );
                    };
                    //#endregion
                    //#region Token Processing (Extract to TokenProcessing.ts)
                    /**
                     * decode a JWT
                     *
                     * @param jwtToken
                     */
                    Utils.decodeJwt = function (jwtToken) {
                        if (this.isEmpty(jwtToken)) {
                            return null;
                        }
                        var idTokenPartsRegex =
                            /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
                        var matches = idTokenPartsRegex.exec(jwtToken);
                        if (!matches || matches.length < 4) {
                            //this._requestContext.logger.warn("The returned id_token is not parseable.");
                            return null;
                        }
                        var crackedToken = {
                            header: matches[1],
                            JWSPayload: matches[2],
                            JWSSig: matches[3],
                        };
                        return crackedToken;
                    };
                    /**
                     * Extract IdToken by decoding the RAWIdToken
                     *
                     * @param encodedIdToken
                     */
                    Utils.extractIdToken = function (encodedIdToken) {
                        // id token will be decoded to get the username
                        var decodedToken = this.decodeJwt(encodedIdToken);
                        if (!decodedToken) {
                            return null;
                        }
                        try {
                            var base64IdToken = decodedToken.JWSPayload;
                            var base64Decoded =
                                this.base64DecodeStringUrlSafe(base64IdToken);
                            if (!base64Decoded) {
                                //this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
                                return null;
                            }
                            // ECMA script has JSON built-in support
                            return JSON.parse(base64Decoded);
                        } catch (err) {
                            //this._requestContext.logger.error("The returned id_token could not be decoded" + err);
                        }
                        return null;
                    };
                    //#endregion
                    //#region Encode and Decode
                    /**
                     * encoding string to base64 - platform specific check
                     *
                     * @param input
                     */
                    Utils.base64EncodeStringUrlSafe = function (input) {
                        // html5 should support atob function for decoding
                        if (window.btoa) {
                            return window.btoa(input);
                        } else {
                            return this.encode(input);
                        }
                    };
                    /**
                     * decoding base64 token - platform specific check
                     *
                     * @param base64IdToken
                     */
                    Utils.base64DecodeStringUrlSafe = function (base64IdToken) {
                        // html5 should support atob function for decoding
                        base64IdToken = base64IdToken
                            .replace(/-/g, "+")
                            .replace(/_/g, "/");
                        if (window.atob) {
                            return decodeURIComponent(
                                encodeURIComponent(window.atob(base64IdToken))
                            ); // jshint ignore:line
                        } else {
                            return decodeURIComponent(
                                encodeURIComponent(this.decode(base64IdToken))
                            );
                        }
                    };
                    /**
                     * base64 encode a string
                     *
                     * @param input
                     */
                    // TODO: Rename to specify type of encoding
                    Utils.encode = function (input) {
                        var keyStr =
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        var output = "";
                        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                        var i = 0;
                        input = this.utf8Encode(input);
                        while (i < input.length) {
                            chr1 = input.charCodeAt(i++);
                            chr2 = input.charCodeAt(i++);
                            chr3 = input.charCodeAt(i++);
                            enc1 = chr1 >> 2;
                            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                            enc4 = chr3 & 63;
                            if (isNaN(chr2)) {
                                enc3 = enc4 = 64;
                            } else if (isNaN(chr3)) {
                                enc4 = 64;
                            }
                            output =
                                output +
                                keyStr.charAt(enc1) +
                                keyStr.charAt(enc2) +
                                keyStr.charAt(enc3) +
                                keyStr.charAt(enc4);
                        }
                        return output
                            .replace(/\+/g, "-")
                            .replace(/\//g, "_")
                            .replace(/=+$/, "");
                    };
                    /**
                     * utf8 encode a string
                     *
                     * @param input
                     */
                    Utils.utf8Encode = function (input) {
                        input = input.replace(/\r\n/g, "\n");
                        var utftext = "";
                        for (var n = 0; n < input.length; n++) {
                            var c = input.charCodeAt(n);
                            if (c < 128) {
                                utftext += String.fromCharCode(c);
                            } else if (c > 127 && c < 2048) {
                                utftext += String.fromCharCode((c >> 6) | 192);
                                utftext += String.fromCharCode((c & 63) | 128);
                            } else {
                                utftext += String.fromCharCode((c >> 12) | 224);
                                utftext += String.fromCharCode(
                                    ((c >> 6) & 63) | 128
                                );
                                utftext += String.fromCharCode((c & 63) | 128);
                            }
                        }
                        return utftext;
                    };
                    /**
                     * decode a base64 token string
                     *
                     * @param base64IdToken
                     */
                    // TODO: Rename to specify type of encoding
                    Utils.decode = function (base64IdToken) {
                        var codes =
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        base64IdToken = String(base64IdToken).replace(
                            /=+$/,
                            ""
                        );
                        var length = base64IdToken.length;
                        if (length % 4 === 1) {
                            throw ClientAuthError_1.ClientAuthError.createTokenEncodingError(
                                base64IdToken
                            );
                        }
                        var h1,
                            h2,
                            h3,
                            h4,
                            bits,
                            c1,
                            c2,
                            c3,
                            decoded = "";
                        for (var i = 0; i < length; i += 4) {
                            //Every 4 base64 encoded character will be converted to 3 byte string, which is 24 bits
                            // then 6 bits per base64 encoded character
                            h1 = codes.indexOf(base64IdToken.charAt(i));
                            h2 = codes.indexOf(base64IdToken.charAt(i + 1));
                            h3 = codes.indexOf(base64IdToken.charAt(i + 2));
                            h4 = codes.indexOf(base64IdToken.charAt(i + 3));
                            // For padding, if last two are "="
                            if (i + 2 === length - 1) {
                                bits = (h1 << 18) | (h2 << 12) | (h3 << 6);
                                c1 = (bits >> 16) & 255;
                                c2 = (bits >> 8) & 255;
                                decoded += String.fromCharCode(c1, c2);
                                break;
                            }
                            // if last one is "="
                            else if (i + 1 === length - 1) {
                                bits = (h1 << 18) | (h2 << 12);
                                c1 = (bits >> 16) & 255;
                                decoded += String.fromCharCode(c1);
                                break;
                            }
                            bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4;
                            // then convert to 3 byte chars
                            c1 = (bits >> 16) & 255;
                            c2 = (bits >> 8) & 255;
                            c3 = bits & 255;
                            decoded += String.fromCharCode(c1, c2, c3);
                        }
                        return decoded;
                    };
                    /**
                     * deserialize a string
                     *
                     * @param query
                     */
                    Utils.deserialize = function (query) {
                        var match; // Regex for replacing addition symbol with a space
                        var pl = /\+/g;
                        var search = /([^&=]+)=([^&]*)/g;
                        var decode = function (s) {
                            return decodeURIComponent(s.replace(pl, " "));
                        };
                        var obj = {};
                        match = search.exec(query);
                        while (match) {
                            obj[decode(match[1])] = decode(match[2]);
                            match = search.exec(query);
                        }
                        return obj;
                    };
                    //#endregion
                    //#region Scopes (extract to Scopes.ts)
                    /**
                     * Check if there are dup scopes in a given request
                     *
                     * @param cachedScopes
                     * @param scopes
                     */
                    // TODO: Rename this, intersecting scopes isn't a great name for duplicate checker
                    Utils.isIntersectingScopes = function (
                        cachedScopes,
                        scopes
                    ) {
                        cachedScopes = this.convertToLowerCase(cachedScopes);
                        for (var i = 0; i < scopes.length; i++) {
                            if (
                                cachedScopes.indexOf(scopes[i].toLowerCase()) >
                                -1
                            ) {
                                return true;
                            }
                        }
                        return false;
                    };
                    /**
                     * Check if a given scope is present in the request
                     *
                     * @param cachedScopes
                     * @param scopes
                     */
                    Utils.containsScope = function (cachedScopes, scopes) {
                        cachedScopes = this.convertToLowerCase(cachedScopes);
                        return scopes.every(function (value) {
                            return (
                                cachedScopes.indexOf(
                                    value.toString().toLowerCase()
                                ) >= 0
                            );
                        });
                    };
                    /**
                     * toLower
                     *
                     * @param scopes
                     */
                    // TODO: Rename this, too generic name for a function that only deals with scopes
                    Utils.convertToLowerCase = function (scopes) {
                        return scopes.map(function (scope) {
                            return scope.toLowerCase();
                        });
                    };
                    /**
                     * remove one element from a scope array
                     *
                     * @param scopes
                     * @param scope
                     */
                    // TODO: Rename this, too generic name for a function that only deals with scopes
                    Utils.removeElement = function (scopes, scope) {
                        return scopes.filter(function (value) {
                            return value !== scope;
                        });
                    };
                    //#endregion
                    //#region URL Processing (Extract to UrlProcessing.ts?)
                    Utils.getDefaultRedirectUri = function () {
                        return window.location.href.split("?")[0].split("#")[0];
                    };
                    /**
                     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
                     * @param href The url
                     * @param tenantId The tenant id to replace
                     */
                    Utils.replaceTenantPath = function (url, tenantId) {
                        url = url.toLowerCase();
                        var urlObject = this.GetUrlComponents(url);
                        var pathArray = urlObject.PathSegments;
                        if (
                            tenantId &&
                            pathArray.length !== 0 &&
                            (pathArray[0] === Constants_1.Constants.common ||
                                pathArray[0] ===
                                    Constants_1.SSOTypes.ORGANIZATIONS)
                        ) {
                            pathArray[0] = tenantId;
                        }
                        return this.constructAuthorityUriFromObject(
                            urlObject,
                            pathArray
                        );
                    };
                    Utils.constructAuthorityUriFromObject = function (
                        urlObject,
                        pathArray
                    ) {
                        return this.CanonicalizeUri(
                            urlObject.Protocol +
                                "//" +
                                urlObject.HostNameAndPort +
                                "/" +
                                pathArray.join("/")
                        );
                    };
                    /**
                     * Parses out the components from a url string.
                     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
                     */
                    Utils.GetUrlComponents = function (url) {
                        if (!url) {
                            throw "Url required";
                        }
                        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
                        var regEx = RegExp(
                            "^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"
                        );
                        var match = url.match(regEx);
                        if (!match || match.length < 6) {
                            throw "Valid url required";
                        }
                        var urlComponents = {
                            Protocol: match[1],
                            HostNameAndPort: match[4],
                            AbsolutePath: match[5],
                        };
                        var pathSegments =
                            urlComponents.AbsolutePath.split("/");
                        pathSegments = pathSegments.filter(function (val) {
                            return val && val.length > 0;
                        }); // remove empty elements
                        urlComponents.PathSegments = pathSegments;
                        return urlComponents;
                    };
                    /**
                     * Given a url or path, append a trailing slash if one doesnt exist
                     *
                     * @param url
                     */
                    Utils.CanonicalizeUri = function (url) {
                        if (url) {
                            url = url.toLowerCase();
                        }
                        if (url && !Utils.endsWith(url, "/")) {
                            url += "/";
                        }
                        return url;
                    };
                    /**
                     * Checks to see if the url ends with the suffix
                     * Required because we are compiling for es5 instead of es6
                     * @param url
                     * @param str
                     */
                    // TODO: Rename this, not clear what it is supposed to do
                    Utils.endsWith = function (url, suffix) {
                        if (!url || !suffix) {
                            return false;
                        }
                        return (
                            url.indexOf(suffix, url.length - suffix.length) !==
                            -1
                        );
                    };
                    /**
                     * Utils function to remove the login_hint and domain_hint from the i/p extraQueryParameters
                     * @param url
                     * @param name
                     */
                    Utils.urlRemoveQueryStringParameter = function (url, name) {
                        if (this.isEmpty(url)) {
                            return url;
                        }
                        var regex = new RegExp("(\\&" + name + "=)[^&]+");
                        url = url.replace(regex, "");
                        // name=value&
                        regex = new RegExp("(" + name + "=)[^&]+&");
                        url = url.replace(regex, "");
                        // name=value
                        regex = new RegExp("(" + name + "=)[^&]+");
                        url = url.replace(regex, "");
                        return url;
                    };
                    //#endregion
                    //#region ExtraQueryParameters Processing (Extract?)
                    /**
                     * Constructs extraQueryParameters to be sent to the server for the AuthenticationParameters set by the developer
                     * in any login() or acquireToken() calls
                     * @param idTokenObject
                     * @param extraQueryParameters
                     * @param sid
                     * @param loginHint
                     */
                    //TODO: check how this behaves when domain_hint only is sent in extraparameters and idToken has no upn.
                    Utils.constructUnifiedCacheQueryParameter = function (
                        request,
                        idTokenObject
                    ) {
                        // preference order: account > sid > login_hint
                        var ssoType;
                        var ssoData;
                        var serverReqParam = {};
                        // if account info is passed, account.sid > account.login_hint
                        if (request) {
                            if (request.account) {
                                var account = request.account;
                                if (account.sid) {
                                    ssoType = Constants_1.SSOTypes.SID;
                                    ssoData = account.sid;
                                } else if (account.userName) {
                                    ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                                    ssoData = account.userName;
                                }
                            }
                            // sid from request
                            else if (request.sid) {
                                ssoType = Constants_1.SSOTypes.SID;
                                ssoData = request.sid;
                            }
                            // loginHint from request
                            else if (request.loginHint) {
                                ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                                ssoData = request.loginHint;
                            }
                        }
                        // adalIdToken retrieved from cache
                        else if (idTokenObject) {
                            if (
                                idTokenObject.hasOwnProperty(
                                    Constants_1.Constants.upn
                                )
                            ) {
                                ssoType = Constants_1.SSOTypes.ID_TOKEN;
                                ssoData = idTokenObject.upn;
                            } else {
                                ssoType = Constants_1.SSOTypes.ORGANIZATIONS;
                                ssoData = null;
                            }
                        }
                        serverReqParam = this.addSSOParameter(ssoType, ssoData);
                        // add the HomeAccountIdentifier info/ domain_hint
                        if (
                            request &&
                            request.account &&
                            request.account.homeAccountIdentifier
                        ) {
                            serverReqParam = this.addSSOParameter(
                                Constants_1.SSOTypes.HOMEACCOUNT_ID,
                                request.account.homeAccountIdentifier,
                                serverReqParam
                            );
                        }
                        return serverReqParam;
                    };
                    /**
                     * Add SID to extraQueryParameters
                     * @param sid
                     */
                    Utils.addSSOParameter = function (
                        ssoType,
                        ssoData,
                        ssoParam
                    ) {
                        if (!ssoParam) {
                            ssoParam = {};
                        }
                        if (!ssoData) {
                            return ssoParam;
                        }
                        switch (ssoType) {
                            case Constants_1.SSOTypes.SID: {
                                ssoParam[Constants_1.SSOTypes.SID] = ssoData;
                                break;
                            }
                            case Constants_1.SSOTypes.ID_TOKEN: {
                                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] =
                                    ssoData;
                                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] =
                                    Constants_1.SSOTypes.ORGANIZATIONS;
                                break;
                            }
                            case Constants_1.SSOTypes.LOGIN_HINT: {
                                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] =
                                    ssoData;
                                break;
                            }
                            case Constants_1.SSOTypes.ORGANIZATIONS: {
                                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] =
                                    Constants_1.SSOTypes.ORGANIZATIONS;
                                break;
                            }
                            case Constants_1.SSOTypes.CONSUMERS: {
                                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] =
                                    Constants_1.SSOTypes.CONSUMERS;
                                break;
                            }
                            case Constants_1.SSOTypes.HOMEACCOUNT_ID: {
                                var homeAccountId = ssoData.split(".");
                                var uid = Utils.base64DecodeStringUrlSafe(
                                    homeAccountId[0]
                                );
                                var utid = Utils.base64DecodeStringUrlSafe(
                                    homeAccountId[1]
                                );
                                // TODO: domain_req and login_req are not needed according to eSTS team
                                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = uid;
                                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] =
                                    utid;
                                if (
                                    utid === Constants_1.Constants.consumersUtid
                                ) {
                                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] =
                                        Constants_1.SSOTypes.CONSUMERS;
                                } else {
                                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] =
                                        Constants_1.SSOTypes.ORGANIZATIONS;
                                }
                                break;
                            }
                            case Constants_1.SSOTypes.LOGIN_REQ: {
                                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] =
                                    ssoData;
                                break;
                            }
                            case Constants_1.SSOTypes.DOMAIN_REQ: {
                                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] =
                                    ssoData;
                                break;
                            }
                        }
                        return ssoParam;
                    };
                    /**
                     * Utility to generate a QueryParameterString from a Key-Value mapping of extraQueryParameters passed
                     * @param extraQueryParameters
                     */
                    Utils.generateQueryParametersString = function (
                        queryParameters
                    ) {
                        var paramsString = null;
                        if (queryParameters) {
                            Object.keys(queryParameters).forEach(function (
                                key
                            ) {
                                if (paramsString == null) {
                                    paramsString =
                                        key +
                                        "=" +
                                        encodeURIComponent(
                                            queryParameters[key]
                                        );
                                } else {
                                    paramsString +=
                                        "&" +
                                        key +
                                        "=" +
                                        encodeURIComponent(
                                            queryParameters[key]
                                        );
                                }
                            });
                        }
                        return paramsString;
                    };
                    /**
                     * Check to see if there are SSO params set in the Request
                     * @param request
                     */
                    Utils.isSSOParam = function (request) {
                        return (
                            request &&
                            (request.account ||
                                request.sid ||
                                request.loginHint)
                        );
                    };
                    //#endregion
                    //#region Response Helpers
                    Utils.setResponseIdToken = function (
                        originalResponse,
                        idToken
                    ) {
                        var response = tslib_1.__assign({}, originalResponse);
                        response.idToken = idToken;
                        if (response.idToken.objectId) {
                            response.uniqueId = response.idToken.objectId;
                        } else {
                            response.uniqueId = response.idToken.subject;
                        }
                        response.tenantId = response.idToken.tenantId;
                        return response;
                    };
                    return Utils;
                })();
                exports.Utils = Utils;

                /***/
            },
            /* 1 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
                /* global Reflect, Promise */
                Object.defineProperty(exports, "__esModule", { value: true });
                var extendStatics = function (d, b) {
                    extendStatics =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (d, b) {
                                d.__proto__ = b;
                            }) ||
                        function (d, b) {
                            for (var p in b)
                                if (b.hasOwnProperty(p)) d[p] = b[p];
                        };
                    return extendStatics(d, b);
                };
                function __extends(d, b) {
                    extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype =
                        b === null
                            ? Object.create(b)
                            : ((__.prototype = b.prototype), new __());
                }
                exports.__extends = __extends;
                exports.__assign = function () {
                    exports.__assign =
                        Object.assign ||
                        function __assign(t) {
                            for (
                                var s, i = 1, n = arguments.length;
                                i < n;
                                i++
                            ) {
                                s = arguments[i];
                                for (var p in s)
                                    if (
                                        Object.prototype.hasOwnProperty.call(
                                            s,
                                            p
                                        )
                                    )
                                        t[p] = s[p];
                            }
                            return t;
                        };
                    return exports.__assign.apply(this, arguments);
                };
                function __rest(s, e) {
                    var t = {};
                    for (var p in s)
                        if (
                            Object.prototype.hasOwnProperty.call(s, p) &&
                            e.indexOf(p) < 0
                        )
                            t[p] = s[p];
                    if (
                        s != null &&
                        typeof Object.getOwnPropertySymbols === "function"
                    )
                        for (
                            var i = 0, p = Object.getOwnPropertySymbols(s);
                            i < p.length;
                            i++
                        )
                            if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
                    return t;
                }
                exports.__rest = __rest;
                function __decorate(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.decorate === "function"
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                }
                exports.__decorate = __decorate;
                function __param(paramIndex, decorator) {
                    return function (target, key) {
                        decorator(target, key, paramIndex);
                    };
                }
                exports.__param = __param;
                function __metadata(metadataKey, metadataValue) {
                    if (
                        typeof Reflect === "object" &&
                        typeof Reflect.metadata === "function"
                    )
                        return Reflect.metadata(metadataKey, metadataValue);
                }
                exports.__metadata = __metadata;
                function __awaiter(thisArg, _arguments, P, generator) {
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
                            result.done
                                ? resolve(result.value)
                                : new P(function (resolve) {
                                      resolve(result.value);
                                  }).then(fulfilled, rejected);
                        }
                        step(
                            (generator = generator.apply(
                                thisArg,
                                _arguments || []
                            )).next()
                        );
                    });
                }
                exports.__awaiter = __awaiter;
                function __generator(thisArg, body) {
                    var _ = {
                            label: 0,
                            sent: function () {
                                if (t[0] & 1) throw t[1];
                                return t[1];
                            },
                            trys: [],
                            ops: [],
                        },
                        f,
                        y,
                        t,
                        g;
                    return (
                        (g = {
                            next: verb(0),
                            throw: verb(1),
                            return: verb(2),
                        }),
                        typeof Symbol === "function" &&
                            (g[Symbol.iterator] = function () {
                                return this;
                            }),
                        g
                    );
                    function verb(n) {
                        return function (v) {
                            return step([n, v]);
                        };
                    }
                    function step(op) {
                        if (f)
                            throw new TypeError(
                                "Generator is already executing."
                            );
                        while (_)
                            try {
                                if (
                                    ((f = 1),
                                    y &&
                                        (t =
                                            op[0] & 2
                                                ? y["return"]
                                                : op[0]
                                                ? y["throw"] ||
                                                  ((t = y["return"]) &&
                                                      t.call(y),
                                                  0)
                                                : y.next) &&
                                        !(t = t.call(y, op[1])).done)
                                )
                                    return t;
                                if (((y = 0), t)) op = [op[0] & 2, t.value];
                                switch (op[0]) {
                                    case 0:
                                    case 1:
                                        t = op;
                                        break;
                                    case 4:
                                        _.label++;
                                        return { value: op[1], done: false };
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
                                        if (
                                            !((t = _.trys),
                                            (t =
                                                t.length > 0 &&
                                                t[t.length - 1])) &&
                                            (op[0] === 6 || op[0] === 2)
                                        ) {
                                            _ = 0;
                                            continue;
                                        }
                                        if (
                                            op[0] === 3 &&
                                            (!t ||
                                                (op[1] > t[0] && op[1] < t[3]))
                                        ) {
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
                        if (op[0] & 5) throw op[1];
                        return { value: op[0] ? op[1] : void 0, done: true };
                    }
                }
                exports.__generator = __generator;
                function __exportStar(m, exports) {
                    for (var p in m)
                        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
                }
                exports.__exportStar = __exportStar;
                function __values(o) {
                    var m = typeof Symbol === "function" && o[Symbol.iterator],
                        i = 0;
                    if (m) return m.call(o);
                    return {
                        next: function () {
                            if (o && i >= o.length) o = void 0;
                            return { value: o && o[i++], done: !o };
                        },
                    };
                }
                exports.__values = __values;
                function __read(o, n) {
                    var m = typeof Symbol === "function" && o[Symbol.iterator];
                    if (!m) return o;
                    var i = m.call(o),
                        r,
                        ar = [],
                        e;
                    try {
                        while (
                            (n === void 0 || n-- > 0) &&
                            !(r = i.next()).done
                        )
                            ar.push(r.value);
                    } catch (error) {
                        e = { error: error };
                    } finally {
                        try {
                            if (r && !r.done && (m = i["return"])) m.call(i);
                        } finally {
                            if (e) throw e.error;
                        }
                    }
                    return ar;
                }
                exports.__read = __read;
                function __spread() {
                    for (var ar = [], i = 0; i < arguments.length; i++)
                        ar = ar.concat(__read(arguments[i]));
                    return ar;
                }
                exports.__spread = __spread;
                function __await(v) {
                    return this instanceof __await
                        ? ((this.v = v), this)
                        : new __await(v);
                }
                exports.__await = __await;
                function __asyncGenerator(thisArg, _arguments, generator) {
                    if (!Symbol.asyncIterator)
                        throw new TypeError(
                            "Symbol.asyncIterator is not defined."
                        );
                    var g = generator.apply(thisArg, _arguments || []),
                        i,
                        q = [];
                    return (
                        (i = {}),
                        verb("next"),
                        verb("throw"),
                        verb("return"),
                        (i[Symbol.asyncIterator] = function () {
                            return this;
                        }),
                        i
                    );
                    function verb(n) {
                        if (g[n])
                            i[n] = function (v) {
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
                        r.value instanceof __await
                            ? Promise.resolve(r.value.v).then(fulfill, reject)
                            : settle(q[0][2], r);
                    }
                    function fulfill(value) {
                        resume("next", value);
                    }
                    function reject(value) {
                        resume("throw", value);
                    }
                    function settle(f, v) {
                        if ((f(v), q.shift(), q.length))
                            resume(q[0][0], q[0][1]);
                    }
                }
                exports.__asyncGenerator = __asyncGenerator;
                function __asyncDelegator(o) {
                    var i, p;
                    return (
                        (i = {}),
                        verb("next"),
                        verb("throw", function (e) {
                            throw e;
                        }),
                        verb("return"),
                        (i[Symbol.iterator] = function () {
                            return this;
                        }),
                        i
                    );
                    function verb(n, f) {
                        i[n] = o[n]
                            ? function (v) {
                                  return (p = !p)
                                      ? {
                                            value: __await(o[n](v)),
                                            done: n === "return",
                                        }
                                      : f
                                      ? f(v)
                                      : v;
                              }
                            : f;
                    }
                }
                exports.__asyncDelegator = __asyncDelegator;
                function __asyncValues(o) {
                    if (!Symbol.asyncIterator)
                        throw new TypeError(
                            "Symbol.asyncIterator is not defined."
                        );
                    var m = o[Symbol.asyncIterator],
                        i;
                    return m
                        ? m.call(o)
                        : ((o =
                              typeof __values === "function"
                                  ? __values(o)
                                  : o[Symbol.iterator]()),
                          (i = {}),
                          verb("next"),
                          verb("throw"),
                          verb("return"),
                          (i[Symbol.asyncIterator] = function () {
                              return this;
                          }),
                          i);
                    function verb(n) {
                        i[n] =
                            o[n] &&
                            function (v) {
                                return new Promise(function (resolve, reject) {
                                    (v = o[n](v)),
                                        settle(
                                            resolve,
                                            reject,
                                            v.done,
                                            v.value
                                        );
                                });
                            };
                    }
                    function settle(resolve, reject, d, v) {
                        Promise.resolve(v).then(function (v) {
                            resolve({ value: v, done: d });
                        }, reject);
                    }
                }
                exports.__asyncValues = __asyncValues;
                function __makeTemplateObject(cooked, raw) {
                    if (Object.defineProperty) {
                        Object.defineProperty(cooked, "raw", { value: raw });
                    } else {
                        cooked.raw = raw;
                    }
                    return cooked;
                }
                exports.__makeTemplateObject = __makeTemplateObject;
                function __importStar(mod) {
                    if (mod && mod.__esModule) return mod;
                    var result = {};
                    if (mod != null)
                        for (var k in mod)
                            if (Object.hasOwnProperty.call(mod, k))
                                result[k] = mod[k];
                    result.default = mod;
                    return result;
                }
                exports.__importStar = __importStar;
                function __importDefault(mod) {
                    return mod && mod.__esModule ? mod : { default: mod };
                }
                exports.__importDefault = __importDefault;

                /***/
            },
            /* 2 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                Object.defineProperty(exports, "__esModule", { value: true });
                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                /**
                 * @hidden
                 */
                var Constants = /** @class */ (function () {
                    function Constants() {}
                    Object.defineProperty(Constants, "errorDescription", {
                        get: function () {
                            return "error_description";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "error", {
                        get: function () {
                            return "error";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "scope", {
                        get: function () {
                            return "scope";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "clientInfo", {
                        get: function () {
                            return "client_info";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "clientId", {
                        get: function () {
                            return "clientId";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "idToken", {
                        get: function () {
                            return "id_token";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "adalIdToken", {
                        get: function () {
                            return "adal.idtoken";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "accessToken", {
                        get: function () {
                            return "access_token";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "expiresIn", {
                        get: function () {
                            return "expires_in";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "sessionState", {
                        get: function () {
                            return "session_state";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "claims", {
                        get: function () {
                            return "claims";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "msalClientInfo", {
                        get: function () {
                            return "msal.client.info";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "msalError", {
                        get: function () {
                            return "msal.error";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "msalErrorDescription", {
                        get: function () {
                            return "msal.error.description";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "msalSessionState", {
                        get: function () {
                            return "msal.session.state";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "tokenKeys", {
                        get: function () {
                            return "msal.token.keys";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "accessTokenKey", {
                        get: function () {
                            return "msal.access.token.key";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "expirationKey", {
                        get: function () {
                            return "msal.expiration.key";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "stateLogin", {
                        get: function () {
                            return "msal.state.login";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "stateAcquireToken", {
                        get: function () {
                            return "msal.state.acquireToken";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "stateRenew", {
                        get: function () {
                            return "msal.state.renew";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "nonceIdToken", {
                        get: function () {
                            return "msal.nonce.idtoken";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "userName", {
                        get: function () {
                            return "msal.username";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "idTokenKey", {
                        get: function () {
                            return "msal.idtoken";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "loginRequest", {
                        get: function () {
                            return "msal.login.request";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "loginError", {
                        get: function () {
                            return "msal.login.error";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "renewStatus", {
                        get: function () {
                            return "msal.token.renew.status";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "urlHash", {
                        get: function () {
                            return "msal.urlHash";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "angularLoginRequest", {
                        get: function () {
                            return "msal.angular.login.request";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "msal", {
                        get: function () {
                            return "msal";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "no_account", {
                        get: function () {
                            return "NO_ACCOUNT";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "consumersUtid", {
                        get: function () {
                            return "9188040d-6c67-4c5b-b112-36a304b66dad";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "upn", {
                        get: function () {
                            return "upn";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "prompt_select_account", {
                        get: function () {
                            return "&prompt=select_account";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "prompt_none", {
                        get: function () {
                            return "&prompt=none";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "prompt", {
                        get: function () {
                            return "prompt";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "response_mode_fragment", {
                        get: function () {
                            return "&response_mode=fragment";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "resourceDelimiter", {
                        get: function () {
                            return "|";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(
                        Constants,
                        "tokenRenewStatusCancelled",
                        {
                            get: function () {
                                return "Canceled";
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    Object.defineProperty(
                        Constants,
                        "tokenRenewStatusCompleted",
                        {
                            get: function () {
                                return "Completed";
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    Object.defineProperty(
                        Constants,
                        "tokenRenewStatusInProgress",
                        {
                            get: function () {
                                return "In Progress";
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    Object.defineProperty(Constants, "popUpWidth", {
                        get: function () {
                            return this._popUpWidth;
                        },
                        set: function (width) {
                            this._popUpWidth = width;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "popUpHeight", {
                        get: function () {
                            return this._popUpHeight;
                        },
                        set: function (height) {
                            this._popUpHeight = height;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "login", {
                        get: function () {
                            return "LOGIN";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "renewToken", {
                        get: function () {
                            return "RENEW_TOKEN";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "unknown", {
                        get: function () {
                            return "UNKNOWN";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "homeAccountIdentifier", {
                        get: function () {
                            return "homeAccountIdentifier";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "common", {
                        get: function () {
                            return "common";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "openidScope", {
                        get: function () {
                            return "openid";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "profileScope", {
                        get: function () {
                            return "profile";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "cacheLocationLocal", {
                        get: function () {
                            return "localStorage";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(Constants, "cacheLocationSession", {
                        get: function () {
                            return "sessionStorage";
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Constants._popUpWidth = 483;
                    Constants._popUpHeight = 600;
                    return Constants;
                })();
                exports.Constants = Constants;
                /**
                 * @hidden
                 */
                exports.CacheKeys = {
                    AUTHORITY: "msal.authority",
                    ACQUIRE_TOKEN_ACCOUNT: "msal.acquireTokenAccount",
                };
                /**
                 * @hidden
                 */
                exports.SSOTypes = {
                    ACCOUNT: "account",
                    SID: "sid",
                    LOGIN_HINT: "login_hint",
                    ID_TOKEN: "id_token",
                    DOMAIN_HINT: "domain_hint",
                    ORGANIZATIONS: "organizations",
                    CONSUMERS: "consumers",
                    ACCOUNT_ID: "accountIdentifier",
                    HOMEACCOUNT_ID: "homeAccountIdentifier",
                    LOGIN_REQ: "login_req",
                    DOMAIN_REQ: "domain_req",
                };
                /**
                 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
                 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
                 * internal partners too, hence the choice of generic "string" type instead of the "enum"
                 * @hidden
                 */
                exports.PromptState = {
                    LOGIN: "login",
                    SELECT_ACCOUNT: "select_account",
                    CONSENT: "consent",
                    NONE: "none",
                };
                exports.Library = {
                    version: "1.0.0",
                };

                /***/
            },
            /* 3 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var tslib_1 = __webpack_require__(1);
                var Constants_1 = __webpack_require__(2);
                var ClientAuthError_1 = __webpack_require__(4);
                exports.ClientConfigurationErrorMessage = {
                    configurationNotSet: {
                        code: "no_config_set",
                        desc: "Configuration has not been set. Please call the UserAgentApplication constructor with a valid Configuration object.",
                    },
                    invalidCacheLocation: {
                        code: "invalid_cache_location",
                        desc: "The cache location provided is not valid.",
                    },
                    noStorageSupported: {
                        code: "browser_storage_not_supported",
                        desc: "localStorage and sessionStorage are not supported.",
                    },
                    noRedirectCallbacksSet: {
                        code: "no_redirect_callbacks",
                        desc:
                            "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. " +
                            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/-basics.",
                    },
                    invalidCallbackObject: {
                        code: "invalid_callback_object",
                        desc:
                            "The object passed for the callback was invalid. " +
                            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/-basics.",
                    },
                    scopesRequired: {
                        code: "scopes_required",
                        desc: "Scopes are required to obtain an access token.",
                    },
                    emptyScopes: {
                        code: "empty_input_scopes_error",
                        desc: "Scopes cannot be passed as empty array.",
                    },
                    nonArrayScopes: {
                        code: "nonarray_input_scopes_error",
                        desc: "Scopes cannot be passed as non-array.",
                    },
                    clientScope: {
                        code: "clientid_input_scopes_error",
                        desc: "Client ID can only be provided as a single scope.",
                    },
                    invalidPrompt: {
                        code: "invalid_prompt_value",
                        desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'",
                    },
                    invalidAuthorityType: {
                        code: "invalid_authority_type",
                        desc: "The given authority is not a valid type of authority supported by MSAL. Please see here for valid authorities: <insert URL here>.",
                    },
                    authorityUriInsecure: {
                        code: "authority_uri_insecure",
                        desc: "Authority URIs must use https.",
                    },
                    authorityUriInvalidPath: {
                        code: "authority_uri_invalid_path",
                        desc: "Given authority URI is invalid.",
                    },
                    unsupportedAuthorityValidation: {
                        code: "unsupported_authority_validation",
                        desc: "The authority validation is not supported for this authority type.",
                    },
                    b2cAuthorityUriInvalidPath: {
                        code: "b2c_authority_uri_invalid_path",
                        desc: "The given URI for the B2C authority is invalid.",
                    },
                    claimsRequestParsingError: {
                        code: "claims_request_parsing_error",
                        desc: "Could not parse the given claims request object.",
                    },
                };
                /**
                 * Error thrown when there is an error in configuration of the .js library.
                 */
                var ClientConfigurationError = /** @class */ (function (
                    _super
                ) {
                    tslib_1.__extends(ClientConfigurationError, _super);
                    function ClientConfigurationError(errorCode, errorMessage) {
                        var _this =
                            _super.call(this, errorCode, errorMessage) || this;
                        _this.name = "ClientConfigurationError";
                        Object.setPrototypeOf(
                            _this,
                            ClientConfigurationError.prototype
                        );
                        return _this;
                    }
                    ClientConfigurationError.createNoSetConfigurationError =
                        function () {
                            return new ClientConfigurationError(
                                exports.ClientConfigurationErrorMessage.configurationNotSet.code,
                                "" +
                                    exports.ClientConfigurationErrorMessage
                                        .configurationNotSet.desc
                            );
                        };
                    ClientConfigurationError.createInvalidCacheLocationConfigError =
                        function (givenCacheLocation) {
                            return new ClientConfigurationError(
                                exports.ClientConfigurationErrorMessage.invalidCacheLocation.code,
                                exports.ClientConfigurationErrorMessage
                                    .invalidCacheLocation.desc +
                                    " Provided value: " +
                                    givenCacheLocation +
                                    ". Possible values are: " +
                                    Constants_1.Constants.cacheLocationLocal +
                                    ", " +
                                    Constants_1.Constants.cacheLocationSession +
                                    "."
                            );
                        };
                    ClientConfigurationError.createNoStorageSupportedError =
                        function () {
                            return new ClientConfigurationError(
                                exports.ClientConfigurationErrorMessage.noStorageSupported.code,
                                exports.ClientConfigurationErrorMessage.noStorageSupported.desc
                            );
                        };
                    ClientConfigurationError.createRedirectCallbacksNotSetError =
                        function () {
                            return new ClientConfigurationError(
                                exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.code,
                                exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.desc
                            );
                        };
                    ClientConfigurationError.createInvalidCallbackObjectError =
                        function (callbackObject) {
                            return new ClientConfigurationError(
                                exports.ClientConfigurationErrorMessage.invalidCallbackObject.code,
                                exports.ClientConfigurationErrorMessage
                                    .invalidCallbackObject.desc +
                                    " Given value for callback function: " +
                                    callbackObject
                            );
                        };
                    ClientConfigurationError.createEmptyScopesArrayError =
                        function (scopesValue) {
                            return new ClientConfigurationError(
                                exports.ClientConfigurationErrorMessage.emptyScopes.code,
                                exports.ClientConfigurationErrorMessage
                                    .emptyScopes.desc +
                                    " Given value: " +
                                    scopesValue +
                                    "."
                            );
                        };
                    ClientConfigurationError.createScopesNonArrayError =
                        function (scopesValue) {
                            return new ClientConfigurationError(
                                exports.ClientConfigurationErrorMessage.nonArrayScopes.code,
                                exports.ClientConfigurationErrorMessage
                                    .nonArrayScopes.desc +
                                    " Given value: " +
                                    scopesValue +
                                    "."
                            );
                        };
                    ClientConfigurationError.createClientIdSingleScopeError =
                        function (scopesValue) {
                            return new ClientConfigurationError(
                                exports.ClientConfigurationErrorMessage.clientScope.code,
                                exports.ClientConfigurationErrorMessage
                                    .clientScope.desc +
                                    " Given value: " +
                                    scopesValue +
                                    "."
                            );
                        };
                    ClientConfigurationError.createScopesRequiredError =
                        function (scopesValue) {
                            return new ClientConfigurationError(
                                exports.ClientConfigurationErrorMessage.scopesRequired.code,
                                exports.ClientConfigurationErrorMessage
                                    .scopesRequired.desc +
                                    " Given value: " +
                                    scopesValue
                            );
                        };
                    ClientConfigurationError.createInvalidPromptError =
                        function (promptValue) {
                            return new ClientConfigurationError(
                                exports.ClientConfigurationErrorMessage.invalidPrompt.code,
                                exports.ClientConfigurationErrorMessage
                                    .invalidPrompt.desc +
                                    " Given value: " +
                                    promptValue
                            );
                        };
                    ClientConfigurationError.createClaimsRequestParsingError =
                        function (claimsRequestParseError) {
                            return new ClientConfigurationError(
                                exports.ClientConfigurationErrorMessage.claimsRequestParsingError.code,
                                exports.ClientConfigurationErrorMessage
                                    .claimsRequestParsingError.desc +
                                    " Given value: " +
                                    claimsRequestParseError
                            );
                        };
                    return ClientConfigurationError;
                })(ClientAuthError_1.ClientAuthError);
                exports.ClientConfigurationError = ClientConfigurationError;

                /***/
            },
            /* 4 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var tslib_1 = __webpack_require__(1);
                var AuthError_1 = __webpack_require__(5);
                var Utils_1 = __webpack_require__(0);
                exports.ClientAuthErrorMessage = {
                    multipleMatchingTokens: {
                        code: "multiple_matching_tokens",
                        desc:
                            "The cache contains multiple tokens satisfying the requirements. " +
                            "Call AcquireToken again providing more requirements like authority.",
                    },
                    multipleCacheAuthorities: {
                        code: "multiple_authorities",
                        desc: "Multiple authorities found in the cache. Pass authority in the API overload.",
                    },
                    endpointResolutionError: {
                        code: "endpoints_resolution_error",
                        desc: "Error: could not resolve endpoints. Please check network and try again.",
                    },
                    popUpWindowError: {
                        code: "popup_window_error",
                        desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser.",
                    },
                    tokenRenewalError: {
                        code: "token_renewal_error",
                        desc: "Token renewal operation failed due to timeout.",
                    },
                    invalidIdToken: {
                        code: "invalid_id_token",
                        desc: "Invalid ID token format.",
                    },
                    invalidStateError: {
                        code: "invalid_state_error",
                        desc: "Invalid state.",
                    },
                    nonceMismatchError: {
                        code: "nonce_mismatch_error",
                        desc: "Nonce is not matching, Nonce received: ",
                    },
                    loginProgressError: {
                        code: "login_progress_error",
                        desc: "Login_In_Progress: Error during login call - login is already in progress.",
                    },
                    acquireTokenProgressError: {
                        code: "acquiretoken_progress_error",
                        desc: "AcquireToken_In_Progress: Error during login call - login is already in progress.",
                    },
                    userCancelledError: {
                        code: "user_cancelled",
                        desc: "User cancelled the flow.",
                    },
                    callbackError: {
                        code: "callback_error",
                        desc: "Error occurred in token received callback function.",
                    },
                    userLoginRequiredError: {
                        code: "user_login_error",
                        desc: "User login is required.",
                    },
                    userDoesNotExistError: {
                        code: "user_non_existent",
                        desc: "User object does not exist. Please call a login API.",
                    },
                    clientInfoDecodingError: {
                        code: "client_info_decoding_error",
                        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause.",
                    },
                    clientInfoNotPopulatedError: {
                        code: "client_info_not_populated_error",
                        desc: "The service did not populate client_info in the response, Please verify with the service team",
                    },
                    nullOrEmptyIdToken: {
                        code: "null_or_empty_id_token",
                        desc: "The idToken is null or empty. Please review the trace to determine the root cause.",
                    },
                    idTokenNotParsed: {
                        code: "id_token_parsing_error",
                        desc: "ID token cannot be parsed. Please review stack trace to determine root cause.",
                    },
                    tokenEncodingError: {
                        code: "token_encoding_error",
                        desc: "The token to be decoded is not encoded correctly.",
                    },
                };
                /**
                 * Error thrown when there is an error in the client code running on the browser.
                 */
                var ClientAuthError = /** @class */ (function (_super) {
                    tslib_1.__extends(ClientAuthError, _super);
                    function ClientAuthError(errorCode, errorMessage) {
                        var _this =
                            _super.call(this, errorCode, errorMessage) || this;
                        _this.name = "ClientAuthError";
                        Object.setPrototypeOf(_this, ClientAuthError.prototype);
                        return _this;
                    }
                    ClientAuthError.createEndpointResolutionError = function (
                        errDetail
                    ) {
                        var errorMessage =
                            exports.ClientAuthErrorMessage
                                .endpointResolutionError.desc;
                        if (errDetail && !Utils_1.Utils.isEmpty(errDetail)) {
                            errorMessage += " Details: " + errDetail;
                        }
                        return new ClientAuthError(
                            exports.ClientAuthErrorMessage.endpointResolutionError.code,
                            errorMessage
                        );
                    };
                    ClientAuthError.createMultipleMatchingTokensInCacheError =
                        function (scope) {
                            return new ClientAuthError(
                                exports.ClientAuthErrorMessage.multipleMatchingTokens.code,
                                "Cache error for scope " +
                                    scope +
                                    ": " +
                                    exports.ClientAuthErrorMessage
                                        .multipleMatchingTokens.desc +
                                    "."
                            );
                        };
                    ClientAuthError.createMultipleAuthoritiesInCacheError =
                        function (scope) {
                            return new ClientAuthError(
                                exports.ClientAuthErrorMessage.multipleCacheAuthorities.code,
                                "Cache error for scope " +
                                    scope +
                                    ": " +
                                    exports.ClientAuthErrorMessage
                                        .multipleCacheAuthorities.desc +
                                    "."
                            );
                        };
                    ClientAuthError.createPopupWindowError = function (
                        errDetail
                    ) {
                        var errorMessage =
                            exports.ClientAuthErrorMessage.popUpWindowError
                                .desc;
                        if (errDetail && !Utils_1.Utils.isEmpty(errDetail)) {
                            errorMessage += " Details: " + errDetail;
                        }
                        return new ClientAuthError(
                            exports.ClientAuthErrorMessage.popUpWindowError.code,
                            errorMessage
                        );
                    };
                    ClientAuthError.createTokenRenewalTimeoutError =
                        function () {
                            return new ClientAuthError(
                                exports.ClientAuthErrorMessage.tokenRenewalError.code,
                                exports.ClientAuthErrorMessage.tokenRenewalError.desc
                            );
                        };
                    ClientAuthError.createInvalidIdTokenError = function (
                        idToken
                    ) {
                        return new ClientAuthError(
                            exports.ClientAuthErrorMessage.invalidIdToken.code,
                            exports.ClientAuthErrorMessage.invalidIdToken.desc +
                                " Given token: " +
                                idToken
                        );
                    };
                    //TODO: Is this not a security flaw to send the user the state expected??
                    ClientAuthError.createInvalidStateError = function (
                        invalidState,
                        actualState
                    ) {
                        return new ClientAuthError(
                            exports.ClientAuthErrorMessage.invalidStateError.code,
                            exports.ClientAuthErrorMessage.invalidStateError
                                .desc +
                                " " +
                                invalidState +
                                ", state expected : " +
                                actualState +
                                "."
                        );
                    };
                    //TODO: Is this not a security flaw to send the user the Nonce expected??
                    ClientAuthError.createNonceMismatchError = function (
                        invalidNonce,
                        actualNonce
                    ) {
                        return new ClientAuthError(
                            exports.ClientAuthErrorMessage.nonceMismatchError.code,
                            exports.ClientAuthErrorMessage.nonceMismatchError
                                .desc +
                                " " +
                                invalidNonce +
                                ", nonce expected : " +
                                actualNonce +
                                "."
                        );
                    };
                    ClientAuthError.createLoginInProgressError = function () {
                        return new ClientAuthError(
                            exports.ClientAuthErrorMessage.loginProgressError.code,
                            exports.ClientAuthErrorMessage.loginProgressError.desc
                        );
                    };
                    ClientAuthError.createAcquireTokenInProgressError =
                        function () {
                            return new ClientAuthError(
                                exports.ClientAuthErrorMessage.acquireTokenProgressError.code,
                                exports.ClientAuthErrorMessage.acquireTokenProgressError.desc
                            );
                        };
                    ClientAuthError.createUserCancelledError = function () {
                        return new ClientAuthError(
                            exports.ClientAuthErrorMessage.userCancelledError.code,
                            exports.ClientAuthErrorMessage.userCancelledError.desc
                        );
                    };
                    ClientAuthError.createErrorInCallbackFunction = function (
                        errorDesc
                    ) {
                        return new ClientAuthError(
                            exports.ClientAuthErrorMessage.callbackError.code,
                            exports.ClientAuthErrorMessage.callbackError.desc +
                                " " +
                                errorDesc +
                                "."
                        );
                    };
                    ClientAuthError.createUserLoginRequiredError = function () {
                        return new ClientAuthError(
                            exports.ClientAuthErrorMessage.userLoginRequiredError.code,
                            exports.ClientAuthErrorMessage.userLoginRequiredError.desc
                        );
                    };
                    ClientAuthError.createUserDoesNotExistError = function () {
                        return new ClientAuthError(
                            exports.ClientAuthErrorMessage.userDoesNotExistError.code,
                            exports.ClientAuthErrorMessage.userDoesNotExistError.desc
                        );
                    };
                    ClientAuthError.createClientInfoDecodingError = function (
                        caughtError
                    ) {
                        return new ClientAuthError(
                            exports.ClientAuthErrorMessage.clientInfoDecodingError.code,
                            exports.ClientAuthErrorMessage
                                .clientInfoDecodingError.desc +
                                " Failed with error: " +
                                caughtError
                        );
                    };
                    ClientAuthError.createClientInfoNotPopulatedError =
                        function (caughtError) {
                            return new ClientAuthError(
                                exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.code,
                                exports.ClientAuthErrorMessage
                                    .clientInfoNotPopulatedError.desc +
                                    " Failed with error: " +
                                    caughtError
                            );
                        };
                    ClientAuthError.createIdTokenNullOrEmptyError = function (
                        invalidRawTokenString
                    ) {
                        return new ClientAuthError(
                            exports.ClientAuthErrorMessage.nullOrEmptyIdToken.code,
                            exports.ClientAuthErrorMessage.nullOrEmptyIdToken
                                .desc +
                                " Raw ID Token Value: " +
                                invalidRawTokenString
                        );
                    };
                    ClientAuthError.createIdTokenParsingError = function (
                        caughtParsingError
                    ) {
                        return new ClientAuthError(
                            exports.ClientAuthErrorMessage.idTokenNotParsed.code,
                            exports.ClientAuthErrorMessage.idTokenNotParsed
                                .desc +
                                " Failed with error: " +
                                caughtParsingError
                        );
                    };
                    ClientAuthError.createTokenEncodingError = function (
                        incorrectlyEncodedToken
                    ) {
                        return new ClientAuthError(
                            exports.ClientAuthErrorMessage.tokenEncodingError.code,
                            exports.ClientAuthErrorMessage.tokenEncodingError
                                .desc +
                                " Attempted to decode: " +
                                incorrectlyEncodedToken
                        );
                    };
                    return ClientAuthError;
                })(AuthError_1.AuthError);
                exports.ClientAuthError = ClientAuthError;

                /***/
            },
            /* 5 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var tslib_1 = __webpack_require__(1);
                exports.AuthErrorMessage = {
                    unexpectedError: {
                        code: "unexpected_error",
                        desc: "Unexpected error in authentication.",
                    },
                };
                /**
                 * General error class thrown by the MSAL.js library.
                 */
                var AuthError = /** @class */ (function (_super) {
                    tslib_1.__extends(AuthError, _super);
                    function AuthError(errorCode, errorMessage) {
                        var _this = _super.call(this, errorMessage) || this;
                        Object.setPrototypeOf(_this, AuthError.prototype);
                        _this.errorCode = errorCode;
                        _this.errorMessage = errorMessage;
                        _this.name = "AuthError";
                        return _this;
                    }
                    AuthError.createUnexpectedError = function (errDesc) {
                        return new AuthError(
                            exports.AuthErrorMessage.unexpectedError.code,
                            exports.AuthErrorMessage.unexpectedError.desc +
                                ": " +
                                errDesc
                        );
                    };
                    return AuthError;
                })(Error);
                exports.AuthError = AuthError;

                /***/
            },
            /* 6 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var Utils_1 = __webpack_require__(0);
                var ClientConfigurationError_1 = __webpack_require__(3);
                var XHRClient_1 = __webpack_require__(12);
                /**
                 * @hidden
                 */
                var AuthorityType;
                (function (AuthorityType) {
                    AuthorityType[(AuthorityType["Aad"] = 0)] = "Aad";
                    AuthorityType[(AuthorityType["Adfs"] = 1)] = "Adfs";
                    AuthorityType[(AuthorityType["B2C"] = 2)] = "B2C";
                })(
                    (AuthorityType =
                        exports.AuthorityType || (exports.AuthorityType = {}))
                );
                /**
                 * @hidden
                 */
                var Authority = /** @class */ (function () {
                    function Authority(authority, validateAuthority) {
                        this.IsValidationEnabled = validateAuthority;
                        this.CanonicalAuthority = authority;
                        this.validateAsUri();
                    }
                    Object.defineProperty(Authority.prototype, "Tenant", {
                        get: function () {
                            return this.CanonicalAuthorityUrlComponents
                                .PathSegments[0];
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(
                        Authority.prototype,
                        "AuthorizationEndpoint",
                        {
                            get: function () {
                                this.validateResolved();
                                return this.tenantDiscoveryResponse.AuthorizationEndpoint.replace(
                                    "{tenant}",
                                    this.Tenant
                                );
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    Object.defineProperty(
                        Authority.prototype,
                        "EndSessionEndpoint",
                        {
                            get: function () {
                                this.validateResolved();
                                return this.tenantDiscoveryResponse.EndSessionEndpoint.replace(
                                    "{tenant}",
                                    this.Tenant
                                );
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    Object.defineProperty(
                        Authority.prototype,
                        "SelfSignedJwtAudience",
                        {
                            get: function () {
                                this.validateResolved();
                                return this.tenantDiscoveryResponse.Issuer.replace(
                                    "{tenant}",
                                    this.Tenant
                                );
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    Authority.prototype.validateResolved = function () {
                        if (!this.tenantDiscoveryResponse) {
                            throw "Please call ResolveEndpointsAsync first";
                        }
                    };
                    Object.defineProperty(
                        Authority.prototype,
                        "CanonicalAuthority",
                        {
                            /**
                             * A URL that is the authority set by the developer
                             */
                            get: function () {
                                return this.canonicalAuthority;
                            },
                            set: function (url) {
                                this.canonicalAuthority =
                                    Utils_1.Utils.CanonicalizeUri(url);
                                this.canonicalAuthorityUrlComponents = null;
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    Object.defineProperty(
                        Authority.prototype,
                        "CanonicalAuthorityUrlComponents",
                        {
                            get: function () {
                                if (!this.canonicalAuthorityUrlComponents) {
                                    this.canonicalAuthorityUrlComponents =
                                        Utils_1.Utils.GetUrlComponents(
                                            this.CanonicalAuthority
                                        );
                                }
                                return this.canonicalAuthorityUrlComponents;
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    Object.defineProperty(
                        Authority.prototype,
                        "DefaultOpenIdConfigurationEndpoint",
                        {
                            /**
                             * // http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
                             */
                            get: function () {
                                return (
                                    this.CanonicalAuthority +
                                    "v2.0/.well-known/openid-configuration"
                                );
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    /**
                     * Given a string, validate that it is of the form https://domain/path
                     */
                    Authority.prototype.validateAsUri = function () {
                        var components;
                        try {
                            components = this.CanonicalAuthorityUrlComponents;
                        } catch (e) {
                            throw ClientConfigurationError_1
                                .ClientConfigurationErrorMessage
                                .invalidAuthorityType;
                        }
                        if (
                            !components.Protocol ||
                            components.Protocol.toLowerCase() !== "https:"
                        ) {
                            throw ClientConfigurationError_1
                                .ClientConfigurationErrorMessage
                                .authorityUriInsecure;
                        }
                        if (
                            !components.PathSegments ||
                            components.PathSegments.length < 1
                        ) {
                            throw ClientConfigurationError_1
                                .ClientConfigurationErrorMessage
                                .authorityUriInvalidPath;
                        }
                    };
                    /**
                     * Calls the OIDC endpoint and returns the response
                     */
                    Authority.prototype.DiscoverEndpoints = function (
                        openIdConfigurationEndpoint
                    ) {
                        var client = new XHRClient_1.XhrClient();
                        return client
                            .sendRequestAsync(
                                openIdConfigurationEndpoint,
                                "GET",
                                /*enableCaching: */ true
                            )
                            .then(function (response) {
                                return {
                                    AuthorizationEndpoint:
                                        response.authorization_endpoint,
                                    EndSessionEndpoint:
                                        response.end_session_endpoint,
                                    Issuer: response.issuer,
                                };
                            });
                    };
                    /**
                     * Returns a promise.
                     * Checks to see if the authority is in the cache
                     * Discover endpoints via openid-configuration
                     * If successful, caches the endpoint for later use in OIDC
                     */
                    Authority.prototype.resolveEndpointsAsync = function () {
                        var _this = this;
                        var openIdConfigurationEndpoint = "";
                        return this.GetOpenIdConfigurationEndpointAsync()
                            .then(function (
                                openIdConfigurationEndpointResponse
                            ) {
                                openIdConfigurationEndpoint =
                                    openIdConfigurationEndpointResponse;
                                return _this.DiscoverEndpoints(
                                    openIdConfigurationEndpoint
                                );
                            })
                            .then(function (tenantDiscoveryResponse) {
                                _this.tenantDiscoveryResponse =
                                    tenantDiscoveryResponse;
                                return _this;
                            });
                    };
                    return Authority;
                })();
                exports.Authority = Authority;

                /***/
            },
            /* 7 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var Utils_1 = __webpack_require__(0);
                var LogLevel;
                (function (LogLevel) {
                    LogLevel[(LogLevel["Error"] = 0)] = "Error";
                    LogLevel[(LogLevel["Warning"] = 1)] = "Warning";
                    LogLevel[(LogLevel["Info"] = 2)] = "Info";
                    LogLevel[(LogLevel["Verbose"] = 3)] = "Verbose";
                })((LogLevel = exports.LogLevel || (exports.LogLevel = {})));
                var Logger = /** @class */ (function () {
                    function Logger(localCallback, options) {
                        if (options === void 0) {
                            options = {};
                        }
                        /**
                         * @hidden
                         */
                        this.level = LogLevel.Info;
                        var _a = options.correlationId,
                            correlationId = _a === void 0 ? "" : _a,
                            _b = options.level,
                            level = _b === void 0 ? LogLevel.Info : _b,
                            _c = options.piiLoggingEnabled,
                            piiLoggingEnabled = _c === void 0 ? false : _c;
                        this.localCallback = localCallback;
                        this.correlationId = correlationId;
                        this.level = level;
                        this.piiLoggingEnabled = piiLoggingEnabled;
                    }
                    /**
                     * @hidden
                     */
                    Logger.prototype.logMessage = function (
                        logLevel,
                        logMessage,
                        containsPii
                    ) {
                        if (
                            logLevel > this.level ||
                            (!this.piiLoggingEnabled && containsPii)
                        ) {
                            return;
                        }
                        var timestamp = new Date().toUTCString();
                        var log;
                        if (!Utils_1.Utils.isEmpty(this.correlationId)) {
                            log =
                                timestamp +
                                ":" +
                                this.correlationId +
                                "-" +
                                Utils_1.Utils.getLibraryVersion() +
                                "-" +
                                LogLevel[logLevel] +
                                " " +
                                logMessage;
                        } else {
                            log =
                                timestamp +
                                ":" +
                                Utils_1.Utils.getLibraryVersion() +
                                "-" +
                                LogLevel[logLevel] +
                                " " +
                                logMessage;
                        }
                        this.executeCallback(logLevel, log, containsPii);
                    };
                    /**
                     * @hidden
                     */
                    Logger.prototype.executeCallback = function (
                        level,
                        message,
                        containsPii
                    ) {
                        if (this.localCallback) {
                            this.localCallback(level, message, containsPii);
                        }
                    };
                    /**
                     * @hidden
                     */
                    Logger.prototype.error = function (message) {
                        this.logMessage(LogLevel.Error, message, false);
                    };
                    /**
                     * @hidden
                     */
                    Logger.prototype.errorPii = function (message) {
                        this.logMessage(LogLevel.Error, message, true);
                    };
                    /**
                     * @hidden
                     */
                    Logger.prototype.warning = function (message) {
                        this.logMessage(LogLevel.Warning, message, false);
                    };
                    /**
                     * @hidden
                     */
                    Logger.prototype.warningPii = function (message) {
                        this.logMessage(LogLevel.Warning, message, true);
                    };
                    /**
                     * @hidden
                     */
                    Logger.prototype.info = function (message) {
                        this.logMessage(LogLevel.Info, message, false);
                    };
                    /**
                     * @hidden
                     */
                    Logger.prototype.infoPii = function (message) {
                        this.logMessage(LogLevel.Info, message, true);
                    };
                    /**
                     * @hidden
                     */
                    Logger.prototype.verbose = function (message) {
                        this.logMessage(LogLevel.Verbose, message, false);
                    };
                    /**
                     * @hidden
                     */
                    Logger.prototype.verbosePii = function (message) {
                        this.logMessage(LogLevel.Verbose, message, true);
                    };
                    return Logger;
                })();
                exports.Logger = Logger;

                /***/
            },
            /* 8 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var tslib_1 = __webpack_require__(1);
                var AuthError_1 = __webpack_require__(5);
                exports.ServerErrorMessage = {
                    serverUnavailable: {
                        code: "server_unavailable",
                        desc: "Server is temporarily unavailable.",
                    },
                    unknownServerError: {
                        code: "unknown_server_error",
                    },
                };
                /**
                 * Error thrown when there is an error with the server code, for example, unavailability.
                 */
                var ServerError = /** @class */ (function (_super) {
                    tslib_1.__extends(ServerError, _super);
                    function ServerError(errorCode, errorMessage) {
                        var _this =
                            _super.call(this, errorCode, errorMessage) || this;
                        _this.name = "ServerError";
                        Object.setPrototypeOf(_this, ServerError.prototype);
                        return _this;
                    }
                    ServerError.createServerUnavailableError = function () {
                        return new ServerError(
                            exports.ServerErrorMessage.serverUnavailable.code,
                            exports.ServerErrorMessage.serverUnavailable.desc
                        );
                    };
                    ServerError.createUnknownServerError = function (
                        errorDesc
                    ) {
                        return new ServerError(
                            exports.ServerErrorMessage.unknownServerError.code,
                            errorDesc
                        );
                    };
                    return ServerError;
                })(AuthError_1.AuthError);
                exports.ServerError = ServerError;

                /***/
            },
            /* 9 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var tslib_1 = __webpack_require__(1);
                var AccessTokenKey_1 = __webpack_require__(19);
                var AccessTokenValue_1 = __webpack_require__(20);
                var ServerRequestParameters_1 = __webpack_require__(21);
                var ClientInfo_1 = __webpack_require__(22);
                var Constants_1 = __webpack_require__(2);
                var IdToken_1 = __webpack_require__(23);
                var Storage_1 = __webpack_require__(24);
                var Account_1 = __webpack_require__(10);
                var Utils_1 = __webpack_require__(0);
                var AuthorityFactory_1 = __webpack_require__(26);
                var Configuration_1 = __webpack_require__(13);
                var AuthenticationParameters_1 = __webpack_require__(14);
                var ClientConfigurationError_1 = __webpack_require__(3);
                var AuthError_1 = __webpack_require__(5);
                var ClientAuthError_1 = __webpack_require__(4);
                var ServerError_1 = __webpack_require__(8);
                var InteractionRequiredAuthError_1 = __webpack_require__(15);
                var AuthResponse_1 = __webpack_require__(16);
                // default authority
                var DEFAULT_AUTHORITY =
                    "https://login.microsoftonline.com/common";
                /**
                 * @hidden
                 * response_type from OpenIDConnect
                 * References: https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html & https://tools.ietf.org/html/rfc6749#section-4.2.1
                 * Since we support only implicit flow in this library, we restrict the response_type support to only 'token' and 'id_token'
                 *
                 */
                var ResponseTypes = {
                    id_token: "id_token",
                    token: "token",
                    id_token_token: "id_token token",
                };
                /**
                 * @hidden
                 * A wrapper to handle the token response/error within the iFrame always
                 *
                 * @param target
                 * @param propertyKey
                 * @param descriptor
                 */
                var resolveTokenOnlyIfOutOfIframe = function (
                    target,
                    propertyKey,
                    descriptor
                ) {
                    var tokenAcquisitionMethod = descriptor.value;
                    descriptor.value = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return this.isInIframe()
                            ? new Promise(function () {
                                  return;
                              })
                            : tokenAcquisitionMethod.apply(this, args);
                    };
                    return descriptor;
                };
                /**
                 * UserAgentApplication class : {@link UserAgentApplication}
                 * Object Instance that the developer can use to make loginXX OR acquireTokenXX functions
                 */
                var UserAgentApplication = /** @class */ (function () {
                    /**
                     * Constructor for the {@link UserAgentApplication} object
                     * This is to be able to instantiate the {@link UserAgentApplication} object
                     * @constructor
                     *
                     * Important attributes to configure are:
                     * - clientID: the application ID of your application. You get obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
                     * - authority: the authority URL for your application
                     * @param {@link Configuration} configuration object for the MSAL UserAgentApplication instance
                     */
                    function UserAgentApplication(configuration) {
                        // callbacks for token/error
                        this.authResponseCallback = null;
                        this.tokenReceivedCallback = null;
                        this.errorReceivedCallback = null;
                        // Set the Configuration
                        this.config =
                            Configuration_1.buildConfiguration(configuration);
                        // Set the callback boolean
                        this.redirectCallbacksSet = false;
                        this.logger = this.config.system.logger;
                        this.clientId = this.config.auth.clientId;
                        this.inCookie =
                            this.config.cache.storeAuthStateInCookie;
                        // if no authority is passed, set the default: "https://login.microsoftonline.com/common"
                        this.authority =
                            this.config.auth.authority || DEFAULT_AUTHORITY;
                        // track login and acquireToken in progress
                        this.loginInProgress = false;
                        this.acquireTokenInProgress = false;
                        // cache keys msal - typescript throws an error if any value other than "localStorage" or "sessionStorage" is passed
                        try {
                            this.cacheStorage = new Storage_1.Storage(
                                this.config.cache.cacheLocation
                            );
                        } catch (e) {
                            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCacheLocationConfigError(
                                this.config.cache.cacheLocation
                            );
                        }
                        // Initialize window handling code
                        window.openedWindows = [];
                        window.activeRenewals = {};
                        window.renewStates = [];
                        window.callbackMappedToRenewStates = {};
                        window.promiseMappedToRenewStates = {};
                        window.msal = this;
                        var urlHash = window.location.hash;
                        var isCallback = this.isCallback(urlHash);
                        // On the server 302 - Redirect, handle this
                        if (!this.config.framework.isAngular) {
                            if (isCallback) {
                                this.handleAuthenticationResponse(urlHash);
                            }
                        }
                    }
                    Object.defineProperty(
                        UserAgentApplication.prototype,
                        "authority",
                        {
                            /**
                             * returns the authority, where authority is a URL indicating the directory that MSAL can use to obtain tokens
                             * - In Azure AD, this attribute is a URL indicating the Azure active directory that MSAL uses to obtain tokens
                             * It is of the form https://login.microsoftonline.com/&lt;Enter_the_Tenant_Info_Here&gt;
                             * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com)
                             * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations
                             * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
                             * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
                             * - In Azure B2C, it is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/<policyName>/
                             *
                             * @returns {string} authority
                             */
                            get: function () {
                                return this.authorityInstance
                                    .CanonicalAuthority;
                            },
                            /**
                             * setter for the authority URL
                             * @param {string} authority
                             */
                            // If the developer passes an authority, create an instance
                            set: function (val) {
                                this.authorityInstance =
                                    AuthorityFactory_1.AuthorityFactory.CreateInstance(
                                        val,
                                        this.config.auth.validateAuthority
                                    );
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    /**
                     * returns the authority instance
                     * @returns authority {@link Authority}
                     */
                    UserAgentApplication.prototype.getAuthorityInstance =
                        function () {
                            return this.authorityInstance;
                        };
                    UserAgentApplication.prototype.handleRedirectCallback =
                        function (authOrTokenCallback, errorReceivedCallback) {
                            if (!authOrTokenCallback) {
                                this.redirectCallbacksSet = false;
                                throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCallbackObjectError(
                                    authOrTokenCallback
                                );
                            }
                            // Set callbacks
                            if (errorReceivedCallback) {
                                this.tokenReceivedCallback =
                                    authOrTokenCallback;
                                this.errorReceivedCallback =
                                    errorReceivedCallback;
                                this.logger.warning(
                                    "This overload for callback is deprecated - please change the format of the callbacks to a single callback as shown: (err: AuthError, response: AuthResponse)."
                                );
                            } else {
                                this.authResponseCallback = authOrTokenCallback;
                            }
                            this.redirectCallbacksSet = true;
                            // On the server 302 - Redirect, handle this
                            if (!this.config.framework.isAngular) {
                                var cachedHash = this.cacheStorage.getItem(
                                    Constants_1.Constants.urlHash
                                );
                                if (cachedHash) {
                                    this.processCallBack(cachedHash, null);
                                }
                            }
                        };
                    UserAgentApplication.prototype.redirectSuccessHandler =
                        function (response) {
                            if (this.errorReceivedCallback) {
                                this.tokenReceivedCallback(response);
                            } else if (this.authResponseCallback) {
                                this.authResponseCallback(null, response);
                            }
                        };
                    UserAgentApplication.prototype.redirectErrorHandler =
                        function (authErr, response) {
                            if (this.errorReceivedCallback) {
                                this.errorReceivedCallback(
                                    authErr,
                                    response.accountState
                                );
                            } else {
                                this.authResponseCallback(authErr, response);
                            }
                        };
                    //#endregion
                    //#region Redirect Flow
                    /**
                     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint.
                     * @param {@link AuthenticationParameters}
                     */
                    UserAgentApplication.prototype.loginRedirect = function (
                        request
                    ) {
                        var _this = this;
                        // Throw error if callbacks are not set before redirect
                        if (!this.redirectCallbacksSet) {
                            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
                        }
                        // Creates navigate url; saves value in cache; redirect user to AAD
                        if (this.loginInProgress) {
                            var reqState = void 0;
                            if (request) {
                                reqState = request.state;
                            }
                            this.redirectErrorHandler(
                                ClientAuthError_1.ClientAuthError.createLoginInProgressError(),
                                AuthResponse_1.buildResponseStateOnly(reqState)
                            );
                            return;
                        }
                        // if extraScopesToConsent is passed, append them to the login request
                        var scopes = this.appendScopes(request);
                        // Validate and filter scopes (the validate function will throw if validation fails)
                        this.validateInputScope(scopes, false);
                        var account = this.getAccount();
                        // defer queryParameters generation to Helper if developer passes account/sid/login_hint
                        if (Utils_1.Utils.isSSOParam(request)) {
                            // if account is not provided, we pass null
                            this.loginRedirectHelper(account, request, scopes);
                        }
                        // else handle the library data
                        else {
                            // extract ADAL id_token if exists
                            var adalIdToken = this.extractADALIdToken();
                            // silent login if ADAL id_token is retrieved successfully - SSO
                            if (adalIdToken && !scopes) {
                                this.logger.info(
                                    "ADAL's idToken exists. Extracting login information from ADAL's idToken "
                                );
                                var tokenRequest =
                                    this.buildIDTokenRequest(request);
                                this.silentLogin = true;
                                this.acquireTokenSilent(tokenRequest).then(
                                    function (response) {
                                        _this.silentLogin = false;
                                        _this.logger.info(
                                            "Unified cache call is successful"
                                        );
                                        if (_this.redirectCallbacksSet) {
                                            _this.redirectSuccessHandler(
                                                response
                                            );
                                        }
                                        return;
                                    },
                                    function (error) {
                                        _this.silentLogin = false;
                                        _this.logger.error(
                                            "Error occurred during unified cache ATS"
                                        );
                                        // call the loginRedirectHelper later with no user account context
                                        _this.loginRedirectHelper(
                                            null,
                                            request,
                                            scopes
                                        );
                                    }
                                );
                            }
                            // else proceed to login
                            else {
                                // call the loginRedirectHelper later with no user account context
                                this.loginRedirectHelper(null, request, scopes);
                            }
                        }
                    };
                    /**
                     * @hidden
                     * Helper function to loginRedirect
                     *
                     * @param account
                     * @param AuthenticationParameters
                     * @param scopes
                     */
                    UserAgentApplication.prototype.loginRedirectHelper =
                        function (account, request, scopes) {
                            var _this = this;
                            // Track login in progress
                            this.loginInProgress = true;
                            this.authorityInstance
                                .resolveEndpointsAsync()
                                .then(function () {
                                    // create the Request to be sent to the Server
                                    var serverAuthenticationRequest =
                                        new ServerRequestParameters_1.ServerRequestParameters(
                                            _this.authorityInstance,
                                            _this.clientId,
                                            scopes,
                                            ResponseTypes.id_token,
                                            _this.getRedirectUri(),
                                            request.state
                                        );
                                    // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
                                    serverAuthenticationRequest =
                                        _this.populateQueryParams(
                                            account,
                                            request,
                                            serverAuthenticationRequest
                                        );
                                    // if the user sets the login start page - angular only??
                                    var loginStartPage =
                                        _this.cacheStorage.getItem(
                                            Constants_1.Constants
                                                .angularLoginRequest
                                        );
                                    if (
                                        !loginStartPage ||
                                        loginStartPage === ""
                                    ) {
                                        loginStartPage = window.location.href;
                                    } else {
                                        _this.cacheStorage.setItem(
                                            Constants_1.Constants
                                                .angularLoginRequest,
                                            ""
                                        );
                                    }
                                    _this.updateCacheEntries(
                                        serverAuthenticationRequest,
                                        account,
                                        loginStartPage
                                    );
                                    // build URL to navigate to proceed with the login
                                    var urlNavigate =
                                        serverAuthenticationRequest.createNavigateUrl(
                                            scopes
                                        ) +
                                        Constants_1.Constants
                                            .response_mode_fragment;
                                    // Redirect user to login URL
                                    _this.promptUser(urlNavigate);
                                })
                                .catch(function (err) {
                                    _this.logger.warning(
                                        "could not resolve endpoints"
                                    );
                                    var reqState;
                                    if (request) {
                                        reqState = request.state;
                                    }
                                    _this.redirectErrorHandler(
                                        ClientAuthError_1.ClientAuthError.createEndpointResolutionError(
                                            err.toString
                                        ),
                                        AuthResponse_1.buildResponseStateOnly(
                                            reqState
                                        )
                                    );
                                });
                        };
                    /**
                     * Used when you want to obtain an access_token for your API by redirecting the user to the authorization endpoint.
                     * @param {@link AuthenticationParameters}
                     *
                     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
                     */
                    UserAgentApplication.prototype.acquireTokenRedirect =
                        function (request) {
                            var _this = this;
                            // Throw error if callbacks are not set before redirect
                            if (!this.redirectCallbacksSet) {
                                throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
                            }
                            // Validate and filter scopes (the validate function will throw if validation fails)
                            this.validateInputScope(request.scopes, true);
                            // Get the account object if a session exists
                            var account = request.account || this.getAccount();
                            // If already in progress, do not proceed
                            if (this.acquireTokenInProgress) {
                                var reqState = void 0;
                                if (request) {
                                    reqState = request.state;
                                }
                                this.redirectErrorHandler(
                                    ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError(),
                                    AuthResponse_1.buildResponseStateOnly(
                                        this.getAccountState(reqState)
                                    )
                                );
                                return;
                            }
                            // If no session exists, prompt the user to login.
                            if (
                                !account &&
                                !(request.sid || request.loginHint)
                            ) {
                                this.logger.info("User login is required");
                                throw ClientAuthError_1.ClientAuthError.createUserLoginRequiredError();
                            }
                            var serverAuthenticationRequest;
                            var acquireTokenAuthority = request.authority
                                ? AuthorityFactory_1.AuthorityFactory.CreateInstance(
                                      request.authority,
                                      this.config.auth.validateAuthority
                                  )
                                : this.authorityInstance;
                            // Track the acquireToken progress
                            this.acquireTokenInProgress = true;
                            acquireTokenAuthority
                                .resolveEndpointsAsync()
                                .then(function () {
                                    // On Fulfillment
                                    var responseType = _this.getTokenType(
                                        account,
                                        request.scopes,
                                        false
                                    );
                                    serverAuthenticationRequest =
                                        new ServerRequestParameters_1.ServerRequestParameters(
                                            acquireTokenAuthority,
                                            _this.clientId,
                                            request.scopes,
                                            responseType,
                                            _this.getRedirectUri(),
                                            request.state
                                        );
                                    _this.updateCacheEntries(
                                        serverAuthenticationRequest,
                                        account
                                    );
                                    // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
                                    serverAuthenticationRequest =
                                        _this.populateQueryParams(
                                            account,
                                            request,
                                            serverAuthenticationRequest
                                        );
                                    // Construct urlNavigate
                                    var urlNavigate =
                                        serverAuthenticationRequest.createNavigateUrl(
                                            request.scopes
                                        ) +
                                        Constants_1.Constants
                                            .response_mode_fragment;
                                    // set state in cache and redirect to urlNavigate
                                    if (urlNavigate) {
                                        _this.cacheStorage.setItem(
                                            Constants_1.Constants
                                                .stateAcquireToken,
                                            serverAuthenticationRequest.state,
                                            _this.inCookie
                                        );
                                        window.location.replace(urlNavigate);
                                    }
                                })
                                .catch(function (err) {
                                    _this.logger.warning(
                                        "could not resolve endpoints"
                                    );
                                    var reqState;
                                    if (request) {
                                        reqState = request.state;
                                    }
                                    _this.redirectErrorHandler(
                                        ClientAuthError_1.ClientAuthError.createEndpointResolutionError(
                                            err.toString
                                        ),
                                        AuthResponse_1.buildResponseStateOnly(
                                            reqState
                                        )
                                    );
                                });
                        };
                    /**
                     * @hidden
                     * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
                     * @param {string} hash - Hash passed from redirect page.
                     * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
                     */
                    // TODO - rename this, the name is confusing
                    UserAgentApplication.prototype.isCallback = function (
                        hash
                    ) {
                        hash = this.getHash(hash);
                        var parameters = Utils_1.Utils.deserialize(hash);
                        return (
                            parameters.hasOwnProperty(
                                Constants_1.Constants.errorDescription
                            ) ||
                            parameters.hasOwnProperty(
                                Constants_1.Constants.error
                            ) ||
                            parameters.hasOwnProperty(
                                Constants_1.Constants.accessToken
                            ) ||
                            parameters.hasOwnProperty(
                                Constants_1.Constants.idToken
                            )
                        );
                    };
                    //#endregion
                    //#region Popup Flow
                    /**
                     * Use when initiating the login process via opening a popup window in the user's browser
                     *
                     * @param {@link AuthenticationParameters}
                     *
                     * @returns {Promise.<AuthResponse>} - A Promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
                     */
                    UserAgentApplication.prototype.loginPopup = function (
                        request
                    ) {
                        var _this = this;
                        // Creates navigate url; saves value in cache; redirect user to AAD
                        return new Promise(function (resolve, reject) {
                            // Fail if login is already in progress
                            if (_this.loginInProgress) {
                                return reject(
                                    ClientAuthError_1.ClientAuthError.createLoginInProgressError()
                                );
                            }
                            // if extraScopesToConsent is passed, append them to the login request
                            var scopes = _this.appendScopes(request);
                            // Validate and filter scopes (the validate function will throw if validation fails)
                            _this.validateInputScope(scopes, false);
                            var account = _this.getAccount();
                            // add the prompt parameter to the 'extraQueryParameters' if passed
                            if (Utils_1.Utils.isSSOParam(request)) {
                                // if account is not provided, we pass null
                                _this.loginPopupHelper(
                                    account,
                                    request,
                                    resolve,
                                    reject,
                                    scopes
                                );
                            }
                            // else handle the library data
                            else {
                                // Extract ADAL id_token if it exists
                                var adalIdToken = _this.extractADALIdToken();
                                // silent login if ADAL id_token is retrieved successfully - SSO
                                if (adalIdToken && !scopes) {
                                    _this.logger.info(
                                        "ADAL's idToken exists. Extracting login information from ADAL's idToken "
                                    );
                                    var tokenRequest =
                                        _this.buildIDTokenRequest(request);
                                    _this.silentLogin = true;
                                    _this.acquireTokenSilent(tokenRequest).then(
                                        function (response) {
                                            _this.silentLogin = false;
                                            _this.logger.info(
                                                "Unified cache call is successful"
                                            );
                                            resolve(response);
                                        },
                                        function (error) {
                                            _this.silentLogin = false;
                                            _this.logger.error(
                                                "Error occurred during unified cache ATS"
                                            );
                                            _this.loginPopupHelper(
                                                null,
                                                request,
                                                resolve,
                                                reject,
                                                scopes
                                            );
                                        }
                                    );
                                }
                                // else proceed with login
                                else {
                                    _this.loginPopupHelper(
                                        null,
                                        request,
                                        resolve,
                                        reject,
                                        scopes
                                    );
                                }
                            }
                        });
                    };
                    /**
                     * @hidden
                     * Helper function to loginPopup
                     *
                     * @param account
                     * @param request
                     * @param resolve
                     * @param reject
                     * @param scopes
                     */
                    UserAgentApplication.prototype.loginPopupHelper = function (
                        account,
                        request,
                        resolve,
                        reject,
                        scopes
                    ) {
                        var _this = this;
                        if (!scopes) {
                            scopes = [this.clientId];
                        }
                        var scope = scopes.join(" ").toLowerCase();
                        // Generate a popup window
                        var popUpWindow = this.openWindow(
                            "about:blank",
                            "_blank",
                            1,
                            this,
                            resolve,
                            reject
                        );
                        if (!popUpWindow) {
                            // We pass reject in openWindow, we reject there during an error
                            return;
                        }
                        // Track login progress
                        this.loginInProgress = true;
                        // Resolve endpoint
                        this.authorityInstance
                            .resolveEndpointsAsync()
                            .then(
                                function () {
                                    var serverAuthenticationRequest =
                                        new ServerRequestParameters_1.ServerRequestParameters(
                                            _this.authorityInstance,
                                            _this.clientId,
                                            scopes,
                                            ResponseTypes.id_token,
                                            _this.getRedirectUri(),
                                            request.state
                                        );
                                    // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer;
                                    serverAuthenticationRequest =
                                        _this.populateQueryParams(
                                            account,
                                            request,
                                            serverAuthenticationRequest
                                        );
                                    _this.updateCacheEntries(
                                        serverAuthenticationRequest,
                                        account,
                                        window.location.href
                                    );
                                    // Cache the state, nonce, and login request data
                                    _this.cacheStorage.setItem(
                                        Constants_1.Constants.loginRequest,
                                        window.location.href,
                                        _this.inCookie
                                    );
                                    _this.cacheStorage.setItem(
                                        Constants_1.Constants.loginError,
                                        ""
                                    );
                                    _this.cacheStorage.setItem(
                                        Constants_1.Constants.nonceIdToken,
                                        serverAuthenticationRequest.nonce,
                                        _this.inCookie
                                    );
                                    _this.cacheStorage.setItem(
                                        Constants_1.Constants.msalError,
                                        ""
                                    );
                                    _this.cacheStorage.setItem(
                                        Constants_1.Constants
                                            .msalErrorDescription,
                                        ""
                                    );
                                    // cache authorityKey
                                    _this.setAuthorityCache(
                                        serverAuthenticationRequest.state,
                                        _this.authority
                                    );
                                    // Build the URL to navigate to in the popup window
                                    var urlNavigate =
                                        serverAuthenticationRequest.createNavigateUrl(
                                            scopes
                                        ) +
                                        Constants_1.Constants
                                            .response_mode_fragment;
                                    window.renewStates.push(
                                        serverAuthenticationRequest.state
                                    );
                                    window.requestType =
                                        Constants_1.Constants.login;
                                    // Register callback to capture results from server
                                    _this.registerCallback(
                                        serverAuthenticationRequest.state,
                                        scope,
                                        resolve,
                                        reject
                                    );
                                    // Navigate url in popupWindow
                                    if (popUpWindow) {
                                        _this.logger.infoPii(
                                            "Navigated Popup window to:" +
                                                urlNavigate
                                        );
                                        popUpWindow.location.href = urlNavigate;
                                    }
                                },
                                function () {
                                    // Endpoint resolution failure error
                                    _this.logger.info(
                                        ClientAuthError_1.ClientAuthErrorMessage
                                            .endpointResolutionError.code +
                                            ":" +
                                            ClientAuthError_1
                                                .ClientAuthErrorMessage
                                                .endpointResolutionError.desc
                                    );
                                    _this.cacheStorage.setItem(
                                        Constants_1.Constants.msalError,
                                        ClientAuthError_1.ClientAuthErrorMessage
                                            .endpointResolutionError.code
                                    );
                                    _this.cacheStorage.setItem(
                                        Constants_1.Constants
                                            .msalErrorDescription,
                                        ClientAuthError_1.ClientAuthErrorMessage
                                            .endpointResolutionError.desc
                                    );
                                    // What is this? Is this the reject that is passed in?? -- REDO this in the subsequent refactor, passing reject is confusing
                                    if (reject) {
                                        reject(
                                            ClientAuthError_1.ClientAuthError.createEndpointResolutionError()
                                        );
                                    }
                                    // Close the popup window
                                    if (popUpWindow) {
                                        popUpWindow.close();
                                    }
                                }
                            )
                            .catch(function (err) {
                                _this.logger.warning(
                                    "could not resolve endpoints"
                                );
                                reject(
                                    ClientAuthError_1.ClientAuthError.createEndpointResolutionError(
                                        err.toString
                                    )
                                );
                            });
                    };
                    /**
                     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
                     * @param {@link AuthenticationParameters}
                     *
                     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
                     * @returns {Promise.<AuthResponse>} - A Promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
                     */
                    UserAgentApplication.prototype.acquireTokenPopup =
                        function (request) {
                            var _this = this;
                            return new Promise(function (resolve, reject) {
                                // Validate and filter scopes (the validate function will throw if validation fails)
                                _this.validateInputScope(request.scopes, true);
                                var scope = request.scopes
                                    .join(" ")
                                    .toLowerCase();
                                // Get the account object if a session exists
                                var account =
                                    request.account || _this.getAccount();
                                // If already in progress, throw an error and reject the request
                                if (_this.acquireTokenInProgress) {
                                    return reject(
                                        ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError()
                                    );
                                }
                                // If no session exists, prompt the user to login.
                                if (
                                    !account &&
                                    !!(request.sid || request.loginHint)
                                ) {
                                    _this.logger.info("User login is required");
                                    return reject(
                                        ClientAuthError_1.ClientAuthError.createUserLoginRequiredError()
                                    );
                                }
                                // track the acquireToken progress
                                _this.acquireTokenInProgress = true;
                                var serverAuthenticationRequest;
                                var acquireTokenAuthority = request.authority
                                    ? AuthorityFactory_1.AuthorityFactory.CreateInstance(
                                          request.authority,
                                          _this.config.auth.validateAuthority
                                      )
                                    : _this.authorityInstance;
                                // Open the popup window
                                var popUpWindow = _this.openWindow(
                                    "about:blank",
                                    "_blank",
                                    1,
                                    _this,
                                    resolve,
                                    reject
                                );
                                if (!popUpWindow) {
                                    // We pass reject to openWindow, so we are rejecting there.
                                    return;
                                }
                                acquireTokenAuthority
                                    .resolveEndpointsAsync()
                                    .then(
                                        function () {
                                            // On fullfillment
                                            var responseType =
                                                _this.getTokenType(
                                                    account,
                                                    request.scopes,
                                                    false
                                                );
                                            serverAuthenticationRequest =
                                                new ServerRequestParameters_1.ServerRequestParameters(
                                                    acquireTokenAuthority,
                                                    _this.clientId,
                                                    request.scopes,
                                                    responseType,
                                                    _this.getRedirectUri(),
                                                    request.state
                                                );
                                            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
                                            serverAuthenticationRequest =
                                                _this.populateQueryParams(
                                                    account,
                                                    request,
                                                    serverAuthenticationRequest
                                                );
                                            _this.updateCacheEntries(
                                                serverAuthenticationRequest,
                                                account
                                            );
                                            // Construct the urlNavigate
                                            var urlNavigate =
                                                serverAuthenticationRequest.createNavigateUrl(
                                                    request.scopes
                                                ) +
                                                Constants_1.Constants
                                                    .response_mode_fragment;
                                            window.renewStates.push(
                                                serverAuthenticationRequest.state
                                            );
                                            window.requestType =
                                                Constants_1.Constants.renewToken;
                                            _this.registerCallback(
                                                serverAuthenticationRequest.state,
                                                scope,
                                                resolve,
                                                reject
                                            );
                                            // open popup window to urlNavigate
                                            if (popUpWindow) {
                                                popUpWindow.location.href =
                                                    urlNavigate;
                                            }
                                        },
                                        function () {
                                            // On rejection
                                            _this.logger.info(
                                                ClientAuthError_1
                                                    .ClientAuthErrorMessage
                                                    .endpointResolutionError
                                                    .code +
                                                    ":" +
                                                    ClientAuthError_1
                                                        .ClientAuthErrorMessage
                                                        .endpointResolutionError
                                                        .desc
                                            );
                                            _this.cacheStorage.setItem(
                                                Constants_1.Constants.msalError,
                                                ClientAuthError_1
                                                    .ClientAuthErrorMessage
                                                    .endpointResolutionError
                                                    .code
                                            );
                                            _this.cacheStorage.setItem(
                                                Constants_1.Constants
                                                    .msalErrorDescription,
                                                ClientAuthError_1
                                                    .ClientAuthErrorMessage
                                                    .endpointResolutionError
                                                    .desc
                                            );
                                            if (reject) {
                                                reject(
                                                    ClientAuthError_1.ClientAuthError.createEndpointResolutionError()
                                                );
                                            }
                                            if (popUpWindow) {
                                                popUpWindow.close();
                                            }
                                        }
                                    )
                                    .catch(function (err) {
                                        _this.logger.warning(
                                            "could not resolve endpoints"
                                        );
                                        reject(
                                            ClientAuthError_1.ClientAuthError.createEndpointResolutionError(
                                                err.toString()
                                            )
                                        );
                                    });
                            });
                        };
                    /**
                     * @hidden
                     *
                     * Used to send the user to the redirect_uri after authentication is complete. The user's bearer token is attached to the URI fragment as an id_token/access_token field.
                     * This function also closes the popup window after redirection.
                     *
                     * @param urlNavigate
                     * @param title
                     * @param interval
                     * @param instance
                     * @param resolve
                     * @param reject
                     * @ignore
                     */
                    UserAgentApplication.prototype.openWindow = function (
                        urlNavigate,
                        title,
                        interval,
                        instance,
                        resolve,
                        reject
                    ) {
                        var _this = this;
                        // Generate a popup window
                        var popupWindow;
                        try {
                            popupWindow = this.openPopup(
                                urlNavigate,
                                title,
                                Constants_1.Constants.popUpWidth,
                                Constants_1.Constants.popUpHeight
                            );
                        } catch (e) {
                            instance.loginInProgress = false;
                            instance.acquireTokenInProgress = false;
                            this.logger.info(
                                ClientAuthError_1.ClientAuthErrorMessage
                                    .popUpWindowError.code +
                                    ":" +
                                    ClientAuthError_1.ClientAuthErrorMessage
                                        .popUpWindowError.desc
                            );
                            this.cacheStorage.setItem(
                                Constants_1.Constants.msalError,
                                ClientAuthError_1.ClientAuthErrorMessage
                                    .popUpWindowError.code
                            );
                            this.cacheStorage.setItem(
                                Constants_1.Constants.msalErrorDescription,
                                ClientAuthError_1.ClientAuthErrorMessage
                                    .popUpWindowError.desc
                            );
                            if (reject) {
                                reject(
                                    ClientAuthError_1.ClientAuthError.createPopupWindowError()
                                );
                            }
                            return null;
                        }
                        // Push popup window handle onto stack for tracking
                        window.openedWindows.push(popupWindow);
                        var pollTimer = window.setInterval(function () {
                            // If popup closed or login in progress, cancel login
                            if (
                                popupWindow &&
                                popupWindow.closed &&
                                instance.loginInProgress
                            ) {
                                if (reject) {
                                    reject(
                                        ClientAuthError_1.ClientAuthError.createUserCancelledError()
                                    );
                                }
                                window.clearInterval(pollTimer);
                                if (_this.config.framework.isAngular) {
                                    _this.broadcast(
                                        "msal:popUpClosed",
                                        ClientAuthError_1.ClientAuthErrorMessage
                                            .userCancelledError.code +
                                            Constants_1.Constants
                                                .resourceDelimiter +
                                            ClientAuthError_1
                                                .ClientAuthErrorMessage
                                                .userCancelledError.desc
                                    );
                                    return;
                                }
                                instance.loginInProgress = false;
                                instance.acquireTokenInProgress = false;
                            }
                            try {
                                var popUpWindowLocation = popupWindow.location;
                                // If the popup hash changes, close the popup window
                                if (
                                    popUpWindowLocation.href.indexOf(
                                        _this.getRedirectUri()
                                    ) !== -1
                                ) {
                                    window.clearInterval(pollTimer);
                                    instance.loginInProgress = false;
                                    instance.acquireTokenInProgress = false;
                                    _this.logger.info("Closing popup window");
                                    // TODO: Check how this can be extracted for any framework specific code?
                                    if (_this.config.framework.isAngular) {
                                        _this.broadcast(
                                            "msal:popUpHashChanged",
                                            popUpWindowLocation.hash
                                        );
                                        for (
                                            var i = 0;
                                            i < window.openedWindows.length;
                                            i++
                                        ) {
                                            window.openedWindows[i].close();
                                        }
                                    }
                                }
                            } catch (e) {
                                // Cross Domain url check error.
                                // Will be thrown until AAD redirects the user back to the app"s root page with the token.
                                // No need to log or throw this error as it will create unnecessary traffic.
                            }
                        }, interval);
                        return popupWindow;
                    };
                    /**
                     * @hidden
                     *
                     * Configures popup window for login.
                     *
                     * @param urlNavigate
                     * @param title
                     * @param popUpWidth
                     * @param popUpHeight
                     * @ignore
                     * @hidden
                     */
                    UserAgentApplication.prototype.openPopup = function (
                        urlNavigate,
                        title,
                        popUpWidth,
                        popUpHeight
                    ) {
                        try {
                            /**
                             * adding winLeft and winTop to account for dual monitor
                             * using screenLeft and screenTop for IE8 and earlier
                             */
                            var winLeft = window.screenLeft
                                ? window.screenLeft
                                : window.screenX;
                            var winTop = window.screenTop
                                ? window.screenTop
                                : window.screenY;
                            /**
                             * window.innerWidth displays browser window"s height and width excluding toolbars
                             * using document.documentElement.clientWidth for IE8 and earlier
                             */
                            var width =
                                window.innerWidth ||
                                document.documentElement.clientWidth ||
                                document.body.clientWidth;
                            var height =
                                window.innerHeight ||
                                document.documentElement.clientHeight ||
                                document.body.clientHeight;
                            var left = width / 2 - popUpWidth / 2 + winLeft;
                            var top = height / 2 - popUpHeight / 2 + winTop;
                            // open the window
                            var popupWindow = window.open(
                                urlNavigate,
                                title,
                                "width=" +
                                    popUpWidth +
                                    ", height=" +
                                    popUpHeight +
                                    ", top=" +
                                    top +
                                    ", left=" +
                                    left
                            );
                            if (!popupWindow) {
                                throw ClientAuthError_1.ClientAuthError.createPopupWindowError();
                            }
                            if (popupWindow.focus) {
                                popupWindow.focus();
                            }
                            return popupWindow;
                        } catch (e) {
                            this.logger.error(
                                "error opening popup " + e.message
                            );
                            this.loginInProgress = false;
                            this.acquireTokenInProgress = false;
                            throw ClientAuthError_1.ClientAuthError.createPopupWindowError(
                                e.toString()
                            );
                        }
                    };
                    //#endregion
                    //#region Silent Flow
                    /**
                     * Use this function to obtain a token before every call to the API / resource provider
                     *
                     * MSAL return's a cached token when available
                     * Or it send's a request to the STS to obtain a new token using a hidden iframe.
                     *
                     * @param {@link AuthenticationParameters}
                     *
                     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
                     * @returns {Promise.<AuthResponse>} - A Promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
                     *
                     */
                    UserAgentApplication.prototype.acquireTokenSilent =
                        function (request) {
                            var _this = this;
                            return new Promise(function (resolve, reject) {
                                // Validate and filter scopes (the validate function will throw if validation fails)
                                _this.validateInputScope(request.scopes, true);
                                var scope = request.scopes
                                    .join(" ")
                                    .toLowerCase();
                                // if the developer passes an account give him the priority
                                var account =
                                    request.account || _this.getAccount();
                                // extract if there is an adalIdToken stashed in the cache
                                var adalIdToken = _this.cacheStorage.getItem(
                                    Constants_1.Constants.adalIdToken
                                );
                                //if there is no account logged in and no login_hint/sid is passed in the request
                                if (
                                    !account &&
                                    !!(request.sid || request.loginHint) &&
                                    Utils_1.Utils.isEmpty(adalIdToken)
                                ) {
                                    _this.logger.info("User login is required");
                                    return reject(
                                        ClientAuthError_1.ClientAuthError.createUserLoginRequiredError()
                                    );
                                }
                                var responseType = _this.getTokenType(
                                    account,
                                    request.scopes,
                                    true
                                );
                                var serverAuthenticationRequest =
                                    new ServerRequestParameters_1.ServerRequestParameters(
                                        AuthorityFactory_1.AuthorityFactory.CreateInstance(
                                            request.authority,
                                            _this.config.auth.validateAuthority
                                        ),
                                        _this.clientId,
                                        request.scopes,
                                        responseType,
                                        _this.getRedirectUri(),
                                        request.state
                                    );
                                // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
                                if (
                                    Utils_1.Utils.isSSOParam(request) ||
                                    account
                                ) {
                                    serverAuthenticationRequest =
                                        _this.populateQueryParams(
                                            account,
                                            request,
                                            serverAuthenticationRequest
                                        );
                                }
                                //if user didn't pass login_hint/sid and adal's idtoken is present, extract the login_hint from the adalIdToken
                                else if (
                                    !account &&
                                    !Utils_1.Utils.isEmpty(adalIdToken)
                                ) {
                                    // if adalIdToken exists, extract the SSO info from the same
                                    var adalIdTokenObject =
                                        Utils_1.Utils.extractIdToken(
                                            adalIdToken
                                        );
                                    _this.logger.verbose(
                                        "ADAL's idToken exists. Extracting login information from ADAL's idToken "
                                    );
                                    serverAuthenticationRequest =
                                        _this.populateQueryParams(
                                            account,
                                            null,
                                            serverAuthenticationRequest,
                                            adalIdTokenObject
                                        );
                                }
                                var userContainedClaims =
                                    request.claimsRequest ||
                                    serverAuthenticationRequest.claimsValue;
                                var authErr;
                                var cacheResultResponse;
                                if (!userContainedClaims) {
                                    try {
                                        cacheResultResponse =
                                            _this.getCachedToken(
                                                serverAuthenticationRequest,
                                                account
                                            );
                                    } catch (e) {
                                        authErr = e;
                                    }
                                }
                                // resolve/reject based on cacheResult
                                if (cacheResultResponse) {
                                    _this.logger.info(
                                        "Token is already in cache for scope:" +
                                            scope
                                    );
                                    resolve(cacheResultResponse);
                                    return null;
                                } else if (authErr) {
                                    _this.logger.infoPii(
                                        authErr.errorCode +
                                            ":" +
                                            authErr.errorMessage
                                    );
                                    reject(authErr);
                                    return null;
                                }
                                // else proceed with login
                                else {
                                    if (userContainedClaims) {
                                        _this.logger.verbose(
                                            "Skipped cache lookup since claims were given."
                                        );
                                    } else {
                                        _this.logger.verbose(
                                            "Token is not in cache for scope:" +
                                                scope
                                        );
                                    }
                                    // Cache result can return null if cache is empty. In that case, set authority to default value if no authority is passed to the api.
                                    if (
                                        !serverAuthenticationRequest.authorityInstance
                                    ) {
                                        serverAuthenticationRequest.authorityInstance =
                                            request.authority
                                                ? AuthorityFactory_1.AuthorityFactory.CreateInstance(
                                                      request.authority,
                                                      _this.config.auth
                                                          .validateAuthority
                                                  )
                                                : _this.authorityInstance;
                                    }
                                    // cache miss
                                    return serverAuthenticationRequest.authorityInstance
                                        .resolveEndpointsAsync()
                                        .then(function () {
                                            // refresh attempt with iframe
                                            // Already renewing for this scope, callback when we get the token.
                                            if (window.activeRenewals[scope]) {
                                                _this.logger.verbose(
                                                    "Renew token for scope: " +
                                                        scope +
                                                        " is in progress. Registering callback"
                                                );
                                                // Active renewals contains the state for each renewal.
                                                _this.registerCallback(
                                                    window.activeRenewals[
                                                        scope
                                                    ],
                                                    scope,
                                                    resolve,
                                                    reject
                                                );
                                            } else {
                                                if (
                                                    request.scopes &&
                                                    request.scopes.indexOf(
                                                        _this.clientId
                                                    ) > -1 &&
                                                    request.scopes.length === 1
                                                ) {
                                                    // App uses idToken to send to api endpoints
                                                    // Default scope is tracked as clientId to store this token
                                                    _this.logger.verbose(
                                                        "renewing idToken"
                                                    );
                                                    _this.renewIdToken(
                                                        request.scopes,
                                                        resolve,
                                                        reject,
                                                        account,
                                                        serverAuthenticationRequest
                                                    );
                                                } else {
                                                    // renew access token
                                                    _this.logger.verbose(
                                                        "renewing accesstoken"
                                                    );
                                                    _this.renewToken(
                                                        request.scopes,
                                                        resolve,
                                                        reject,
                                                        account,
                                                        serverAuthenticationRequest
                                                    );
                                                }
                                            }
                                        })
                                        .catch(function (err) {
                                            _this.logger.warning(
                                                "could not resolve endpoints"
                                            );
                                            reject(
                                                ClientAuthError_1.ClientAuthError.createEndpointResolutionError(
                                                    err.toString()
                                                )
                                            );
                                            return null;
                                        });
                                }
                            });
                        };
                    /**
                     * @hidden
                     * Returns whether current window is in ifram for token renewal
                     * @ignore
                     */
                    UserAgentApplication.prototype.isInIframe = function () {
                        return window.parent !== window;
                    };
                    /**
                     * @hidden
                     * Returns whether parent window exists and has msal
                     */
                    UserAgentApplication.prototype.parentIsMsal = function () {
                        return window.parent !== window && window.parent.msal;
                    };
                    /**
                     * @hidden
                     */
                    UserAgentApplication.prototype.isInteractionRequired =
                        function (errorString) {
                            if (
                                errorString.indexOf("interaction_required") !==
                                    -1 ||
                                errorString.indexOf("consent_required") !==
                                    -1 ||
                                errorString.indexOf("login_required") !== -1
                            ) {
                                return true;
                            }
                            return false;
                        };
                    /**
                     * @hidden
                     * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
                     * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
                     * @ignore
                     */
                    UserAgentApplication.prototype.loadIframeTimeout =
                        function (urlNavigate, frameName, scope) {
                            var _this = this;
                            //set iframe session to pending
                            var expectedState = window.activeRenewals[scope];
                            this.logger.verbose(
                                "Set loading state to pending for: " +
                                    scope +
                                    ":" +
                                    expectedState
                            );
                            this.cacheStorage.setItem(
                                Constants_1.Constants.renewStatus +
                                    expectedState,
                                Constants_1.Constants.tokenRenewStatusInProgress
                            );
                            this.loadFrame(urlNavigate, frameName);
                            setTimeout(function () {
                                if (
                                    _this.cacheStorage.getItem(
                                        Constants_1.Constants.renewStatus +
                                            expectedState
                                    ) ===
                                    Constants_1.Constants
                                        .tokenRenewStatusInProgress
                                ) {
                                    // fail the iframe session if it"s in pending state
                                    _this.logger.verbose(
                                        "Loading frame has timed out after: " +
                                            _this.config.system
                                                .loadFrameTimeout /
                                                1000 +
                                            " seconds for scope " +
                                            scope +
                                            ":" +
                                            expectedState
                                    );
                                    // Error after timeout
                                    if (
                                        expectedState &&
                                        window.callbackMappedToRenewStates[
                                            expectedState
                                        ]
                                    ) {
                                        window.callbackMappedToRenewStates[
                                            expectedState
                                        ](
                                            null,
                                            ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError()
                                        );
                                    }
                                    _this.cacheStorage.setItem(
                                        Constants_1.Constants.renewStatus +
                                            expectedState,
                                        Constants_1.Constants
                                            .tokenRenewStatusCancelled
                                    );
                                }
                            }, this.config.system.loadFrameTimeout);
                        };
                    /**
                     * @hidden
                     * Loads iframe with authorization endpoint URL
                     * @ignore
                     */
                    UserAgentApplication.prototype.loadFrame = function (
                        urlNavigate,
                        frameName
                    ) {
                        var _this = this;
                        // This trick overcomes iframe navigation in IE
                        // IE does not load the page consistently in iframe
                        this.logger.info("LoadFrame: " + frameName);
                        var frameCheck = frameName;
                        setTimeout(function () {
                            var frameHandle = _this.addHiddenIFrame(frameCheck);
                            if (
                                frameHandle.src === "" ||
                                frameHandle.src === "about:blank"
                            ) {
                                frameHandle.src = urlNavigate;
                                _this.logger.infoPii(
                                    "Frame Name : " +
                                        frameName +
                                        " Navigated to: " +
                                        urlNavigate
                                );
                            }
                        }, this.config.system.navigateFrameWait);
                    };
                    /**
                     * @hidden
                     * Adds the hidden iframe for silent token renewal.
                     * @ignore
                     */
                    UserAgentApplication.prototype.addHiddenIFrame = function (
                        iframeId
                    ) {
                        if (typeof iframeId === "undefined") {
                            return null;
                        }
                        this.logger.info(
                            "Add msal frame to document:" + iframeId
                        );
                        var adalFrame = document.getElementById(iframeId);
                        if (!adalFrame) {
                            if (
                                document.createElement &&
                                document.documentElement &&
                                window.navigator.userAgent.indexOf(
                                    "MSIE 5.0"
                                ) === -1
                            ) {
                                var ifr = document.createElement("iframe");
                                ifr.setAttribute("id", iframeId);
                                ifr.style.visibility = "hidden";
                                ifr.style.position = "absolute";
                                ifr.style.width = ifr.style.height = "0";
                                ifr.style.border = "0";
                                adalFrame = document
                                    .getElementsByTagName("body")[0]
                                    .appendChild(ifr);
                            } else if (
                                document.body &&
                                document.body.insertAdjacentHTML
                            ) {
                                document.body.insertAdjacentHTML(
                                    "beforeend",
                                    "<iframe name='" +
                                        iframeId +
                                        "' id='" +
                                        iframeId +
                                        "' style='display:none'></iframe>"
                                );
                            }
                            if (window.frames && window.frames[iframeId]) {
                                adalFrame = window.frames[iframeId];
                            }
                        }
                        return adalFrame;
                    };
                    //#endregion
                    //#region General Helpers
                    /**
                     * @hidden
                     *
                     * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
                     * domain_hint can be one of users/organizations which when added skips the email based discovery process of the user
                     * domain_req utid received as part of the clientInfo
                     * login_req uid received as part of clientInfo
                     * Also does a sanity check for extraQueryParameters passed by the user to ensure no repeat queryParameters
                     *
                     * @param {@link Account} account - Account for which the token is requested
                     * @param queryparams
                     * @param {@link ServerRequestParameters}
                     * @ignore
                     */
                    UserAgentApplication.prototype.addHintParameters =
                        function (accountObj, qParams, serverReqParams) {
                            var account = accountObj || this.getAccount();
                            // This is a final check for all queryParams added so far; preference order: sid > login_hint
                            // sid cannot be passed along with login_hint, hence we check both are not populated yet in queryParameters so far
                            if (account) {
                                // sid
                                if (
                                    account.sid &&
                                    serverReqParams.promptValue ===
                                        Constants_1.PromptState.NONE
                                ) {
                                    if (
                                        !qParams[Constants_1.SSOTypes.SID] &&
                                        !qParams[
                                            Constants_1.SSOTypes.LOGIN_HINT
                                        ]
                                    ) {
                                        qParams = Utils_1.Utils.addSSOParameter(
                                            Constants_1.SSOTypes.SID,
                                            account.sid,
                                            qParams
                                        );
                                    }
                                }
                                // login_hint
                                else {
                                    // login_hint is account.userName
                                    if (
                                        !qParams[
                                            Constants_1.SSOTypes.LOGIN_HINT
                                        ] &&
                                        account.userName &&
                                        !Utils_1.Utils.isEmpty(account.userName)
                                    ) {
                                        qParams = Utils_1.Utils.addSSOParameter(
                                            Constants_1.SSOTypes.LOGIN_HINT,
                                            account.userName,
                                            qParams
                                        );
                                    }
                                }
                                if (
                                    !qParams[Constants_1.SSOTypes.DOMAIN_REQ] &&
                                    !qParams[Constants_1.SSOTypes.LOGIN_REQ]
                                ) {
                                    qParams = Utils_1.Utils.addSSOParameter(
                                        Constants_1.SSOTypes.HOMEACCOUNT_ID,
                                        account.homeAccountIdentifier,
                                        qParams
                                    );
                                }
                            }
                            return qParams;
                        };
                    /**
                     * @hidden
                     * Used to redirect the browser to the STS authorization endpoint
                     * @param {string} urlNavigate - URL of the authorization endpoint
                     */
                    UserAgentApplication.prototype.promptUser = function (
                        urlNavigate
                    ) {
                        // Navigate if valid URL
                        if (
                            urlNavigate &&
                            !Utils_1.Utils.isEmpty(urlNavigate)
                        ) {
                            this.logger.infoPii("Navigate to:" + urlNavigate);
                            window.location.replace(urlNavigate);
                        } else {
                            this.logger.info("Navigate url is empty");
                            throw AuthError_1.AuthError.createUnexpectedError(
                                "Navigate url is empty"
                            );
                        }
                    };
                    /**
                     * @hidden
                     * Used to add the developer requested callback to the array of callbacks for the specified scopes. The updated array is stored on the window object
                     * @param {string} expectedState - Unique state identifier (guid).
                     * @param {string} scope - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
                     * @param {Function} resolve - The resolve function of the promise object.
                     * @param {Function} reject - The reject function of the promise object.
                     * @ignore
                     */
                    UserAgentApplication.prototype.registerCallback = function (
                        expectedState,
                        scope,
                        resolve,
                        reject
                    ) {
                        var _this = this;
                        // track active renewals
                        window.activeRenewals[scope] = expectedState;
                        // initialize callbacks mapped array
                        if (!window.promiseMappedToRenewStates[expectedState]) {
                            window.promiseMappedToRenewStates[expectedState] =
                                [];
                        }
                        // indexing on the current state, push the callback params to callbacks mapped
                        window.promiseMappedToRenewStates[expectedState].push({
                            resolve: resolve,
                            reject: reject,
                        });
                        // Store the server esponse in the current window??
                        if (
                            !window.callbackMappedToRenewStates[expectedState]
                        ) {
                            window.callbackMappedToRenewStates[expectedState] =
                                function (response, error) {
                                    // reset active renewals
                                    window.activeRenewals[scope] = null;
                                    // for all promiseMappedtoRenewStates for a given 'state' - call the reject/resolve with error/token respectively
                                    for (
                                        var i = 0;
                                        i <
                                        window.promiseMappedToRenewStates[
                                            expectedState
                                        ].length;
                                        ++i
                                    ) {
                                        try {
                                            if (error) {
                                                window.promiseMappedToRenewStates[
                                                    expectedState
                                                ][i].reject(error);
                                            } else if (response) {
                                                window.promiseMappedToRenewStates[
                                                    expectedState
                                                ][i].resolve(response);
                                            } else {
                                                throw AuthError_1.AuthError.createUnexpectedError(
                                                    "Error and response are both null"
                                                );
                                            }
                                        } catch (e) {
                                            _this.logger.warning(e);
                                        }
                                    }
                                    // reset
                                    window.promiseMappedToRenewStates[
                                        expectedState
                                    ] = null;
                                    window.callbackMappedToRenewStates[
                                        expectedState
                                    ] = null;
                                };
                        }
                    };
                    //#endregion
                    //#region Logout
                    /**
                     * Used to log out the current user, and redirect the user to the postLogoutRedirectUri.
                     * Defaults behaviour is to redirect the user to `window.location.href`.
                     */
                    UserAgentApplication.prototype.logout = function () {
                        this.clearCache();
                        this.account = null;
                        var logout = "";
                        if (this.getPostLogoutRedirectUri()) {
                            logout =
                                "post_logout_redirect_uri=" +
                                encodeURIComponent(
                                    this.getPostLogoutRedirectUri()
                                );
                        }
                        var urlNavigate =
                            this.authority + "oauth2/v2.0/logout?" + logout;
                        this.promptUser(urlNavigate);
                    };
                    /**
                     * @hidden
                     * Clear all access tokens in the cache.
                     * @ignore
                     */
                    UserAgentApplication.prototype.clearCache = function () {
                        window.renewStates = [];
                        var accessTokenItems =
                            this.cacheStorage.getAllAccessTokens(
                                Constants_1.Constants.clientId,
                                Constants_1.Constants.homeAccountIdentifier
                            );
                        for (var i = 0; i < accessTokenItems.length; i++) {
                            this.cacheStorage.removeItem(
                                JSON.stringify(accessTokenItems[i].key)
                            );
                        }
                        this.cacheStorage.resetCacheItems();
                        this.cacheStorage.clearCookie();
                    };
                    /**
                     * @hidden
                     * Clear a given access token from the cache.
                     *
                     * @param accessToken
                     */
                    UserAgentApplication.prototype.clearCacheForScope =
                        function (accessToken) {
                            var accessTokenItems =
                                this.cacheStorage.getAllAccessTokens(
                                    Constants_1.Constants.clientId,
                                    Constants_1.Constants.homeAccountIdentifier
                                );
                            for (var i = 0; i < accessTokenItems.length; i++) {
                                var token = accessTokenItems[i];
                                if (token.value.accessToken === accessToken) {
                                    this.cacheStorage.removeItem(
                                        JSON.stringify(token.key)
                                    );
                                }
                            }
                        };
                    //#endregion
                    //#region Response
                    /**
                     * @hidden
                     * Used to call the constructor callback with the token/error
                     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
                     */
                    UserAgentApplication.prototype.processCallBack = function (
                        hash,
                        stateInfo,
                        parentCallback
                    ) {
                        this.logger.info(
                            "Processing the callback from redirect response"
                        );
                        // get the state info from the hash
                        if (!stateInfo) {
                            stateInfo = this.getResponseState(hash);
                        }
                        var response;
                        var authErr;
                        // Save the token info from the hash
                        try {
                            response = this.saveTokenFromHash(hash, stateInfo);
                        } catch (err) {
                            authErr = err;
                        }
                        // remove hash from the cache
                        this.cacheStorage.removeItem(
                            Constants_1.Constants.urlHash
                        );
                        try {
                            // Clear the cookie in the hash
                            this.cacheStorage.clearCookie();
                            var accountState = this.getAccountState(
                                stateInfo.state
                            );
                            if (response) {
                                if (
                                    stateInfo.requestType ===
                                        Constants_1.Constants.renewToken ||
                                    response.accessToken
                                ) {
                                    if (window.parent !== window) {
                                        this.logger.verbose(
                                            "Window is in iframe, acquiring token silently"
                                        );
                                    } else {
                                        this.logger.verbose(
                                            "acquiring token interactive in progress"
                                        );
                                    }
                                    response.tokenType =
                                        Constants_1.Constants.accessToken;
                                } else if (
                                    stateInfo.requestType ===
                                    Constants_1.Constants.login
                                ) {
                                    response.tokenType =
                                        Constants_1.Constants.idToken;
                                }
                                if (!parentCallback) {
                                    this.redirectSuccessHandler(response);
                                    return;
                                }
                            } else if (!parentCallback) {
                                this.redirectErrorHandler(
                                    authErr,
                                    AuthResponse_1.buildResponseStateOnly(
                                        accountState
                                    )
                                );
                                return;
                            }
                            parentCallback(response, authErr);
                        } catch (err) {
                            this.logger.error(
                                "Error occurred in token received callback function: " +
                                    err
                            );
                            throw ClientAuthError_1.ClientAuthError.createErrorInCallbackFunction(
                                err.toString()
                            );
                        }
                    };
                    /**
                     * @hidden
                     * This method must be called for processing the response received from the STS. It extracts the hash, processes the token or error information and saves it in the cache. It then
                     * calls the registered callbacks in case of redirect or resolves the promises with the result.
                     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
                     */
                    UserAgentApplication.prototype.handleAuthenticationResponse =
                        function (hash) {
                            // retrieve the hash
                            if (hash == null) {
                                hash = window.location.hash;
                            }
                            var self = null;
                            var isPopup = false;
                            var isWindowOpenerMsal = false;
                            // Check if the current window opened the iFrame/popup
                            try {
                                isWindowOpenerMsal =
                                    window.opener &&
                                    window.opener.msal &&
                                    window.opener.msal !== window.msal;
                            } catch (err) {
                                // err = SecurityError: Blocked a frame with origin "[url]" from accessing a cross-origin frame.
                                isWindowOpenerMsal = false;
                            }
                            // Set the self to the window that created the popup/iframe
                            if (isWindowOpenerMsal) {
                                self = window.opener.msal;
                                isPopup = true;
                            } else if (window.parent && window.parent.msal) {
                                self = window.parent.msal;
                            }
                            // if (window.parent !== window), by using self, window.parent becomes equal to window in getResponseState method specifically
                            var stateInfo = self.getResponseState(hash);
                            var tokenResponseCallback = null;
                            self.logger.info("Returned from redirect url");
                            // If parent window is the msal instance which opened the current window (iframe)
                            if (this.parentIsMsal()) {
                                tokenResponseCallback =
                                    window.parent.callbackMappedToRenewStates[
                                        stateInfo.state
                                    ];
                            }
                            // Current window is window opener (popup)
                            else if (isWindowOpenerMsal) {
                                tokenResponseCallback =
                                    window.opener.callbackMappedToRenewStates[
                                        stateInfo.state
                                    ];
                            }
                            // Redirect cases
                            else {
                                tokenResponseCallback = null;
                                // if set to navigate to loginRequest page post login
                                if (
                                    self.config.auth.navigateToLoginRequestUrl
                                ) {
                                    self.cacheStorage.setItem(
                                        Constants_1.Constants.urlHash,
                                        hash
                                    );
                                    if (window.parent === window && !isPopup) {
                                        window.location.href =
                                            self.cacheStorage.getItem(
                                                Constants_1.Constants
                                                    .loginRequest,
                                                self.inCookie
                                            );
                                    }
                                    return;
                                } else {
                                    window.location.hash = "";
                                }
                                if (!this.redirectCallbacksSet) {
                                    // We reached this point too early, return and come back later
                                    return;
                                }
                            }
                            self.processCallBack(
                                hash,
                                stateInfo,
                                tokenResponseCallback
                            );
                            // If current window is opener, close all windows
                            if (isWindowOpenerMsal) {
                                for (
                                    var i = 0;
                                    i < window.opener.openedWindows.length;
                                    i++
                                ) {
                                    window.opener.openedWindows[i].close();
                                }
                            }
                        };
                    /**
                     * @hidden
                     * Returns deserialized portion of URL hash
                     * @param hash
                     */
                    UserAgentApplication.prototype.deserializeHash = function (
                        hash
                    ) {
                        hash = this.getHash(hash);
                        return Utils_1.Utils.deserialize(hash);
                    };
                    /**
                     * @hidden
                     * Creates a stateInfo object from the URL fragment and returns it.
                     * @param {string} hash  -  Hash passed from redirect page
                     * @returns {TokenResponse} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
                     * @ignore
                     */
                    UserAgentApplication.prototype.getResponseState = function (
                        hash
                    ) {
                        var parameters = this.deserializeHash(hash);
                        var stateResponse;
                        if (!parameters) {
                            throw AuthError_1.AuthError.createUnexpectedError(
                                "Hash was not parsed correctly."
                            );
                        }
                        if (parameters.hasOwnProperty("state")) {
                            stateResponse = {
                                requestType: Constants_1.Constants.unknown,
                                state: parameters.state,
                                stateMatch: false,
                            };
                        } else {
                            throw AuthError_1.AuthError.createUnexpectedError(
                                "Hash does not contain state."
                            );
                        }
                        // async calls can fire iframe and login request at the same time if developer does not use the API as expected
                        // incoming callback needs to be looked up to find the request type
                        // loginRedirect
                        if (
                            stateResponse.state ===
                                this.cacheStorage.getItem(
                                    Constants_1.Constants.stateLogin,
                                    this.inCookie
                                ) ||
                            stateResponse.state ===
                                this.silentAuthenticationState
                        ) {
                            // loginRedirect
                            stateResponse.requestType =
                                Constants_1.Constants.login;
                            stateResponse.stateMatch = true;
                            return stateResponse;
                        }
                        // acquireTokenRedirect
                        else if (
                            stateResponse.state ===
                            this.cacheStorage.getItem(
                                Constants_1.Constants.stateAcquireToken,
                                this.inCookie
                            )
                        ) {
                            //acquireTokenRedirect
                            stateResponse.requestType =
                                Constants_1.Constants.renewToken;
                            stateResponse.stateMatch = true;
                            return stateResponse;
                        }
                        // external api requests may have many renewtoken requests for different resource
                        if (!stateResponse.stateMatch) {
                            stateResponse.requestType = window.requestType;
                            var statesInParentContext = window.renewStates;
                            for (
                                var i = 0;
                                i < statesInParentContext.length;
                                i++
                            ) {
                                if (
                                    statesInParentContext[i] ===
                                    stateResponse.state
                                ) {
                                    stateResponse.stateMatch = true;
                                    break;
                                }
                            }
                        }
                        return stateResponse;
                    };
                    //#endregion
                    //#region Token Processing (Extract to TokenProcessing.ts)
                    /**
                     * @hidden
                     * Used to get token for the specified set of scopes from the cache
                     * @param {@link ServerRequestParameters} - Request sent to the STS to obtain an id_token/access_token
                     * @param {Account} account - Account for which the scopes were requested
                     */
                    UserAgentApplication.prototype.getCachedToken = function (
                        serverAuthenticationRequest,
                        account
                    ) {
                        var accessTokenCacheItem = null;
                        var scopes = serverAuthenticationRequest.scopes;
                        // filter by clientId and account
                        var tokenCacheItems =
                            this.cacheStorage.getAllAccessTokens(
                                this.clientId,
                                account ? account.homeAccountIdentifier : null
                            );
                        // No match found after initial filtering
                        if (tokenCacheItems.length === 0) {
                            return null;
                        }
                        var filteredItems = [];
                        // if no authority passed
                        if (!serverAuthenticationRequest.authority) {
                            // filter by scope
                            for (var i = 0; i < tokenCacheItems.length; i++) {
                                var cacheItem = tokenCacheItems[i];
                                var cachedScopes =
                                    cacheItem.key.scopes.split(" ");
                                if (
                                    Utils_1.Utils.containsScope(
                                        cachedScopes,
                                        scopes
                                    )
                                ) {
                                    filteredItems.push(cacheItem);
                                }
                            }
                            // if only one cached token found
                            if (filteredItems.length === 1) {
                                accessTokenCacheItem = filteredItems[0];
                                serverAuthenticationRequest.authorityInstance =
                                    AuthorityFactory_1.AuthorityFactory.CreateInstance(
                                        accessTokenCacheItem.key.authority,
                                        this.config.auth.validateAuthority
                                    );
                            }
                            // if more than one cached token is found
                            else if (filteredItems.length > 1) {
                                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(
                                    scopes.toString()
                                );
                            }
                            // if no match found, check if there was a single authority used
                            else {
                                var authorityList = this.getUniqueAuthority(
                                    tokenCacheItems,
                                    "authority"
                                );
                                if (authorityList.length > 1) {
                                    throw ClientAuthError_1.ClientAuthError.createMultipleAuthoritiesInCacheError(
                                        scopes.toString()
                                    );
                                }
                                serverAuthenticationRequest.authorityInstance =
                                    AuthorityFactory_1.AuthorityFactory.CreateInstance(
                                        authorityList[0],
                                        this.config.auth.validateAuthority
                                    );
                            }
                        }
                        // if an authority is passed in the API
                        else {
                            // filter by authority and scope
                            for (var i = 0; i < tokenCacheItems.length; i++) {
                                var cacheItem = tokenCacheItems[i];
                                var cachedScopes =
                                    cacheItem.key.scopes.split(" ");
                                if (
                                    Utils_1.Utils.containsScope(
                                        cachedScopes,
                                        scopes
                                    ) &&
                                    Utils_1.Utils.CanonicalizeUri(
                                        cacheItem.key.authority
                                    ) === serverAuthenticationRequest.authority
                                ) {
                                    filteredItems.push(cacheItem);
                                }
                            }
                            // no match
                            if (filteredItems.length === 0) {
                                return null;
                            }
                            // if only one cachedToken Found
                            else if (filteredItems.length === 1) {
                                accessTokenCacheItem = filteredItems[0];
                            } else {
                                // if more than cached token is found
                                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(
                                    scopes.toString()
                                );
                            }
                        }
                        if (accessTokenCacheItem != null) {
                            var expired = Number(
                                accessTokenCacheItem.value.expiresIn
                            );
                            // If expiration is within offset, it will force renew
                            var offset =
                                this.config.system.tokenRenewalOffsetSeconds ||
                                300;
                            if (
                                expired &&
                                expired > Utils_1.Utils.now() + offset
                            ) {
                                var idToken = new IdToken_1.IdToken(
                                    accessTokenCacheItem.value.idToken
                                );
                                if (!account) {
                                    account = this.getAccount();
                                    if (!account) {
                                        throw AuthError_1.AuthError.createUnexpectedError(
                                            "Account should not be null here."
                                        );
                                    }
                                }
                                var aState = this.getAccountState(
                                    serverAuthenticationRequest.state
                                );
                                var response = {
                                    uniqueId: "",
                                    tenantId: "",
                                    tokenType:
                                        accessTokenCacheItem.value.idToken ===
                                        accessTokenCacheItem.value.accessToken
                                            ? Constants_1.Constants.idToken
                                            : Constants_1.Constants.accessToken,
                                    idToken: idToken,
                                    accessToken:
                                        accessTokenCacheItem.value.accessToken,
                                    scopes: accessTokenCacheItem.key.scopes.split(
                                        " "
                                    ),
                                    expiresOn: new Date(expired * 1000),
                                    account: account,
                                    accountState: aState,
                                };
                                Utils_1.Utils.setResponseIdToken(
                                    response,
                                    idToken
                                );
                                return response;
                            } else {
                                this.cacheStorage.removeItem(
                                    JSON.stringify(filteredItems[0].key)
                                );
                                return null;
                            }
                        } else {
                            return null;
                        }
                    };
                    /**
                     * @hidden
                     * Used to get a unique list of authoritues from the cache
                     * @param {Array<AccessTokenCacheItem>}  accessTokenCacheItems - accessTokenCacheItems saved in the cache
                     * @ignore
                     */
                    UserAgentApplication.prototype.getUniqueAuthority =
                        function (accessTokenCacheItems, property) {
                            var authorityList = [];
                            var flags = [];
                            accessTokenCacheItems.forEach(function (element) {
                                if (
                                    element.key.hasOwnProperty(property) &&
                                    flags.indexOf(element.key[property]) === -1
                                ) {
                                    flags.push(element.key[property]);
                                    authorityList.push(element.key[property]);
                                }
                            });
                            return authorityList;
                        };
                    /**
                     * @hidden
                     * Check if ADAL id_token exists and return if exists.
                     *
                     */
                    UserAgentApplication.prototype.extractADALIdToken =
                        function () {
                            var adalIdToken = this.cacheStorage.getItem(
                                Constants_1.Constants.adalIdToken
                            );
                            if (!Utils_1.Utils.isEmpty(adalIdToken)) {
                                return Utils_1.Utils.extractIdToken(
                                    adalIdToken
                                );
                            }
                            return null;
                        };
                    /**
                     * @hidden
                     * Acquires access token using a hidden iframe.
                     * @ignore
                     */
                    UserAgentApplication.prototype.renewToken = function (
                        scopes,
                        resolve,
                        reject,
                        account,
                        serverAuthenticationRequest
                    ) {
                        var scope = scopes.join(" ").toLowerCase();
                        this.logger.verbose(
                            "renewToken is called for scope:" + scope
                        );
                        var frameHandle = this.addHiddenIFrame(
                            "msalRenewFrame" + scope
                        );
                        this.updateCacheEntries(
                            serverAuthenticationRequest,
                            account
                        );
                        this.logger.verbose(
                            "Renew token Expected state: " +
                                serverAuthenticationRequest.state
                        );
                        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
                        var urlNavigate =
                            Utils_1.Utils.urlRemoveQueryStringParameter(
                                serverAuthenticationRequest.createNavigateUrl(
                                    scopes
                                ),
                                Constants_1.Constants.prompt
                            ) + Constants_1.Constants.prompt_none;
                        window.renewStates.push(
                            serverAuthenticationRequest.state
                        );
                        window.requestType = Constants_1.Constants.renewToken;
                        this.registerCallback(
                            serverAuthenticationRequest.state,
                            scope,
                            resolve,
                            reject
                        );
                        this.logger.infoPii("Navigate to:" + urlNavigate);
                        frameHandle.src = "about:blank";
                        this.loadIframeTimeout(
                            urlNavigate,
                            "msalRenewFrame" + scope,
                            scope
                        );
                    };
                    /**
                     * @hidden
                     * Renews idtoken for app"s own backend when clientId is passed as a single scope in the scopes array.
                     * @ignore
                     */
                    UserAgentApplication.prototype.renewIdToken = function (
                        scopes,
                        resolve,
                        reject,
                        account,
                        serverAuthenticationRequest
                    ) {
                        this.logger.info("renewidToken is called");
                        var frameHandle =
                            this.addHiddenIFrame("msalIdTokenFrame");
                        this.updateCacheEntries(
                            serverAuthenticationRequest,
                            account
                        );
                        this.logger.verbose(
                            "Renew Idtoken Expected state: " +
                                serverAuthenticationRequest.state
                        );
                        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
                        var urlNavigate =
                            Utils_1.Utils.urlRemoveQueryStringParameter(
                                serverAuthenticationRequest.createNavigateUrl(
                                    scopes
                                ),
                                Constants_1.Constants.prompt
                            ) + Constants_1.Constants.prompt_none;
                        if (this.silentLogin) {
                            window.requestType = Constants_1.Constants.login;
                            this.silentAuthenticationState =
                                serverAuthenticationRequest.state;
                        } else {
                            window.requestType =
                                Constants_1.Constants.renewToken;
                            window.renewStates.push(
                                serverAuthenticationRequest.state
                            );
                        }
                        // note: scope here is clientId
                        this.registerCallback(
                            serverAuthenticationRequest.state,
                            this.clientId,
                            resolve,
                            reject
                        );
                        this.logger.infoPii("Navigate to:" + urlNavigate);
                        frameHandle.src = "about:blank";
                        this.loadIframeTimeout(
                            urlNavigate,
                            "msalIdTokenFrame",
                            this.clientId
                        );
                    };
                    /**
                     * @hidden
                     *
                     * This method must be called for processing the response received from AAD. It extracts the hash, processes the token or error, saves it in the cache and calls the registered callbacks with the result.
                     * @param {string} authority authority received in the redirect response from AAD.
                     * @param {TokenResponse} requestInfo an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
                     * @param {Account} account account object for which scopes are consented for. The default account is the logged in account.
                     * @param {ClientInfo} clientInfo clientInfo received as part of the response comprising of fields uid and utid.
                     * @param {IdToken} idToken idToken received as part of the response.
                     * @ignore
                     * @private
                     */
                    /* tslint:disable:no-string-literal */
                    UserAgentApplication.prototype.saveAccessToken = function (
                        response,
                        authority,
                        parameters,
                        clientInfo
                    ) {
                        var scope;
                        var accessTokenResponse = tslib_1.__assign(
                            {},
                            response
                        );
                        var clientObj = new ClientInfo_1.ClientInfo(clientInfo);
                        // if the response contains "scope"
                        if (parameters.hasOwnProperty("scope")) {
                            // read the scopes
                            scope = parameters["scope"];
                            var consentedScopes = scope.split(" ");
                            // retrieve all access tokens from the cache, remove the dup scores
                            var accessTokenCacheItems =
                                this.cacheStorage.getAllAccessTokens(
                                    this.clientId,
                                    authority
                                );
                            for (
                                var i = 0;
                                i < accessTokenCacheItems.length;
                                i++
                            ) {
                                var accessTokenCacheItem =
                                    accessTokenCacheItems[i];
                                if (
                                    accessTokenCacheItem.key
                                        .homeAccountIdentifier ===
                                    response.account.homeAccountIdentifier
                                ) {
                                    var cachedScopes =
                                        accessTokenCacheItem.key.scopes.split(
                                            " "
                                        );
                                    if (
                                        Utils_1.Utils.isIntersectingScopes(
                                            cachedScopes,
                                            consentedScopes
                                        )
                                    ) {
                                        this.cacheStorage.removeItem(
                                            JSON.stringify(
                                                accessTokenCacheItem.key
                                            )
                                        );
                                    }
                                }
                            }
                            // Generate and cache accessTokenKey and accessTokenValue
                            var expiresIn = Utils_1.Utils.expiresIn(
                                parameters[Constants_1.Constants.expiresIn]
                            ).toString();
                            var accessTokenKey =
                                new AccessTokenKey_1.AccessTokenKey(
                                    authority,
                                    this.clientId,
                                    scope,
                                    clientObj.uid,
                                    clientObj.utid
                                );
                            var accessTokenValue =
                                new AccessTokenValue_1.AccessTokenValue(
                                    parameters[
                                        Constants_1.Constants.accessToken
                                    ],
                                    response.idToken.rawIdToken,
                                    expiresIn,
                                    clientInfo
                                );
                            this.cacheStorage.setItem(
                                JSON.stringify(accessTokenKey),
                                JSON.stringify(accessTokenValue)
                            );
                            accessTokenResponse.accessToken =
                                parameters[Constants_1.Constants.accessToken];
                            accessTokenResponse.scopes = consentedScopes;
                            var exp = Number(expiresIn);
                            if (exp) {
                                accessTokenResponse.expiresOn = new Date(
                                    (Utils_1.Utils.now() + exp) * 1000
                                );
                            } else {
                                this.logger.error(
                                    "Could not parse expiresIn parameter. Given value: " +
                                        expiresIn
                                );
                            }
                        }
                        // if the response does not contain "scope" - scope is usually client_id and the token will be id_token
                        else {
                            scope = this.clientId;
                            // Generate and cache accessTokenKey and accessTokenValue
                            var accessTokenKey =
                                new AccessTokenKey_1.AccessTokenKey(
                                    authority,
                                    this.clientId,
                                    scope,
                                    clientObj.uid,
                                    clientObj.utid
                                );
                            var accessTokenValue =
                                new AccessTokenValue_1.AccessTokenValue(
                                    parameters[Constants_1.Constants.idToken],
                                    parameters[Constants_1.Constants.idToken],
                                    response.idToken.expiration,
                                    clientInfo
                                );
                            this.cacheStorage.setItem(
                                JSON.stringify(accessTokenKey),
                                JSON.stringify(accessTokenValue)
                            );
                            accessTokenResponse.scopes = [scope];
                            accessTokenResponse.accessToken =
                                parameters[Constants_1.Constants.idToken];
                            var exp = Number(response.idToken.expiration);
                            if (exp) {
                                accessTokenResponse.expiresOn = new Date(
                                    exp * 1000
                                );
                            } else {
                                this.logger.error(
                                    "Could not parse expiresIn parameter"
                                );
                            }
                        }
                        return accessTokenResponse;
                    };
                    /**
                     * @hidden
                     * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the account object.
                     * @ignore
                     */
                    UserAgentApplication.prototype.saveTokenFromHash =
                        function (hash, stateInfo) {
                            this.logger.info(
                                "State status:" +
                                    stateInfo.stateMatch +
                                    "; Request type:" +
                                    stateInfo.requestType
                            );
                            this.cacheStorage.setItem(
                                Constants_1.Constants.msalError,
                                ""
                            );
                            this.cacheStorage.setItem(
                                Constants_1.Constants.msalErrorDescription,
                                ""
                            );
                            var response = {
                                uniqueId: "",
                                tenantId: "",
                                tokenType: "",
                                idToken: null,
                                accessToken: null,
                                scopes: [],
                                expiresOn: null,
                                account: null,
                                accountState: "",
                            };
                            var error;
                            var hashParams = this.deserializeHash(hash);
                            var authorityKey = "";
                            var acquireTokenAccountKey = "";
                            // If server returns an error
                            if (
                                hashParams.hasOwnProperty(
                                    Constants_1.Constants.errorDescription
                                ) ||
                                hashParams.hasOwnProperty(
                                    Constants_1.Constants.error
                                )
                            ) {
                                this.logger.infoPii(
                                    "Error :" +
                                        hashParams[
                                            Constants_1.Constants.error
                                        ] +
                                        "; Error description:" +
                                        hashParams[
                                            Constants_1.Constants
                                                .errorDescription
                                        ]
                                );
                                this.cacheStorage.setItem(
                                    Constants_1.Constants.msalError,
                                    hashParams[Constants_1.Constants.error]
                                );
                                this.cacheStorage.setItem(
                                    Constants_1.Constants.msalErrorDescription,
                                    hashParams[
                                        Constants_1.Constants.errorDescription
                                    ]
                                );
                                // login
                                if (
                                    stateInfo.requestType ===
                                    Constants_1.Constants.login
                                ) {
                                    this.loginInProgress = false;
                                    this.cacheStorage.setItem(
                                        Constants_1.Constants.loginError,
                                        hashParams[
                                            Constants_1.Constants
                                                .errorDescription
                                        ] +
                                            ":" +
                                            hashParams[
                                                Constants_1.Constants.error
                                            ]
                                    );
                                    authorityKey =
                                        Storage_1.Storage.generateAuthorityKey(
                                            stateInfo.state
                                        );
                                }
                                // acquireToken
                                if (
                                    stateInfo.requestType ===
                                    Constants_1.Constants.renewToken
                                ) {
                                    this.acquireTokenInProgress = false;
                                    authorityKey =
                                        Storage_1.Storage.generateAuthorityKey(
                                            stateInfo.state
                                        );
                                    var account = this.getAccount();
                                    var accountId = void 0;
                                    if (
                                        account &&
                                        !Utils_1.Utils.isEmpty(
                                            account.homeAccountIdentifier
                                        )
                                    ) {
                                        accountId =
                                            account.homeAccountIdentifier;
                                    } else {
                                        accountId =
                                            Constants_1.Constants.no_account;
                                    }
                                    acquireTokenAccountKey =
                                        Storage_1.Storage.generateAcquireTokenAccountKey(
                                            accountId,
                                            stateInfo.state
                                        );
                                }
                                if (
                                    this.isInteractionRequired(
                                        hashParams[
                                            Constants_1.Constants
                                                .errorDescription
                                        ]
                                    )
                                ) {
                                    error =
                                        new InteractionRequiredAuthError_1.InteractionRequiredAuthError(
                                            hashParams[
                                                Constants_1.Constants.error
                                            ],
                                            hashParams[
                                                Constants_1.Constants.errorDescription
                                            ]
                                        );
                                } else {
                                    error = new ServerError_1.ServerError(
                                        hashParams[Constants_1.Constants.error],
                                        hashParams[
                                            Constants_1.Constants.errorDescription
                                        ]
                                    );
                                }
                            }
                            // If the server returns "Success"
                            else {
                                // Verify the state from redirect and record tokens to storage if exists
                                if (stateInfo.stateMatch) {
                                    this.logger.info("State is right");
                                    if (
                                        hashParams.hasOwnProperty(
                                            Constants_1.Constants.sessionState
                                        )
                                    ) {
                                        this.cacheStorage.setItem(
                                            Constants_1.Constants
                                                .msalSessionState,
                                            hashParams[
                                                Constants_1.Constants
                                                    .sessionState
                                            ]
                                        );
                                    }
                                    response.accountState =
                                        this.getAccountState(stateInfo.state);
                                    var clientInfo = "";
                                    // Process access_token
                                    if (
                                        hashParams.hasOwnProperty(
                                            Constants_1.Constants.accessToken
                                        )
                                    ) {
                                        this.logger.info(
                                            "Fragment has access token"
                                        );
                                        this.acquireTokenInProgress = false;
                                        // retrieve the id_token from response if present :
                                        if (
                                            hashParams.hasOwnProperty(
                                                Constants_1.Constants.idToken
                                            )
                                        ) {
                                            response.idToken =
                                                new IdToken_1.IdToken(
                                                    hashParams[
                                                        Constants_1.Constants.idToken
                                                    ]
                                                );
                                        } else {
                                            response =
                                                Utils_1.Utils.setResponseIdToken(
                                                    response,
                                                    new IdToken_1.IdToken(
                                                        this.cacheStorage.getItem(
                                                            Constants_1
                                                                .Constants
                                                                .idTokenKey
                                                        )
                                                    )
                                                );
                                        }
                                        // retrieve the authority from cache and replace with tenantID
                                        var authorityKey_1 =
                                            Storage_1.Storage.generateAuthorityKey(
                                                stateInfo.state
                                            );
                                        var authority =
                                            this.cacheStorage.getItem(
                                                authorityKey_1,
                                                this.inCookie
                                            );
                                        if (!Utils_1.Utils.isEmpty(authority)) {
                                            authority =
                                                Utils_1.Utils.replaceTenantPath(
                                                    authority,
                                                    response.tenantId
                                                );
                                        }
                                        // retrieve client_info - if it is not found, generate the uid and utid from idToken
                                        if (
                                            hashParams.hasOwnProperty(
                                                Constants_1.Constants.clientInfo
                                            )
                                        ) {
                                            clientInfo =
                                                hashParams[
                                                    Constants_1.Constants
                                                        .clientInfo
                                                ];
                                        } else {
                                            this.logger.warning(
                                                "ClientInfo not received in the response from AAD"
                                            );
                                            throw ClientAuthError_1.ClientAuthError.createClientInfoNotPopulatedError(
                                                "ClientInfo not received in the response from the server"
                                            );
                                        }
                                        response.account =
                                            Account_1.Account.createAccount(
                                                response.idToken,
                                                new ClientInfo_1.ClientInfo(
                                                    clientInfo
                                                )
                                            );
                                        var accountKey = void 0;
                                        if (
                                            response.account &&
                                            !Utils_1.Utils.isEmpty(
                                                response.account
                                                    .homeAccountIdentifier
                                            )
                                        ) {
                                            accountKey =
                                                response.account
                                                    .homeAccountIdentifier;
                                        } else {
                                            accountKey =
                                                Constants_1.Constants
                                                    .no_account;
                                        }
                                        acquireTokenAccountKey =
                                            Storage_1.Storage.generateAcquireTokenAccountKey(
                                                accountKey,
                                                stateInfo.state
                                            );
                                        var acquireTokenAccountKey_noaccount =
                                            Storage_1.Storage.generateAcquireTokenAccountKey(
                                                Constants_1.Constants
                                                    .no_account,
                                                stateInfo.state
                                            );
                                        var cachedAccount =
                                            this.cacheStorage.getItem(
                                                acquireTokenAccountKey
                                            );
                                        var acquireTokenAccount = void 0;
                                        // Check with the account in the Cache
                                        if (
                                            !Utils_1.Utils.isEmpty(
                                                cachedAccount
                                            )
                                        ) {
                                            acquireTokenAccount =
                                                JSON.parse(cachedAccount);
                                            if (
                                                response.account &&
                                                acquireTokenAccount &&
                                                Utils_1.Utils.compareAccounts(
                                                    response.account,
                                                    acquireTokenAccount
                                                )
                                            ) {
                                                response = this.saveAccessToken(
                                                    response,
                                                    authority,
                                                    hashParams,
                                                    clientInfo
                                                );
                                                this.logger.info(
                                                    "The user object received in the response is the same as the one passed in the acquireToken request"
                                                );
                                            } else {
                                                this.logger.warning(
                                                    "The account object created from the response is not the same as the one passed in the acquireToken request"
                                                );
                                            }
                                        } else if (
                                            !Utils_1.Utils.isEmpty(
                                                this.cacheStorage.getItem(
                                                    acquireTokenAccountKey_noaccount
                                                )
                                            )
                                        ) {
                                            response = this.saveAccessToken(
                                                response,
                                                authority,
                                                hashParams,
                                                clientInfo
                                            );
                                        }
                                    }
                                    // Process id_token
                                    if (
                                        hashParams.hasOwnProperty(
                                            Constants_1.Constants.idToken
                                        )
                                    ) {
                                        this.logger.info(
                                            "Fragment has id token"
                                        );
                                        // login no longer in progress
                                        this.loginInProgress = false;
                                        response =
                                            Utils_1.Utils.setResponseIdToken(
                                                response,
                                                new IdToken_1.IdToken(
                                                    hashParams[
                                                        Constants_1.Constants.idToken
                                                    ]
                                                )
                                            );
                                        if (
                                            hashParams.hasOwnProperty(
                                                Constants_1.Constants.clientInfo
                                            )
                                        ) {
                                            clientInfo =
                                                hashParams[
                                                    Constants_1.Constants
                                                        .clientInfo
                                                ];
                                        } else {
                                            this.logger.warning(
                                                "ClientInfo not received in the response from AAD"
                                            );
                                        }
                                        authorityKey =
                                            Storage_1.Storage.generateAuthorityKey(
                                                stateInfo.state
                                            );
                                        var authority =
                                            this.cacheStorage.getItem(
                                                authorityKey,
                                                this.inCookie
                                            );
                                        if (!Utils_1.Utils.isEmpty(authority)) {
                                            authority =
                                                Utils_1.Utils.replaceTenantPath(
                                                    authority,
                                                    response.idToken.tenantId
                                                );
                                        }
                                        this.account =
                                            Account_1.Account.createAccount(
                                                response.idToken,
                                                new ClientInfo_1.ClientInfo(
                                                    clientInfo
                                                )
                                            );
                                        response.account = this.account;
                                        if (
                                            response.idToken &&
                                            response.idToken.nonce
                                        ) {
                                            // check nonce integrity if idToken has nonce - throw an error if not matched
                                            if (
                                                response.idToken.nonce !==
                                                this.cacheStorage.getItem(
                                                    Constants_1.Constants
                                                        .nonceIdToken,
                                                    this.inCookie
                                                )
                                            ) {
                                                this.account = null;
                                                this.cacheStorage.setItem(
                                                    Constants_1.Constants
                                                        .loginError,
                                                    "Nonce Mismatch. Expected Nonce: " +
                                                        this.cacheStorage.getItem(
                                                            Constants_1
                                                                .Constants
                                                                .nonceIdToken,
                                                            this.inCookie
                                                        ) +
                                                        "," +
                                                        "Actual Nonce: " +
                                                        response.idToken.nonce
                                                );
                                                this.logger.error(
                                                    "Nonce Mismatch.Expected Nonce: " +
                                                        this.cacheStorage.getItem(
                                                            Constants_1
                                                                .Constants
                                                                .nonceIdToken,
                                                            this.inCookie
                                                        ) +
                                                        "," +
                                                        "Actual Nonce: " +
                                                        response.idToken.nonce
                                                );
                                                error =
                                                    ClientAuthError_1.ClientAuthError.createNonceMismatchError(
                                                        this.cacheStorage.getItem(
                                                            Constants_1
                                                                .Constants
                                                                .nonceIdToken,
                                                            this.inCookie
                                                        ),
                                                        response.idToken.nonce
                                                    );
                                            }
                                            // Save the token
                                            else {
                                                this.cacheStorage.setItem(
                                                    Constants_1.Constants
                                                        .idTokenKey,
                                                    hashParams[
                                                        Constants_1.Constants
                                                            .idToken
                                                    ]
                                                );
                                                this.cacheStorage.setItem(
                                                    Constants_1.Constants
                                                        .msalClientInfo,
                                                    clientInfo
                                                );
                                                // Save idToken as access token for app itself
                                                this.saveAccessToken(
                                                    response,
                                                    authority,
                                                    hashParams,
                                                    clientInfo
                                                );
                                            }
                                        } else {
                                            authorityKey = stateInfo.state;
                                            acquireTokenAccountKey =
                                                stateInfo.state;
                                            this.logger.error(
                                                "Invalid id_token received in the response"
                                            );
                                            error =
                                                ClientAuthError_1.ClientAuthError.createInvalidIdTokenError(
                                                    response.idToken
                                                );
                                            this.cacheStorage.setItem(
                                                Constants_1.Constants.msalError,
                                                error.errorCode
                                            );
                                            this.cacheStorage.setItem(
                                                Constants_1.Constants
                                                    .msalErrorDescription,
                                                error.errorMessage
                                            );
                                        }
                                    }
                                }
                                // State mismatch - unexpected/invalid state
                                else {
                                    authorityKey = stateInfo.state;
                                    acquireTokenAccountKey = stateInfo.state;
                                    var expectedState =
                                        this.cacheStorage.getItem(
                                            Constants_1.Constants.stateLogin,
                                            this.inCookie
                                        );
                                    this.logger.error(
                                        "State Mismatch.Expected State: " +
                                            expectedState +
                                            "," +
                                            "Actual State: " +
                                            stateInfo.state
                                    );
                                    error =
                                        ClientAuthError_1.ClientAuthError.createInvalidStateError(
                                            stateInfo.state,
                                            expectedState
                                        );
                                    this.cacheStorage.setItem(
                                        Constants_1.Constants.msalError,
                                        error.errorCode
                                    );
                                    this.cacheStorage.setItem(
                                        Constants_1.Constants
                                            .msalErrorDescription,
                                        error.errorMessage
                                    );
                                }
                            }
                            this.cacheStorage.setItem(
                                Constants_1.Constants.renewStatus +
                                    stateInfo.state,
                                Constants_1.Constants.tokenRenewStatusCompleted
                            );
                            this.cacheStorage.removeAcquireTokenEntries();
                            // this is required if navigateToLoginRequestUrl=false
                            if (this.inCookie) {
                                this.cacheStorage.setItemCookie(
                                    authorityKey,
                                    "",
                                    -1
                                );
                                this.cacheStorage.clearCookie();
                            }
                            if (error) {
                                throw error;
                            }
                            if (!response) {
                                throw AuthError_1.AuthError.createUnexpectedError(
                                    "Response is null"
                                );
                            }
                            return response;
                        };
                    /* tslint:enable:no-string-literal */
                    //#endregion
                    //#region Account
                    /**
                     * Returns the signed in account (received from an account object created at the time of login) or null when no state is found
                     * @returns {@link Account} account object stored in MSAL
                     */
                    UserAgentApplication.prototype.getAccount = function () {
                        // if a session already exists, get the account from the session
                        if (this.account) {
                            return this.account;
                        }
                        // frame is used to get idToken and populate the account for the given session
                        var rawIdToken = this.cacheStorage.getItem(
                            Constants_1.Constants.idTokenKey
                        );
                        var rawClientInfo = this.cacheStorage.getItem(
                            Constants_1.Constants.msalClientInfo
                        );
                        if (
                            !Utils_1.Utils.isEmpty(rawIdToken) &&
                            !Utils_1.Utils.isEmpty(rawClientInfo)
                        ) {
                            var idToken = new IdToken_1.IdToken(rawIdToken);
                            var clientInfo = new ClientInfo_1.ClientInfo(
                                rawClientInfo
                            );
                            this.account = Account_1.Account.createAccount(
                                idToken,
                                clientInfo
                            );
                            return this.account;
                        }
                        // if login not yet done, return null
                        return null;
                    };
                    /**
                     * @hidden
                     *
                     * Extracts state value from the accountState sent with the authentication request.
                     * @returns {string} scope.
                     * @ignore
                     */
                    UserAgentApplication.prototype.getAccountState = function (
                        state
                    ) {
                        if (state) {
                            var splitIndex = state.indexOf("|");
                            if (
                                splitIndex > -1 &&
                                splitIndex + 1 < state.length
                            ) {
                                return state.substring(splitIndex + 1);
                            }
                        }
                        return state;
                    };
                    /**
                     * Used to filter all cached items and return a list of unique accounts based on homeAccountIdentifier.
                     *
                     * @param {@link Array<Account>} Accounts - accounts saved in the cache.
                     */
                    UserAgentApplication.prototype.getAllAccounts =
                        function () {
                            var accounts = [];
                            var accessTokenCacheItems =
                                this.cacheStorage.getAllAccessTokens(
                                    Constants_1.Constants.clientId,
                                    Constants_1.Constants.homeAccountIdentifier
                                );
                            for (
                                var i = 0;
                                i < accessTokenCacheItems.length;
                                i++
                            ) {
                                var idToken = new IdToken_1.IdToken(
                                    accessTokenCacheItems[i].value.idToken
                                );
                                var clientInfo = new ClientInfo_1.ClientInfo(
                                    accessTokenCacheItems[
                                        i
                                    ].value.homeAccountIdentifier
                                );
                                var account = Account_1.Account.createAccount(
                                    idToken,
                                    clientInfo
                                );
                                accounts.push(account);
                            }
                            return this.getUniqueAccounts(accounts);
                        };
                    /**
                     * @hidden
                     *
                     * Used to filter accounts based on homeAccountIdentifier
                     * @param {Array<Account>}  Accounts - accounts saved in the cache
                     * @ignore
                     */
                    UserAgentApplication.prototype.getUniqueAccounts =
                        function (accounts) {
                            if (!accounts || accounts.length <= 1) {
                                return accounts;
                            }
                            var flags = [];
                            var uniqueAccounts = [];
                            for (
                                var index = 0;
                                index < accounts.length;
                                ++index
                            ) {
                                if (
                                    accounts[index].homeAccountIdentifier &&
                                    flags.indexOf(
                                        accounts[index].homeAccountIdentifier
                                    ) === -1
                                ) {
                                    flags.push(
                                        accounts[index].homeAccountIdentifier
                                    );
                                    uniqueAccounts.push(accounts[index]);
                                }
                            }
                            return uniqueAccounts;
                        };
                    //#endregion
                    //#region Scopes (Extract to Scopes.ts)
                    // Note: "this" dependency in this section is minimal.
                    // If pCacheStorage is separated from the class object, or passed as a fn param, scopesUtils.ts can be created
                    /**
                     * @hidden
                     *
                     * Used to validate the scopes input parameter requested  by the developer.
                     * @param {Array<string>} scopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
                     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
                     * @ignore
                     */
                    UserAgentApplication.prototype.validateInputScope =
                        function (scopes, scopesRequired) {
                            if (!scopes) {
                                if (scopesRequired) {
                                    throw ClientConfigurationError_1.ClientConfigurationError.createScopesRequiredError(
                                        scopes
                                    );
                                } else {
                                    return;
                                }
                            }
                            // Check that scopes is an array object (also throws error if scopes == null)
                            if (!Array.isArray(scopes)) {
                                throw ClientConfigurationError_1.ClientConfigurationError.createScopesNonArrayError(
                                    scopes
                                );
                            }
                            // Check that scopes is not an empty array
                            if (scopes.length < 1) {
                                throw ClientConfigurationError_1.ClientConfigurationError.createEmptyScopesArrayError(
                                    scopes.toString()
                                );
                            }
                            // Check that clientId is passed as single scope
                            if (scopes.indexOf(this.clientId) > -1) {
                                if (scopes.length > 1) {
                                    throw ClientConfigurationError_1.ClientConfigurationError.createClientIdSingleScopeError(
                                        scopes.toString()
                                    );
                                }
                            }
                        };
                    /**
                     * @hidden
                     *
                     * Extracts scope value from the state sent with the authentication request.
                     * @param {string} state
                     * @returns {string} scope.
                     * @ignore
                     */
                    UserAgentApplication.prototype.getScopeFromState =
                        function (state) {
                            if (state) {
                                var splitIndex = state.indexOf("|");
                                if (
                                    splitIndex > -1 &&
                                    splitIndex + 1 < state.length
                                ) {
                                    return state.substring(splitIndex + 1);
                                }
                            }
                            return "";
                        };
                    /**
                     * @ignore
                     * Appends extraScopesToConsent if passed
                     * @param {@link AuthenticationParameters}
                     */
                    UserAgentApplication.prototype.appendScopes = function (
                        request
                    ) {
                        var scopes;
                        if (request && request.scopes) {
                            if (request.extraScopesToConsent) {
                                scopes = request.scopes.concat(
                                    request.extraScopesToConsent
                                );
                            } else {
                                scopes = request.scopes;
                            }
                        }
                        return scopes;
                    };
                    //#endregion
                    //#region Angular
                    /**
                     * @hidden
                     *
                     * Broadcast messages - Used only for Angular?  *
                     * @param eventName
                     * @param data
                     */
                    UserAgentApplication.prototype.broadcast = function (
                        eventName,
                        data
                    ) {
                        var evt = new CustomEvent(eventName, { detail: data });
                        window.dispatchEvent(evt);
                    };
                    /**
                     * @hidden
                     *
                     * Helper function to retrieve the cached token
                     *
                     * @param scopes
                     * @param {@link Account} account
                     * @param state
                     * @return {@link AuthResponse} AuthResponse
                     */
                    UserAgentApplication.prototype.getCachedTokenInternal =
                        function (scopes, account, state) {
                            // Get the current session's account object
                            var accountObject = account || this.getAccount();
                            if (!accountObject) {
                                return null;
                            }
                            // Construct AuthenticationRequest based on response type
                            var newAuthority = this.authorityInstance
                                ? this.authorityInstance
                                : AuthorityFactory_1.AuthorityFactory.CreateInstance(
                                      this.authority,
                                      this.config.auth.validateAuthority
                                  );
                            var responseType = this.getTokenType(
                                accountObject,
                                scopes,
                                true
                            );
                            var serverAuthenticationRequest =
                                new ServerRequestParameters_1.ServerRequestParameters(
                                    newAuthority,
                                    this.clientId,
                                    scopes,
                                    responseType,
                                    this.getRedirectUri(),
                                    state
                                );
                            // get cached token
                            return this.getCachedToken(
                                serverAuthenticationRequest,
                                account
                            );
                        };
                    /**
                     * @hidden
                     *
                     * Get scopes for the Endpoint - Used in Angular to track protected and unprotected resources without interaction from the developer app
                     *
                     * @param endpoint
                     */
                    UserAgentApplication.prototype.getScopesForEndpoint =
                        function (endpoint) {
                            // if user specified list of unprotectedResources, no need to send token to these endpoints, return null.
                            if (
                                this.config.framework.unprotectedResources
                                    .length > 0
                            ) {
                                for (
                                    var i = 0;
                                    i <
                                    this.config.framework.unprotectedResources
                                        .length;
                                    i++
                                ) {
                                    if (
                                        endpoint.indexOf(
                                            this.config.framework
                                                .unprotectedResources[i]
                                        ) > -1
                                    ) {
                                        return null;
                                    }
                                }
                            }
                            // process all protected resources and send the matched one
                            if (
                                this.config.framework.protectedResourceMap
                                    .size > 0
                            ) {
                                for (
                                    var _i = 0,
                                        _a = Array.from(
                                            this.config.framework.protectedResourceMap.keys()
                                        );
                                    _i < _a.length;
                                    _i++
                                ) {
                                    var key = _a[_i];
                                    // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
                                    if (endpoint.indexOf(key) > -1) {
                                        return this.config.framework.protectedResourceMap.get(
                                            key
                                        );
                                    }
                                }
                            }
                            // default resource will be clientid if nothing specified
                            // App will use idtoken for calls to itself
                            // check if it's staring from http or https, needs to match with app host
                            if (
                                endpoint.indexOf("http://") > -1 ||
                                endpoint.indexOf("https://") > -1
                            ) {
                                if (
                                    this.getHostFromUri(endpoint) ===
                                    this.getHostFromUri(this.getRedirectUri())
                                ) {
                                    return new Array(this.clientId);
                                }
                            } else {
                                // in angular level, the url for $http interceptor call could be relative url,
                                // if it's relative call, we'll treat it as app backend call.
                                return new Array(this.clientId);
                            }
                            // if not the app's own backend or not a domain listed in the endpoints structure
                            return null;
                        };
                    /**
                     * Return boolean flag to developer to help inform if login is in progress
                     * @returns {boolean} true/false
                     */
                    UserAgentApplication.prototype.getLoginInProgress =
                        function () {
                            var pendingCallback = this.cacheStorage.getItem(
                                Constants_1.Constants.urlHash
                            );
                            if (pendingCallback) {
                                return true;
                            }
                            return this.loginInProgress;
                        };
                    /**
                     * @hidden
                     * @ignore
                     *
                     * @param loginInProgress
                     */
                    UserAgentApplication.prototype.setloginInProgress =
                        function (loginInProgress) {
                            this.loginInProgress = loginInProgress;
                        };
                    /**
                     * @hidden
                     * @ignore
                     *
                     * returns the status of acquireTokenInProgress
                     */
                    UserAgentApplication.prototype.getAcquireTokenInProgress =
                        function () {
                            return this.acquireTokenInProgress;
                        };
                    /**
                     * @hidden
                     * @ignore
                     *
                     * @param acquireTokenInProgress
                     */
                    UserAgentApplication.prototype.setAcquireTokenInProgress =
                        function (acquireTokenInProgress) {
                            this.acquireTokenInProgress =
                                acquireTokenInProgress;
                        };
                    /**
                     * @hidden
                     * @ignore
                     *
                     * returns the logger handle
                     */
                    UserAgentApplication.prototype.getLogger = function () {
                        return this.config.system.logger;
                    };
                    //#endregion
                    //#region Getters and Setters
                    /**
                     *
                     * Use to get the redirect uri configured in MSAL or null.
                     * Evaluates redirectUri if its a function, otherwise simply returns its value.
                     * @returns {string} redirect URL
                     *
                     */
                    UserAgentApplication.prototype.getRedirectUri =
                        function () {
                            if (
                                typeof this.config.auth.redirectUri ===
                                "function"
                            ) {
                                return this.config.auth.redirectUri();
                            }
                            return this.config.auth.redirectUri;
                        };
                    /**
                     * Use to get the post logout redirect uri configured in MSAL or null.
                     * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
                     *
                     * @returns {string} post logout redirect URL
                     */
                    UserAgentApplication.prototype.getPostLogoutRedirectUri =
                        function () {
                            if (
                                typeof this.config.auth
                                    .postLogoutRedirectUri === "function"
                            ) {
                                return this.config.auth.postLogoutRedirectUri();
                            }
                            return this.config.auth.postLogoutRedirectUri;
                        };
                    /**
                     * Use to get the current {@link Configuration} object in MSAL
                     *
                     * @returns {@link Configuration}
                     */
                    UserAgentApplication.prototype.getCurrentConfiguration =
                        function () {
                            if (!this.config) {
                                throw ClientConfigurationError_1.ClientConfigurationError.createNoSetConfigurationError();
                            }
                            return this.config;
                        };
                    //#endregion
                    //#region String Util (Should be extracted to Utils.ts)
                    /**
                     * @hidden
                     * @ignore
                     *
                     * Returns the anchor part(#) of the URL
                     */
                    UserAgentApplication.prototype.getHash = function (hash) {
                        if (hash.indexOf("#/") > -1) {
                            hash = hash.substring(hash.indexOf("#/") + 2);
                        } else if (hash.indexOf("#") > -1) {
                            hash = hash.substring(1);
                        }
                        return hash;
                    };
                    /**
                     * @hidden
                     * @ignore
                     *
                     * extract URI from the host
                     *
                     * @param {string} URI
                     * @returns {string} host from the URI
                     */
                    UserAgentApplication.prototype.getHostFromUri = function (
                        uri
                    ) {
                        // remove http:// or https:// from uri
                        var extractedUri = String(uri).replace(
                            /^(https?:)\/\//,
                            ""
                        );
                        extractedUri = extractedUri.split("/")[0];
                        return extractedUri;
                    };
                    /**
                     * @hidden
                     * @ignore
                     *
                     * Utils function to create the Authentication
                     * @param {@link account} account object
                     * @param scopes
                     * @param silentCall
                     *
                     * @returns {string} token type: id_token or access_token
                     *
                     */
                    UserAgentApplication.prototype.getTokenType = function (
                        accountObject,
                        scopes,
                        silentCall
                    ) {
                        // if account is passed and matches the account object/or set to getAccount() from cache
                        // if client-id is passed as scope, get id_token else token/id_token_token (in case no session exists)
                        var tokenType;
                        // acquireTokenSilent
                        if (silentCall) {
                            if (
                                Utils_1.Utils.compareAccounts(
                                    accountObject,
                                    this.getAccount()
                                )
                            ) {
                                tokenType =
                                    scopes.indexOf(this.config.auth.clientId) >
                                    -1
                                        ? ResponseTypes.id_token
                                        : ResponseTypes.token;
                            } else {
                                tokenType =
                                    scopes.indexOf(this.config.auth.clientId) >
                                    -1
                                        ? ResponseTypes.id_token
                                        : ResponseTypes.id_token_token;
                            }
                            return tokenType;
                        }
                        // all other cases
                        else {
                            if (
                                !Utils_1.Utils.compareAccounts(
                                    accountObject,
                                    this.getAccount()
                                )
                            ) {
                                tokenType = ResponseTypes.id_token_token;
                            } else {
                                tokenType =
                                    scopes.indexOf(this.clientId) > -1
                                        ? ResponseTypes.id_token
                                        : ResponseTypes.token;
                            }
                            return tokenType;
                        }
                    };
                    /**
                     * @hidden
                     * @ignore
                     *
                     * Sets the cachekeys for and stores the account information in cache
                     * @param account
                     * @param state
                     * @hidden
                     */
                    UserAgentApplication.prototype.setAccountCache = function (
                        account,
                        state
                    ) {
                        // Cache acquireTokenAccountKey
                        var accountId = account
                            ? this.getAccountId(account)
                            : Constants_1.Constants.no_account;
                        var acquireTokenAccountKey =
                            Storage_1.Storage.generateAcquireTokenAccountKey(
                                accountId,
                                state
                            );
                        this.cacheStorage.setItem(
                            acquireTokenAccountKey,
                            JSON.stringify(account)
                        );
                    };
                    /**
                     * @hidden
                     * @ignore
                     *
                     * Sets the cacheKey for and stores the authority information in cache
                     * @param state
                     * @param authority
                     * @hidden
                     */
                    UserAgentApplication.prototype.setAuthorityCache =
                        function (state, authority) {
                            // Cache authorityKey
                            var authorityKey =
                                Storage_1.Storage.generateAuthorityKey(state);
                            this.cacheStorage.setItem(
                                authorityKey,
                                Utils_1.Utils.CanonicalizeUri(authority),
                                this.inCookie
                            );
                        };
                    /**
                     * Updates account, authority, and nonce in cache
                     * @param serverAuthenticationRequest
                     * @param account
                     * @hidden
                     * @ignore
                     */
                    UserAgentApplication.prototype.updateCacheEntries =
                        function (
                            serverAuthenticationRequest,
                            account,
                            loginStartPage
                        ) {
                            // Cache account and authority
                            if (loginStartPage) {
                                // Cache the state, nonce, and login request data
                                this.cacheStorage.setItem(
                                    Constants_1.Constants.loginRequest,
                                    loginStartPage,
                                    this.inCookie
                                );
                                this.cacheStorage.setItem(
                                    Constants_1.Constants.loginError,
                                    ""
                                );
                                this.cacheStorage.setItem(
                                    Constants_1.Constants.stateLogin,
                                    serverAuthenticationRequest.state,
                                    this.inCookie
                                );
                                this.cacheStorage.setItem(
                                    Constants_1.Constants.nonceIdToken,
                                    serverAuthenticationRequest.nonce,
                                    this.inCookie
                                );
                                this.cacheStorage.setItem(
                                    Constants_1.Constants.msalError,
                                    ""
                                );
                                this.cacheStorage.setItem(
                                    Constants_1.Constants.msalErrorDescription,
                                    ""
                                );
                            } else {
                                this.setAccountCache(
                                    account,
                                    serverAuthenticationRequest.state
                                );
                            }
                            // Cache authorityKey
                            this.setAuthorityCache(
                                serverAuthenticationRequest.state,
                                serverAuthenticationRequest.authority
                            );
                            // Cache nonce
                            this.cacheStorage.setItem(
                                Constants_1.Constants.nonceIdToken,
                                serverAuthenticationRequest.nonce,
                                this.inCookie
                            );
                        };
                    /**
                     * Returns the unique identifier for the logged in account
                     * @param account
                     * @hidden
                     * @ignore
                     */
                    UserAgentApplication.prototype.getAccountId = function (
                        account
                    ) {
                        //return `${account.accountIdentifier}` + Constants.resourceDelimiter + `${account.homeAccountIdentifier}`;
                        var accountId;
                        if (
                            !Utils_1.Utils.isEmpty(
                                account.homeAccountIdentifier
                            )
                        ) {
                            accountId = account.homeAccountIdentifier;
                        } else {
                            accountId = Constants_1.Constants.no_account;
                        }
                        return accountId;
                    };
                    /**
                     * @hidden
                     * @ignore
                     *
                     * Construct 'tokenRequest' from the available data in adalIdToken
                     * @param extraQueryParameters
                     * @hidden
                     */
                    UserAgentApplication.prototype.buildIDTokenRequest =
                        function (request) {
                            var tokenRequest = {
                                scopes: [this.clientId],
                                authority: this.authority,
                                account: this.getAccount(),
                                extraQueryParameters:
                                    request.extraQueryParameters,
                            };
                            return tokenRequest;
                        };
                    /**
                     * @hidden
                     * @ignore
                     *
                     * Utility to populate QueryParameters and ExtraQueryParameters to ServerRequestParamerers
                     * @param request
                     * @param serverAuthenticationRequest
                     */
                    UserAgentApplication.prototype.populateQueryParams =
                        function (
                            account,
                            request,
                            serverAuthenticationRequest,
                            adalIdTokenObject
                        ) {
                            var queryParameters = {};
                            if (request) {
                                // add the prompt parameter to serverRequestParameters if passed
                                if (request.prompt) {
                                    this.validatePromptParameter(
                                        request.prompt
                                    );
                                    serverAuthenticationRequest.promptValue =
                                        request.prompt;
                                }
                                // Add claims challenge to serverRequestParameters if passed
                                if (request.claimsRequest) {
                                    AuthenticationParameters_1.validateClaimsRequest(
                                        request
                                    );
                                    serverAuthenticationRequest.claimsValue =
                                        request.claimsRequest;
                                }
                                // if the developer provides one of these, give preference to developer choice
                                if (Utils_1.Utils.isSSOParam(request)) {
                                    queryParameters =
                                        Utils_1.Utils.constructUnifiedCacheQueryParameter(
                                            request,
                                            null
                                        );
                                }
                            }
                            if (adalIdTokenObject) {
                                queryParameters =
                                    Utils_1.Utils.constructUnifiedCacheQueryParameter(
                                        null,
                                        adalIdTokenObject
                                    );
                            }
                            // adds sid/login_hint if not populated; populates domain_req, login_req and domain_hint
                            this.logger.verbose("Calling addHint parameters");
                            queryParameters = this.addHintParameters(
                                account,
                                queryParameters,
                                serverAuthenticationRequest
                            );
                            // sanity check for developer passed extraQueryParameters
                            var eQParams;
                            if (request) {
                                eQParams = this.sanitizeEQParams(request);
                            }
                            // Populate the extraQueryParameters to be sent to the server
                            serverAuthenticationRequest.queryParameters =
                                Utils_1.Utils.generateQueryParametersString(
                                    queryParameters
                                );
                            serverAuthenticationRequest.extraQueryParameters =
                                Utils_1.Utils.generateQueryParametersString(
                                    eQParams
                                );
                            return serverAuthenticationRequest;
                        };
                    /**
                     * @hidden
                     * @ignore
                     *
                     * Utility to test if valid prompt value is passed in the request
                     * @param request
                     */
                    UserAgentApplication.prototype.validatePromptParameter =
                        function (prompt) {
                            if (
                                !(
                                    [
                                        Constants_1.PromptState.LOGIN,
                                        Constants_1.PromptState.SELECT_ACCOUNT,
                                        Constants_1.PromptState.CONSENT,
                                        Constants_1.PromptState.NONE,
                                    ].indexOf(prompt) >= 0
                                )
                            ) {
                                throw ClientConfigurationError_1.ClientConfigurationError.createInvalidPromptError(
                                    prompt
                                );
                            }
                        };
                    /**
     * @hidden
     * @ignore
  
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
                    UserAgentApplication.prototype.sanitizeEQParams = function (
                        request
                    ) {
                        var eQParams = request.extraQueryParameters;
                        if (!eQParams) {
                            return null;
                        }
                        if (request.claimsRequest) {
                            this.logger.warning(
                                "Removed duplicate claims from extraQueryParameters. Please use either the claimsRequest field OR pass as extraQueryParameter - not both."
                            );
                            delete eQParams[Constants_1.Constants.claims];
                        }
                        delete eQParams[Constants_1.SSOTypes.SID];
                        delete eQParams[Constants_1.SSOTypes.LOGIN_HINT];
                        return eQParams;
                    };
                    tslib_1.__decorate(
                        [resolveTokenOnlyIfOutOfIframe],
                        UserAgentApplication.prototype,
                        "acquireTokenSilent",
                        null
                    );
                    return UserAgentApplication;
                })();
                exports.UserAgentApplication = UserAgentApplication;

                /***/
            },
            /* 10 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var Utils_1 = __webpack_require__(0);
                /**
                 * accountIdentifier       combination of idToken.uid and idToken.utid
                 * homeAccountIdentifier   combination of clientInfo.uid and clientInfo.utid
                 * userName                idToken.preferred_username
                 * name                    idToken.name
                 * idToken                 idToken
                 * sid                     idToken.sid - session identifier
                 * environment             idtoken.issuer (the authority that issues the token)
                 */
                var Account = /** @class */ (function () {
                    /**
                     * Creates an Account Object
                     * @praram accountIdentifier
                     * @param homeAccountIdentifier
                     * @param userName
                     * @param name
                     * @param idToken
                     * @param sid
                     * @param environment
                     */
                    function Account(
                        accountIdentifier,
                        homeAccountIdentifier,
                        userName,
                        name,
                        idToken,
                        sid,
                        environment
                    ) {
                        this.accountIdentifier = accountIdentifier;
                        this.homeAccountIdentifier = homeAccountIdentifier;
                        this.userName = userName;
                        this.name = name;
                        this.idToken = idToken;
                        this.sid = sid;
                        this.environment = environment;
                    }
                    /**
                     * @hidden
                     * @param idToken
                     * @param clientInfo
                     */
                    Account.createAccount = function (idToken, clientInfo) {
                        // create accountIdentifier
                        var accountIdentifier =
                            idToken.objectId || idToken.subject;
                        // create homeAccountIdentifier
                        var uid = clientInfo ? clientInfo.uid : "";
                        var utid = clientInfo ? clientInfo.utid : "";
                        var homeAccountIdentifier;
                        if (
                            !Utils_1.Utils.isEmpty(uid) &&
                            !Utils_1.Utils.isEmpty(utid)
                        ) {
                            homeAccountIdentifier =
                                Utils_1.Utils.base64EncodeStringUrlSafe(uid) +
                                "." +
                                Utils_1.Utils.base64EncodeStringUrlSafe(utid);
                        }
                        return new Account(
                            accountIdentifier,
                            homeAccountIdentifier,
                            idToken.preferredName,
                            idToken.name,
                            idToken.decodedIdToken,
                            idToken.sid,
                            idToken.issuer
                        );
                    };
                    return Account;
                })();
                exports.Account = Account;

                /***/
            },
            /* 11 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var tslib_1 = __webpack_require__(1);
                var Authority_1 = __webpack_require__(6);
                var XHRClient_1 = __webpack_require__(12);
                /**
                 * @hidden
                 */
                var AadAuthority = /** @class */ (function (_super) {
                    tslib_1.__extends(AadAuthority, _super);
                    function AadAuthority(authority, validateAuthority) {
                        return (
                            _super.call(this, authority, validateAuthority) ||
                            this
                        );
                    }
                    Object.defineProperty(
                        AadAuthority.prototype,
                        "AadInstanceDiscoveryEndpointUrl",
                        {
                            get: function () {
                                return (
                                    AadAuthority.AadInstanceDiscoveryEndpoint +
                                    "?api-version=1.0&authorization_endpoint=" +
                                    this.CanonicalAuthority +
                                    "oauth2/v2.0/authorize"
                                );
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    Object.defineProperty(
                        AadAuthority.prototype,
                        "AuthorityType",
                        {
                            get: function () {
                                return Authority_1.AuthorityType.Aad;
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    /**
                     * Returns a promise which resolves to the OIDC endpoint
                     * Only responds with the endpoint
                     */
                    AadAuthority.prototype.GetOpenIdConfigurationEndpointAsync =
                        function () {
                            var _this = this;
                            var resultPromise = new Promise(function (
                                resolve,
                                reject
                            ) {
                                return resolve(
                                    _this.DefaultOpenIdConfigurationEndpoint
                                );
                            });
                            if (!this.IsValidationEnabled) {
                                return resultPromise;
                            }
                            var host =
                                this.CanonicalAuthorityUrlComponents
                                    .HostNameAndPort;
                            if (this.IsInTrustedHostList(host)) {
                                return resultPromise;
                            }
                            var client = new XHRClient_1.XhrClient();
                            return client
                                .sendRequestAsync(
                                    this.AadInstanceDiscoveryEndpointUrl,
                                    "GET",
                                    true
                                )
                                .then(function (response) {
                                    return response.tenant_discovery_endpoint;
                                });
                        };
                    /**
                     * Checks to see if the host is in a list of trusted hosts
                     * @param {string} The host to look up
                     */
                    AadAuthority.prototype.IsInTrustedHostList = function (
                        host
                    ) {
                        return AadAuthority.TrustedHostList[host.toLowerCase()];
                    };
                    AadAuthority.AadInstanceDiscoveryEndpoint =
                        "https://login.microsoftonline.com/common/discovery/instance";
                    AadAuthority.TrustedHostList = {
                        "login.windows.net": "login.windows.net",
                        "login.chinacloudapi.cn": "login.chinacloudapi.cn",
                        "login.cloudgovapi.us": "login.cloudgovapi.us",
                        "login.microsoftonline.com":
                            "login.microsoftonline.com",
                        "login.microsoftonline.de": "login.microsoftonline.de",
                        "login.microsoftonline.us": "login.microsoftonline.us",
                    };
                    return AadAuthority;
                })(Authority_1.Authority);
                exports.AadAuthority = AadAuthority;

                /***/
            },
            /* 12 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                /**
                 * XHR client for JSON endpoints
                 * https://www.npmjs.com/package/async-promise
                 * @hidden
                 */
                var XhrClient = /** @class */ (function () {
                    function XhrClient() {}
                    XhrClient.prototype.sendRequestAsync = function (
                        url,
                        method,
                        enableCaching
                    ) {
                        var _this = this;
                        return new Promise(function (resolve, reject) {
                            var xhr = new XMLHttpRequest();
                            xhr.open(method, url, /*async: */ true);
                            if (enableCaching) {
                                // TODO: (shivb) ensure that this can be cached
                                // xhr.setRequestHeader("Cache-Control", "Public");
                            }
                            xhr.onload = function (ev) {
                                if (xhr.status < 200 || xhr.status >= 300) {
                                    reject(_this.handleError(xhr.responseText));
                                }
                                try {
                                    var jsonResponse = JSON.parse(
                                        xhr.responseText
                                    );
                                } catch (e) {
                                    reject(_this.handleError(xhr.responseText));
                                }
                                resolve(jsonResponse);
                            };
                            xhr.onerror = function (ev) {
                                reject(xhr.status);
                            };
                            if (method === "GET") {
                                xhr.send();
                            } else {
                                throw "not implemented";
                            }
                        });
                    };
                    XhrClient.prototype.handleError = function (responseText) {
                        var jsonResponse;
                        try {
                            jsonResponse = JSON.parse(responseText);
                            if (jsonResponse.error) {
                                return jsonResponse.error;
                            } else {
                                throw responseText;
                            }
                        } catch (e) {
                            return responseText;
                        }
                    };
                    return XhrClient;
                })();
                exports.XhrClient = XhrClient;

                /***/
            },
            /* 13 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var tslib_1 = __webpack_require__(1);
                var Logger_1 = __webpack_require__(7);
                var Utils_1 = __webpack_require__(0);
                /**
                 * Defaults for the Configuration Options
                 */
                var FRAME_TIMEOUT = 6000;
                var OFFSET = 300;
                var NAVIGATE_FRAME_WAIT = 500;
                var DEFAULT_AUTH_OPTIONS = {
                    clientId: "",
                    authority: null,
                    validateAuthority: true,
                    redirectUri: function () {
                        return Utils_1.Utils.getDefaultRedirectUri();
                    },
                    postLogoutRedirectUri: function () {
                        return Utils_1.Utils.getDefaultRedirectUri();
                    },
                    navigateToLoginRequestUrl: true,
                };
                var DEFAULT_CACHE_OPTIONS = {
                    cacheLocation: "sessionStorage",
                    storeAuthStateInCookie: false,
                };
                var DEFAULT_SYSTEM_OPTIONS = {
                    logger: new Logger_1.Logger(null),
                    loadFrameTimeout: FRAME_TIMEOUT,
                    tokenRenewalOffsetSeconds: OFFSET,
                    navigateFrameWait: NAVIGATE_FRAME_WAIT,
                };
                var DEFAULT_FRAMEWORK_OPTIONS = {
                    isAngular: false,
                    unprotectedResources: new Array(),
                    protectedResourceMap: new Map(),
                };
                /**
                 * Function to set the default options when not explicitly set
                 *
                 * @param TAuthOptions
                 * @param TCacheOptions
                 * @param TSystemOptions
                 * @param TFrameworkOptions
                 *
                 * @returns TConfiguration object
                 */
                // destructure with default settings
                function buildConfiguration(_a) {
                    var auth = _a.auth,
                        _b = _a.cache,
                        cache = _b === void 0 ? {} : _b,
                        _c = _a.system,
                        system = _c === void 0 ? {} : _c,
                        _d = _a.framework,
                        framework = _d === void 0 ? {} : _d;
                    var overlayedConfig = {
                        auth: tslib_1.__assign({}, DEFAULT_AUTH_OPTIONS, auth),
                        cache: tslib_1.__assign(
                            {},
                            DEFAULT_CACHE_OPTIONS,
                            cache
                        ),
                        system: tslib_1.__assign(
                            {},
                            DEFAULT_SYSTEM_OPTIONS,
                            system
                        ),
                        framework: tslib_1.__assign(
                            {},
                            DEFAULT_FRAMEWORK_OPTIONS,
                            framework
                        ),
                    };
                    return overlayedConfig;
                }
                exports.buildConfiguration = buildConfiguration;

                /***/
            },
            /* 14 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var ClientConfigurationError_1 = __webpack_require__(3);
                function validateClaimsRequest(request) {
                    if (!request.claimsRequest) {
                        return;
                    }
                    var claims;
                    try {
                        claims = JSON.parse(request.claimsRequest);
                    } catch (e) {
                        throw ClientConfigurationError_1.ClientConfigurationError.createClaimsRequestParsingError(
                            e
                        );
                    }
                    // TODO: More validation will be added when the server team tells us how they have actually implemented claims
                }
                exports.validateClaimsRequest = validateClaimsRequest;

                /***/
            },
            /* 15 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var tslib_1 = __webpack_require__(1);
                var ServerError_1 = __webpack_require__(8);
                exports.InteractionRequiredAuthErrorMessage = {
                    loginRequired: {
                        code: "login_required",
                    },
                    interactionRequired: {
                        code: "interaction_required",
                    },
                    consentRequired: {
                        code: "consent_required",
                    },
                };
                /**
                 * Error thrown when the user is required to perform an interactive token request.
                 */
                var InteractionRequiredAuthError = /** @class */ (function (
                    _super
                ) {
                    tslib_1.__extends(InteractionRequiredAuthError, _super);
                    function InteractionRequiredAuthError(
                        errorCode,
                        errorMessage
                    ) {
                        var _this =
                            _super.call(this, errorCode, errorMessage) || this;
                        _this.name = "InteractionRequiredAuthError";
                        Object.setPrototypeOf(
                            _this,
                            InteractionRequiredAuthError.prototype
                        );
                        return _this;
                    }
                    InteractionRequiredAuthError.createLoginRequiredAuthError =
                        function (errorDesc) {
                            return new InteractionRequiredAuthError(
                                exports.InteractionRequiredAuthErrorMessage.loginRequired.code,
                                errorDesc
                            );
                        };
                    InteractionRequiredAuthError.createInteractionRequiredAuthError =
                        function (errorDesc) {
                            return new InteractionRequiredAuthError(
                                exports.InteractionRequiredAuthErrorMessage.interactionRequired.code,
                                errorDesc
                            );
                        };
                    InteractionRequiredAuthError.createConsentRequiredAuthError =
                        function (errorDesc) {
                            return new InteractionRequiredAuthError(
                                exports.InteractionRequiredAuthErrorMessage.consentRequired.code,
                                errorDesc
                            );
                        };
                    return InteractionRequiredAuthError;
                })(ServerError_1.ServerError);
                exports.InteractionRequiredAuthError =
                    InteractionRequiredAuthError;

                /***/
            },
            /* 16 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                function buildResponseStateOnly(state) {
                    return {
                        uniqueId: "",
                        tenantId: "",
                        tokenType: "",
                        idToken: null,
                        accessToken: "",
                        scopes: null,
                        expiresOn: null,
                        account: null,
                        accountState: state,
                    };
                }
                exports.buildResponseStateOnly = buildResponseStateOnly;

                /***/
            },
            /* 17 */
            /***/ function (module, exports, __webpack_require__) {
                module.exports = __webpack_require__(18);

                /***/
            },
            /* 18 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                Object.defineProperty(exports, "__esModule", { value: true });
                var UserAgentApplication_1 = __webpack_require__(9);
                exports.UserAgentApplication =
                    UserAgentApplication_1.UserAgentApplication;
                var Logger_1 = __webpack_require__(7);
                exports.Logger = Logger_1.Logger;
                var Logger_2 = __webpack_require__(7);
                exports.LogLevel = Logger_2.LogLevel;
                var Account_1 = __webpack_require__(10);
                exports.Account = Account_1.Account;
                var Constants_1 = __webpack_require__(2);
                exports.Constants = Constants_1.Constants;
                var Authority_1 = __webpack_require__(6);
                exports.Authority = Authority_1.Authority;
                var UserAgentApplication_2 = __webpack_require__(9);
                exports.CacheResult = UserAgentApplication_2.CacheResult;
                var Configuration_1 = __webpack_require__(13);
                exports.CacheLocation = Configuration_1.CacheLocation;
                exports.Configuration = Configuration_1.Configuration;
                var AuthenticationParameters_1 = __webpack_require__(14);
                exports.AuthenticationParameters =
                    AuthenticationParameters_1.AuthenticationParameters;
                var AuthResponse_1 = __webpack_require__(16);
                exports.AuthResponse = AuthResponse_1.AuthResponse;
                // Errors
                var AuthError_1 = __webpack_require__(5);
                exports.AuthError = AuthError_1.AuthError;
                var ClientAuthError_1 = __webpack_require__(4);
                exports.ClientAuthError = ClientAuthError_1.ClientAuthError;
                var ServerError_1 = __webpack_require__(8);
                exports.ServerError = ServerError_1.ServerError;
                var ClientConfigurationError_1 = __webpack_require__(3);
                exports.ClientConfigurationError =
                    ClientConfigurationError_1.ClientConfigurationError;
                var InteractionRequiredAuthError_1 = __webpack_require__(15);
                exports.InteractionRequiredAuthError =
                    InteractionRequiredAuthError_1.InteractionRequiredAuthError;

                /***/
            },
            /* 19 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var Utils_1 = __webpack_require__(0);
                /**
                 * @hidden
                 */
                var AccessTokenKey = /** @class */ (function () {
                    function AccessTokenKey(
                        authority,
                        clientId,
                        scopes,
                        uid,
                        utid
                    ) {
                        this.authority =
                            Utils_1.Utils.CanonicalizeUri(authority);
                        this.clientId = clientId;
                        this.scopes = scopes;
                        this.homeAccountIdentifier =
                            Utils_1.Utils.base64EncodeStringUrlSafe(uid) +
                            "." +
                            Utils_1.Utils.base64EncodeStringUrlSafe(utid);
                    }
                    return AccessTokenKey;
                })();
                exports.AccessTokenKey = AccessTokenKey;

                /***/
            },
            /* 20 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                /**
                 * @hidden
                 */
                var AccessTokenValue = /** @class */ (function () {
                    function AccessTokenValue(
                        accessToken,
                        idToken,
                        expiresIn,
                        homeAccountIdentifier
                    ) {
                        this.accessToken = accessToken;
                        this.idToken = idToken;
                        this.expiresIn = expiresIn;
                        this.homeAccountIdentifier = homeAccountIdentifier;
                    }
                    return AccessTokenValue;
                })();
                exports.AccessTokenValue = AccessTokenValue;

                /***/
            },
            /* 21 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var Utils_1 = __webpack_require__(0);
                /**
                 * Nonce: OIDC Nonce definition: https://openid.net/specs/openid-connect-core-1_0.html#IDToken
                 * State: OAuth Spec: https://tools.ietf.org/html/rfc6749#section-10.12
                 * @hidden
                 */
                var ServerRequestParameters = /** @class */ (function () {
                    /**
                     * Constructor
                     * @param authority
                     * @param clientId
                     * @param scope
                     * @param responseType
                     * @param redirectUri
                     * @param state
                     */
                    function ServerRequestParameters(
                        authority,
                        clientId,
                        scope,
                        responseType,
                        redirectUri,
                        state
                    ) {
                        this.authorityInstance = authority;
                        this.clientId = clientId;
                        this.scopes = scope;
                        this.nonce = Utils_1.Utils.createNewGuid();
                        this.state =
                            state && !Utils_1.Utils.isEmpty(state)
                                ? Utils_1.Utils.createNewGuid() + "|" + state
                                : Utils_1.Utils.createNewGuid();
                        // TODO: Change this to user passed vs generated with the new PR
                        this.correlationId = Utils_1.Utils.createNewGuid();
                        // telemetry information
                        this.xClientSku = "MSAL.JS";
                        this.xClientVer = Utils_1.Utils.getLibraryVersion();
                        this.responseType = responseType;
                        this.redirectUri = redirectUri;
                    }
                    Object.defineProperty(
                        ServerRequestParameters.prototype,
                        "authority",
                        {
                            get: function () {
                                return this.authorityInstance
                                    ? this.authorityInstance.CanonicalAuthority
                                    : null;
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    /**
                     * generates the URL with QueryString Parameters
                     * @param scopes
                     */
                    ServerRequestParameters.prototype.createNavigateUrl =
                        function (scopes) {
                            var str = this.createNavigationUrlString(scopes);
                            var authEndpoint =
                                this.authorityInstance.AuthorizationEndpoint;
                            // if the endpoint already has queryparams, lets add to it, otherwise add the first one
                            if (authEndpoint.indexOf("?") < 0) {
                                authEndpoint += "?";
                            } else {
                                authEndpoint += "&";
                            }
                            var requestUrl = "" + authEndpoint + str.join("&");
                            return requestUrl;
                        };
                    /**
                     * Generate the array of all QueryStringParams to be sent to the server
                     * @param scopes
                     */
                    ServerRequestParameters.prototype.createNavigationUrlString =
                        function (scopes) {
                            if (!scopes) {
                                scopes = [this.clientId];
                            }
                            if (scopes.indexOf(this.clientId) === -1) {
                                scopes.push(this.clientId);
                            }
                            var str = [];
                            str.push("response_type=" + this.responseType);
                            this.translateclientIdUsedInScope(scopes);
                            str.push(
                                "scope=" +
                                    encodeURIComponent(this.parseScope(scopes))
                            );
                            str.push(
                                "client_id=" + encodeURIComponent(this.clientId)
                            );
                            str.push(
                                "redirect_uri=" +
                                    encodeURIComponent(this.redirectUri)
                            );
                            str.push("state=" + encodeURIComponent(this.state));
                            str.push("nonce=" + encodeURIComponent(this.nonce));
                            str.push("client_info=1");
                            str.push("x-client-SKU=" + this.xClientSku);
                            str.push("x-client-Ver=" + this.xClientVer);
                            if (this.promptValue) {
                                str.push(
                                    "prompt=" +
                                        encodeURIComponent(this.promptValue)
                                );
                            }
                            if (this.claimsValue) {
                                str.push(
                                    "claims=" +
                                        encodeURIComponent(this.claimsValue)
                                );
                            }
                            if (this.queryParameters) {
                                str.push(this.queryParameters);
                            }
                            if (this.extraQueryParameters) {
                                str.push(this.extraQueryParameters);
                            }
                            str.push(
                                "client-request-id=" +
                                    encodeURIComponent(this.correlationId)
                            );
                            return str;
                        };
                    /**
                     * append the required scopes: https://openid.net/specs/openid-connect-basic-1_0.html#Scopes
                     * @param scopes
                     */
                    ServerRequestParameters.prototype.translateclientIdUsedInScope =
                        function (scopes) {
                            var clientIdIndex = scopes.indexOf(this.clientId);
                            if (clientIdIndex >= 0) {
                                scopes.splice(clientIdIndex, 1);
                                if (scopes.indexOf("openid") === -1) {
                                    scopes.push("openid");
                                }
                                if (scopes.indexOf("profile") === -1) {
                                    scopes.push("profile");
                                }
                            }
                        };
                    /**
                     * Parse the scopes into a formatted scopeList
                     * @param scopes
                     */
                    ServerRequestParameters.prototype.parseScope = function (
                        scopes
                    ) {
                        var scopeList = "";
                        if (scopes) {
                            for (var i = 0; i < scopes.length; ++i) {
                                scopeList +=
                                    i !== scopes.length - 1
                                        ? scopes[i] + " "
                                        : scopes[i];
                            }
                        }
                        return scopeList;
                    };
                    return ServerRequestParameters;
                })();
                exports.ServerRequestParameters = ServerRequestParameters;

                /***/
            },
            /* 22 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var Utils_1 = __webpack_require__(0);
                var ClientAuthError_1 = __webpack_require__(4);
                /**
                 * @hidden
                 */
                var ClientInfo = /** @class */ (function () {
                    function ClientInfo(rawClientInfo) {
                        if (
                            !rawClientInfo ||
                            Utils_1.Utils.isEmpty(rawClientInfo)
                        ) {
                            this.uid = "";
                            this.utid = "";
                            return;
                        }
                        try {
                            var decodedClientInfo =
                                Utils_1.Utils.base64DecodeStringUrlSafe(
                                    rawClientInfo
                                );
                            var clientInfo = JSON.parse(decodedClientInfo);
                            if (clientInfo) {
                                if (clientInfo.hasOwnProperty("uid")) {
                                    this.uid = clientInfo.uid;
                                }
                                if (clientInfo.hasOwnProperty("utid")) {
                                    this.utid = clientInfo.utid;
                                }
                            }
                        } catch (e) {
                            throw ClientAuthError_1.ClientAuthError.createClientInfoDecodingError(
                                e
                            );
                        }
                    }
                    Object.defineProperty(ClientInfo.prototype, "uid", {
                        get: function () {
                            return this._uid ? this._uid : "";
                        },
                        set: function (uid) {
                            this._uid = uid;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(ClientInfo.prototype, "utid", {
                        get: function () {
                            return this._utid ? this._utid : "";
                        },
                        set: function (utid) {
                            this._utid = utid;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    return ClientInfo;
                })();
                exports.ClientInfo = ClientInfo;

                /***/
            },
            /* 23 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var Utils_1 = __webpack_require__(0);
                var ClientAuthError_1 = __webpack_require__(4);
                /**
                 * @hidden
                 */
                var IdToken = /** @class */ (function () {
                    /* tslint:disable:no-string-literal */
                    function IdToken(rawIdToken) {
                        if (Utils_1.Utils.isEmpty(rawIdToken)) {
                            throw ClientAuthError_1.ClientAuthError.createIdTokenNullOrEmptyError(
                                rawIdToken
                            );
                        }
                        try {
                            this.rawIdToken = rawIdToken;
                            this.decodedIdToken =
                                Utils_1.Utils.extractIdToken(rawIdToken);
                            if (this.decodedIdToken) {
                                if (this.decodedIdToken.hasOwnProperty("iss")) {
                                    this.issuer = this.decodedIdToken["iss"];
                                }
                                if (this.decodedIdToken.hasOwnProperty("oid")) {
                                    this.objectId = this.decodedIdToken["oid"];
                                }
                                if (this.decodedIdToken.hasOwnProperty("sub")) {
                                    this.subject = this.decodedIdToken["sub"];
                                }
                                if (this.decodedIdToken.hasOwnProperty("tid")) {
                                    this.tenantId = this.decodedIdToken["tid"];
                                }
                                if (this.decodedIdToken.hasOwnProperty("ver")) {
                                    this.version = this.decodedIdToken["ver"];
                                }
                                if (
                                    this.decodedIdToken.hasOwnProperty(
                                        "preferred_username"
                                    )
                                ) {
                                    this.preferredName =
                                        this.decodedIdToken[
                                            "preferred_username"
                                        ];
                                }
                                if (
                                    this.decodedIdToken.hasOwnProperty("name")
                                ) {
                                    this.name = this.decodedIdToken["name"];
                                }
                                if (
                                    this.decodedIdToken.hasOwnProperty("nonce")
                                ) {
                                    this.nonce = this.decodedIdToken["nonce"];
                                }
                                if (this.decodedIdToken.hasOwnProperty("exp")) {
                                    this.expiration =
                                        this.decodedIdToken["exp"];
                                }
                                if (
                                    this.decodedIdToken.hasOwnProperty(
                                        "home_oid"
                                    )
                                ) {
                                    this.homeObjectId =
                                        this.decodedIdToken["home_oid"];
                                }
                                if (this.decodedIdToken.hasOwnProperty("sid")) {
                                    this.sid = this.decodedIdToken["sid"];
                                }
                                /* tslint:enable:no-string-literal */
                            }
                        } catch (e) {
                            // TODO: This error here won't really every be thrown, since extractIdToken() returns null if the decodeJwt() fails.
                            // Need to add better error handling here to account for being unable to decode jwts.
                            throw ClientAuthError_1.ClientAuthError.createIdTokenParsingError(
                                e
                            );
                        }
                    }
                    return IdToken;
                })();
                exports.IdToken = IdToken;

                /***/
            },
            /* 24 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var Constants_1 = __webpack_require__(2);
                var AccessTokenCacheItem_1 = __webpack_require__(25);
                var Constants_2 = __webpack_require__(2);
                var ClientConfigurationError_1 = __webpack_require__(3);
                /**
                 * @hidden
                 */
                var Storage = /** @class */ (function () {
                    function Storage(cacheLocation) {
                        if (Storage.instance) {
                            return Storage.instance;
                        }
                        this.cacheLocation = cacheLocation;
                        this.localStorageSupported =
                            typeof window[this.cacheLocation] !== "undefined" &&
                            window[this.cacheLocation] != null;
                        this.sessionStorageSupported =
                            typeof window[cacheLocation] !== "undefined" &&
                            window[cacheLocation] != null;
                        Storage.instance = this;
                        if (
                            !this.localStorageSupported &&
                            !this.sessionStorageSupported
                        ) {
                            throw ClientConfigurationError_1.ClientConfigurationError.createNoStorageSupportedError();
                        }
                        return Storage.instance;
                    }
                    // add value to storage
                    Storage.prototype.setItem = function (
                        key,
                        value,
                        enableCookieStorage
                    ) {
                        if (window[this.cacheLocation]) {
                            window[this.cacheLocation].setItem(key, value);
                        }
                        if (enableCookieStorage) {
                            this.setItemCookie(key, value);
                        }
                    };
                    // get one item by key from storage
                    Storage.prototype.getItem = function (
                        key,
                        enableCookieStorage
                    ) {
                        if (enableCookieStorage && this.getItemCookie(key)) {
                            return this.getItemCookie(key);
                        }
                        if (window[this.cacheLocation]) {
                            return window[this.cacheLocation].getItem(key);
                        }
                        return null;
                    };
                    // remove value from storage
                    Storage.prototype.removeItem = function (key) {
                        if (window[this.cacheLocation]) {
                            return window[this.cacheLocation].removeItem(key);
                        }
                    };
                    // clear storage (remove all items from it)
                    Storage.prototype.clear = function () {
                        if (window[this.cacheLocation]) {
                            return window[this.cacheLocation].clear();
                        }
                    };
                    Storage.prototype.getAllAccessTokens = function (
                        clientId,
                        homeAccountIdentifier
                    ) {
                        var results = [];
                        var accessTokenCacheItem;
                        var storage = window[this.cacheLocation];
                        if (storage) {
                            var key = void 0;
                            for (key in storage) {
                                if (storage.hasOwnProperty(key)) {
                                    if (
                                        key.match(clientId) &&
                                        key.match(homeAccountIdentifier)
                                    ) {
                                        var value = this.getItem(key);
                                        if (value) {
                                            accessTokenCacheItem =
                                                new AccessTokenCacheItem_1.AccessTokenCacheItem(
                                                    JSON.parse(key),
                                                    JSON.parse(value)
                                                );
                                            results.push(accessTokenCacheItem);
                                        }
                                    }
                                }
                            }
                        }
                        return results;
                    };
                    Storage.prototype.removeAcquireTokenEntries = function () {
                        var storage = window[this.cacheLocation];
                        if (storage) {
                            var key = void 0;
                            for (key in storage) {
                                if (storage.hasOwnProperty(key)) {
                                    if (
                                        key.indexOf(
                                            Constants_2.CacheKeys.AUTHORITY
                                        ) !== -1 ||
                                        key.indexOf(
                                            Constants_2.CacheKeys
                                                .ACQUIRE_TOKEN_ACCOUNT
                                        ) !== 1
                                    ) {
                                        var splitKey = key.split(
                                            Constants_1.Constants
                                                .resourceDelimiter
                                        );
                                        var state = void 0;
                                        if (splitKey.length > 1) {
                                            state = splitKey[1];
                                        }
                                        if (
                                            state &&
                                            !this.tokenRenewalInProgress(state)
                                        ) {
                                            this.removeItem(key);
                                            this.removeItem(
                                                Constants_1.Constants
                                                    .renewStatus + state
                                            );
                                            this.removeItem(
                                                Constants_1.Constants.stateLogin
                                            );
                                            this.removeItem(
                                                Constants_1.Constants
                                                    .stateAcquireToken
                                            );
                                            this.setItemCookie(key, "", -1);
                                        }
                                    }
                                }
                            }
                        }
                        this.clearCookie();
                    };
                    Storage.prototype.tokenRenewalInProgress = function (
                        stateValue
                    ) {
                        var storage = window[this.cacheLocation];
                        var renewStatus =
                            storage[
                                Constants_1.Constants.renewStatus + stateValue
                            ];
                        return !(
                            !renewStatus ||
                            renewStatus !==
                                Constants_1.Constants.tokenRenewStatusInProgress
                        );
                    };
                    Storage.prototype.resetCacheItems = function () {
                        var storage = window[this.cacheLocation];
                        if (storage) {
                            var key = void 0;
                            for (key in storage) {
                                if (storage.hasOwnProperty(key)) {
                                    if (
                                        key.indexOf(
                                            Constants_1.Constants.msal
                                        ) !== -1
                                    ) {
                                        this.setItem(key, "");
                                    }
                                }
                            }
                            this.removeAcquireTokenEntries();
                        }
                    };
                    Storage.prototype.setItemCookie = function (
                        cName,
                        cValue,
                        expires
                    ) {
                        var cookieStr = cName + "=" + cValue + ";";
                        if (expires) {
                            var expireTime =
                                this.getCookieExpirationTime(expires);
                            cookieStr += "expires=" + expireTime + ";";
                        }
                        document.cookie = cookieStr;
                    };
                    Storage.prototype.getItemCookie = function (cName) {
                        var name = cName + "=";
                        var ca = document.cookie.split(";");
                        for (var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            while (c.charAt(0) === " ") {
                                c = c.substring(1);
                            }
                            if (c.indexOf(name) === 0) {
                                return c.substring(name.length, c.length);
                            }
                        }
                        return "";
                    };
                    Storage.prototype.getCookieExpirationTime = function (
                        cookieLifeDays
                    ) {
                        var today = new Date();
                        var expr = new Date(
                            today.getTime() +
                                cookieLifeDays * 24 * 60 * 60 * 1000
                        );
                        return expr.toUTCString();
                    };
                    Storage.prototype.clearCookie = function () {
                        this.setItemCookie(
                            Constants_1.Constants.nonceIdToken,
                            "",
                            -1
                        );
                        this.setItemCookie(
                            Constants_1.Constants.stateLogin,
                            "",
                            -1
                        );
                        this.setItemCookie(
                            Constants_1.Constants.loginRequest,
                            "",
                            -1
                        );
                        this.setItemCookie(
                            Constants_1.Constants.stateAcquireToken,
                            "",
                            -1
                        );
                    };
                    /**
                     * Create acquireTokenAccountKey to cache account object
                     * @param accountId
                     * @param state
                     */
                    Storage.generateAcquireTokenAccountKey = function (
                        accountId,
                        state
                    ) {
                        return (
                            Constants_2.CacheKeys.ACQUIRE_TOKEN_ACCOUNT +
                            Constants_1.Constants.resourceDelimiter +
                            ("" + accountId) +
                            Constants_1.Constants.resourceDelimiter +
                            ("" + state)
                        );
                    };
                    /**
                     * Create authorityKey to cache authority
                     * @param state
                     */
                    Storage.generateAuthorityKey = function (state) {
                        return (
                            Constants_2.CacheKeys.AUTHORITY +
                            Constants_1.Constants.resourceDelimiter +
                            ("" + state)
                        );
                    };
                    return Storage;
                })();
                exports.Storage = Storage;

                /***/
            },
            /* 25 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                /**
                 * @hidden
                 */
                var AccessTokenCacheItem = /** @class */ (function () {
                    function AccessTokenCacheItem(key, value) {
                        this.key = key;
                        this.value = value;
                    }
                    return AccessTokenCacheItem;
                })();
                exports.AccessTokenCacheItem = AccessTokenCacheItem;

                /***/
            },
            /* 26 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                /**
                 * @hidden
                 */
                var Utils_1 = __webpack_require__(0);
                var AadAuthority_1 = __webpack_require__(11);
                var B2cAuthority_1 = __webpack_require__(27);
                var Authority_1 = __webpack_require__(6);
                var ClientConfigurationError_1 = __webpack_require__(3);
                var AuthorityFactory = /** @class */ (function () {
                    function AuthorityFactory() {}
                    /**
                     * Parse the url and determine the type of authority
                     */
                    AuthorityFactory.DetectAuthorityFromUrl = function (
                        authorityUrl
                    ) {
                        authorityUrl =
                            Utils_1.Utils.CanonicalizeUri(authorityUrl);
                        var components =
                            Utils_1.Utils.GetUrlComponents(authorityUrl);
                        var pathSegments = components.PathSegments;
                        switch (pathSegments[0]) {
                            case "tfp":
                                return Authority_1.AuthorityType.B2C;
                            case "adfs":
                                return Authority_1.AuthorityType.Adfs;
                            default:
                                return Authority_1.AuthorityType.Aad;
                        }
                    };
                    /**
                     * Create an authority object of the correct type based on the url
                     * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
                     */
                    AuthorityFactory.CreateInstance = function (
                        authorityUrl,
                        validateAuthority
                    ) {
                        if (Utils_1.Utils.isEmpty(authorityUrl)) {
                            return null;
                        }
                        var type =
                            AuthorityFactory.DetectAuthorityFromUrl(
                                authorityUrl
                            );
                        // Depending on above detection, create the right type.
                        switch (type) {
                            case Authority_1.AuthorityType.B2C:
                                return new B2cAuthority_1.B2cAuthority(
                                    authorityUrl,
                                    validateAuthority
                                );
                            case Authority_1.AuthorityType.Aad:
                                return new AadAuthority_1.AadAuthority(
                                    authorityUrl,
                                    validateAuthority
                                );
                            default:
                                throw ClientConfigurationError_1
                                    .ClientConfigurationErrorMessage
                                    .invalidAuthorityType;
                        }
                    };
                    return AuthorityFactory;
                })();
                exports.AuthorityFactory = AuthorityFactory;

                /***/
            },
            /* 27 */
            /***/ function (module, exports, __webpack_require__) {
                "use strict";

                // Copyright (c) Microsoft Corporation. All rights reserved.
                // Licensed under the MIT License.
                Object.defineProperty(exports, "__esModule", { value: true });
                var tslib_1 = __webpack_require__(1);
                var AadAuthority_1 = __webpack_require__(11);
                var Authority_1 = __webpack_require__(6);
                var ClientConfigurationError_1 = __webpack_require__(3);
                var Utils_1 = __webpack_require__(0);
                /**
                 * @hidden
                 */
                var B2cAuthority = /** @class */ (function (_super) {
                    tslib_1.__extends(B2cAuthority, _super);
                    function B2cAuthority(authority, validateAuthority) {
                        var _this =
                            _super.call(this, authority, validateAuthority) ||
                            this;
                        var urlComponents =
                            Utils_1.Utils.GetUrlComponents(authority);
                        var pathSegments = urlComponents.PathSegments;
                        if (pathSegments.length < 3) {
                            throw ClientConfigurationError_1
                                .ClientConfigurationErrorMessage
                                .b2cAuthorityUriInvalidPath;
                        }
                        _this.CanonicalAuthority =
                            "https://" +
                            urlComponents.HostNameAndPort +
                            "/" +
                            pathSegments[0] +
                            "/" +
                            pathSegments[1] +
                            "/" +
                            pathSegments[2] +
                            "/";
                        return _this;
                    }
                    Object.defineProperty(
                        B2cAuthority.prototype,
                        "AuthorityType",
                        {
                            get: function () {
                                return Authority_1.AuthorityType.B2C;
                            },
                            enumerable: true,
                            configurable: true,
                        }
                    );
                    /**
                     * Returns a promise with the TenantDiscoveryEndpoint
                     */
                    B2cAuthority.prototype.GetOpenIdConfigurationEndpointAsync =
                        function () {
                            var _this = this;
                            var resultPromise = new Promise(function (
                                resolve,
                                reject
                            ) {
                                return resolve(
                                    _this.DefaultOpenIdConfigurationEndpoint
                                );
                            });
                            if (!this.IsValidationEnabled) {
                                return resultPromise;
                            }
                            if (
                                this.IsInTrustedHostList(
                                    this.CanonicalAuthorityUrlComponents
                                        .HostNameAndPort
                                )
                            ) {
                                return resultPromise;
                            }
                            return new Promise(function (resolve, reject) {
                                return reject(
                                    ClientConfigurationError_1
                                        .ClientConfigurationErrorMessage
                                        .unsupportedAuthorityValidation
                                );
                            });
                        };
                    return B2cAuthority;
                })(AadAuthority_1.AadAuthority);
                exports.B2cAuthority = B2cAuthority;

                /***/
            },
            /******/
        ]
    );
});

function loggerCallback(logLevel, message, containsPii) {
    console.log(message);
}

// Create a MSAL logger per
// https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-logging
var MSALLogger = {
    auth: {
        clientId: window.taigaConfig?.azureClientId,
        authority: window.taigaConfig?.azureAuthority,
        redirectUri: window.location.origin,
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        logger: new Msal.Logger(loggerCallback, {
            level: Msal.LogLevel.Verbose,
            piiLoggingEnabled: false,
            correlationId: "1234",
        }),
    },
};
var userAgentApplication = new Msal.UserAgentApplication(MSALLogger);
var loginRequest = {
    scopes: ["user.read"], // optional Array<string>
};

async function getUserData(token, username, email, fullName) {
    try {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const payload = JSON.stringify({
            token,
            username,
            email,
            full_name: fullName,
            accepted_terms: true,
        });
        const response = await fetch(`${window.taigaConfig.api}auth/sso`, {
            method: "POST",
            headers: headers,
            body: payload,
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const userAccount = await response.json();
        localStorage.setItem("userInfo", JSON.stringify(userAccount));
        localStorage.setItem("token", JSON.stringify(userAccount?.auth_token));
        localStorage.setItem("refresh", JSON.stringify(userAccount?.refresh));
        window.location.replace(`${window.location.origin}/discover`);
    } catch (err) {
        console.error(error.message);
    }
}

function getFormattedUsername(str) {
    return typeof str === "string" ? str.split("@")[0] : str;
}

function msalLogin() {
    userAgentApplication
        .loginPopup(loginRequest)
        .then((response) => {
            const accountData = response?.account;
            const token = accountData?.accountIdentifier;
            const username = getFormattedUsername(accountData?.userName);
            const email = accountData?.userName;
            const fullName = accountData?.name;
            getUserData(token, username, email, fullName);
        })
        .catch((err) => {
            console.log(err, "Error from MSAL");
        });
}
