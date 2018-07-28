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
isChinesePhoneNumber(phoneNumber: string | number, strict: boolean = false): boolean
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
isChinesePhoneNumber.mobile(phoneNumber: string | number, strict: boolean = false): boolean
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
isChinesePhoneNumber.landline(phoneNumber: string | number, strict: boolean = false): boolean
```

示例：

```javascript
isChinesePhoneNumber.landline('10086') // ==> false
isChinesePhoneNumber.landline('18087030020') // ==> false
isChinesePhoneNumber.landline('010-88888888') // ==> true
```

## 宽松模式与严格模式

`isChinesePhoneNumber` 依据中国工信部于2018年3月26日在其网站上发布的 [电信网编号计划（2017年版）](http://miinac.gov.cn/components/Notice.action?doType=view&id=150951611150067176518) 编写。

**注：** 手机号码验证的严格模式下，使用的号段是上述计划所述的 `公众移动通信网网号`，并不保证其已被电信运营商开通运营。

- 手机号码

  - 宽松模式

    不验证号段：`/^1[3-9][0-9]{9}$/`。
  
  - 严格模式

    验证号段：`/^1(?:3[0-9]|4[5-9]|5[0-9]|6[12456]|7[0-8]|8[0-9]|9[0-9])[0-9]{8}$/`。

- 座机号码

  - 宽松模式

    区号可选：`/^(?:0[1-9][0-9]{1,2}-)?[2-9][0-9]{6,7}$/`。
  
  - 严格模式

    区号必填：`/^0[1-9][0-9]{1,2}-[2-9][0-9]{6,7}$/`。

