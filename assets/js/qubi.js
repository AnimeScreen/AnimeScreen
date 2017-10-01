/**
 * MIT License
 *
 * Copyright (c) 2017 Jewel Mahanta
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.Qubi = factory();
    }
}(this, function () {
    "use strict";

    // --- Utils ---
    var split = function (separator) {
        return function (what) {
            return what.split(separator);
        };
    };

    var letters = split("");

    var charRange = function (start, end) {
        return function (what) {
            return what.charCodeAt(0) >= start.charCodeAt(0) && what.charCodeAt(0) <= end.charCodeAt(0);
        };
    };

    // --- Adapters ---
    var isLength = function (length) {
        return function (password) {
            return password.length >= length;
        }
    };

    var hasNumber = function (password) {
        // O(n) can be optimized
        return letters(password).filter(charRange("0", "9")).length > 0;
    };

    var hasUppercase = function (password) {
        // O(n) can be optimized
        return letters(password).filter(charRange("A", "Z")).length > 0;
    };

    var hasLowercase = function (password) {
        // O(n) can be optimized
        return letters(password).filter(charRange("a", "z")).length > 0;
    };

    // Credit to OWASP for the special characters
    // https://www.owasp.org/index.php/Password_special_characters
    var hasSpecialChars = function (password) {
        return Boolean(password.match(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/gi));
    };

    // --- Qubi starts here ---
    var adapters = [
        isLength(8),
        isLength(14),
        hasNumber,
        hasUppercase,
        hasLowercase,
        hasSpecialChars
    ];

    return {
        totalScore: adapters.length,
        checkPassword: function (password) {
            var currentScore = 0;
            adapters.forEach(function (adapter) {
                adapter.call(null, password) ? currentScore++ : 0;
            });
            return currentScore;
        }
    };
}));


var strength = document.getElementById("strength");
var passInput = document.getElementById("passwordInput");
strength.value = 0;
strength.max = Qubi.totalScore;
passInput.addEventListener("keyup", function () {
    strength.value = Qubi.checkPassword(passInput.value);
});
