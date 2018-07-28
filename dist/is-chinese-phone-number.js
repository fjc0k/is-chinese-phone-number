/*!
 * is-chinese-phone-number v0.1.6
 * (c) 2018-present Jay Fong <fjc0kb@gmail.com> (https://github.com/fjc0k)
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.isChinesePhoneNumber = factory());
}(this, (function () { 'use strict';

  var mobilePhoneNumber = [
      /^1[3-9][0-9]{9}$/,
      /^1(?:3[0-9]|4[5-9]|5[0-9]|6[12456]|7[0-8]|8[0-9]|9[0-9])[0-9]{8}$/
  ];
  var landlinePhoneNumber = [
      /^(?:0[1-9][0-9]{1,2}-)?[2-9][0-9]{6,7}$/,
      /^0[1-9][0-9]{1,2}-[2-9][0-9]{6,7}$/
  ];
  var isChinesePhoneNumber = (function (phoneNumber, strict) {
      if (strict === void 0) { strict = false; }
      var mode = strict ? 1 : 0;
      return (mobilePhoneNumber[mode].test(phoneNumber) ||
          landlinePhoneNumber[mode].test(phoneNumber));
  });
  isChinesePhoneNumber.mobile = function (phoneNumber, strict) {
      if (strict === void 0) { strict = false; }
      var mode = strict ? 1 : 0;
      return mobilePhoneNumber[mode].test(phoneNumber);
  };
  isChinesePhoneNumber.landline = function (phoneNumber, strict) {
      if (strict === void 0) { strict = false; }
      var mode = strict ? 1 : 0;
      return landlinePhoneNumber[mode].test(phoneNumber);
  };

  return isChinesePhoneNumber;

})));
