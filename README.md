# Go 版爬虫（go-spider）

## [网洛者 - 反反爬虫练习平台 (wangluozhe.com)](http://spider.wangluozhe.com/)

- go mod init wangluozhe01
- go get github.com/robertkrimen/otto

### 第 1 题 JS 混淆加密 - 反 hook 操作 —— [代码](https://github.com/dotvue/go-spider/blob/main/wangluozhe/01/main.go) 答案：4984300

### 第 2 题 JJEncode 加密 - 初体验 —— [代码](https://github.com/dotvue/go-spider/blob/main/wangluozhe/02/main.go) 答案：5186861

### 第 3 题 AAEncode 加密 - 初体验 —— [代码](https://github.com/dotvue/go-spider/blob/main/wangluozhe/03/main.go) 答案：5022790

- crypto-js 下载：https://www.jsdelivr.com/package/npm/crypto-js

### 第 4 题 JSFuck 加密 - 初体验 —— [代码](https://github.com/dotvue/go-spider/blob/main/wangluozhe/04/main.go) 答案：5042028

- 在 notepad 中选中最后一个括号，找到匹配的左括号，把里面的 JSFuck 代码复制出来放到浏览器调试窗口中就能得到明文代码

### 第 5 题 控制台反调试 - 初体验 —— [代码](https://github.com/dotvue/go-spider/blob/main/wangluozhe/05/main.go) 答案：32179a4292bb916b3df27aabd504651e

- 1.js：解密后的代码
- 2.js：需要浏览器在 http://spider.wangluozhe.com/ 网站下控制台中执行，可得到答案

### 第 6 题 JS 加密 - 环境模拟检测 —— [代码](https://github.com/dotvue/go-spider/blob/main/wangluozhe/06/main.go) 答案：5108936

- 1.js：网站原代码
- 2.js：解密 1.js 可以得到 3.js
- 3.js：解密后代码
- 4.js：抠出来的代码，可以直接 v8 运行

### 第 7 题 JSVMPZL - 初体验 —— [代码](https://github.com/dotvue/go-spider/blob/main/wangluozhe/07/main.go) 答案：5127381

- 过 devtool 检测：window.set_Interval = setInterval;setInterval = function (x1, x2) {console.log(x1);if (x2 != 2000) {return window.set_Interval(x1, x2)}}
- 过格式化代码检测（不能使用 vscode 格式化）：var Reg_Exp = RegExp;RegExp = function (pattern, modifiers) {if (pattern === '\\n') pattern = '\\v';if (modifiers) {return Reg_Exp(pattern, modifiers)} else {return Reg_Exp(pattern)}};RegExp.toString = function () {return 'function RegExp() { [native code] }'}
- 过改代码检测（判断字数 12178，判断\_符号 3177）：定义 var yuStr = `原代码`;在 (27 == \_\_U) 这个分支中修改代码：if(typeof yugez === 'string' && yugez.startsWith('function (\_, \_\_) {')) yugez = yuStr
