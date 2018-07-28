# isChinesePhoneNumber

中国电话号码验证函数。支持验证固定电话号码、移动电话号码。

## 安装

```bash
# yarn
yarn add is-chinese-phone-number

# or, npm
npm i is-chinese-phone-number
```

CDN：[jsDelivr](//www.jsdelivr.com/package/npm/is-chinese-phone-number) | [UNPKG](//unpkg.com/is-chinese-phone-number/) （可通过全局变量 `isChinesePhoneNumber` 使用）

## 使用

- `isChinesePhoneNumber(phoneNumber: String | Number, strict: Boolean)`

  ```javascript
  isChinesePhoneNumber('10086') // ==> false
  isChinesePhoneNumber('18087030020') // ==> true
  isChinesePhoneNumber('010-88888888') // ==> true
  ```
