# isChinesePhoneNumber ![Travis CI](https://api.travis-ci.org/fjc0k/is-chinese-phone-number.svg?branch=master)

中国电话号码验证函数。支持验证手机号码、座机号码。

## 安装

```bash
# yarn
yarn add is-chinese-phone-number

# or, npm
npm i is-chinese-phone-number
```

CDN：[jsDelivr](//www.jsdelivr.com/package/npm/is-chinese-phone-number) | [UNPKG](//unpkg.com/is-chinese-phone-number/) （可通过全局变量 `isChinesePhoneNumber` 使用）

## 使用

### 验证中国电话号码

语法：

```typescript
isChinesePhoneNumber(phoneNumber: string | number, strict?: boolean): boolean
```

示例：

```javascript
isChinesePhoneNumber('10086') // ==> false
isChinesePhoneNumber('18087030020') // ==> true
isChinesePhoneNumber('010-88888888') // ==> true
```

### 验证中国手机号码

语法：

```typescript
isChinesePhoneNumber.mobile(phoneNumber: string | number, strict?: boolean): boolean
```

示例：

```javascript
isChinesePhoneNumber.mobile('10086') // ==> false
isChinesePhoneNumber.mobile('18087030020') // ==> true
isChinesePhoneNumber.mobile('010-88888888') // ==> false
```

### 验证中国座机号码

语法：

```typescript
isChinesePhoneNumber.landline(phoneNumber: string | number, strict?: boolean): boolean
```

示例：

```javascript
isChinesePhoneNumber.landline('10086') // ==> false
isChinesePhoneNumber.landline('18087030020') // ==> false
isChinesePhoneNumber.landline('010-88888888') // ==> true
```
