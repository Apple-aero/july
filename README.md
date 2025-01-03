# **july.js**

`july.js` 是一个基于 ES5 的 JavaScript 库，用于判断给定年份是否为闰年，支持普通年和世纪年的判断规则。本文档介绍其功能、安装方式和使用方法。

---

## **功能介绍**

### **普通年判断**
- **规则**：能被 4 整除且不能被 100 整除的是闰年。
- **示例**：2004 是闰年，1900 不是闰年。

### **世纪年判断**
- **规则**：世纪年能被 400 整除的是闰年。
- **示例**：2000 是闰年，1900 不是闰年。

---

## **安装方式**

### **浏览器引入**

下载 `july.min.js` 并通过 `<script>` 标签引入：

```html
<script src="july.js"></script>
```

### **Node.js 环境**

通过 `require` 引入：

```javascript
var july = require('./july.js');
```

---

## **API 文档**

### **1. `july.isLeapYear(year)`**

- **描述**：判断给定年份是否为闰年。

- **参数**：
  - `year` (Number)：要判断的年份，必须为正整数。

- **返回值**：
  - (Boolean)：如果是闰年返回 `true`，否则返回 `false`。

- **异常**：
  - 如果输入不是正整数，将抛出错误：`请输入一个有效的年份`。