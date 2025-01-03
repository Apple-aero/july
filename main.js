(function (global) {
  // 定义库对象
  var july = {};

  /**
   * 判断是否为闰年
   * @param {number} year - 要判断的年份
   * @returns {boolean} - 如果是闰年返回 true，否则返回 false
   */
  july.isLeapYear = function (year) {
    // 确保输入是有效年份
    if (typeof year !== 'number' || year <= 0 || Math.floor(year) !== year) {
      throw new Error('Invalid year');
    }

    // 获取年份的最后两位
    var lastTwoDigits = year % 100;

    // 判断是否为世纪年
    if (lastTwoDigits === 0) {
      // 世纪年：能被400整除是闰年
      return year % 400 === 0;
    } else {
      // 普通年：能被4整除且不能被100整除是闰年
      return year % 4 === 0 && year % 100 !== 0;
    }
  };

  // 将库暴露到全局对象上
  if (typeof module !== 'undefined' && module.exports) {
    // 适配 CommonJS
    module.exports = july;
  } else {
    // 适配浏览器环境
    global.july = july;
  }
})(this);
