interface IPhoneNumber {
  /** loose */
  readonly 0: RegExp;
  /** strict */
  readonly 1: RegExp;
}

const mobilePhoneNumber: IPhoneNumber = [
  /^1[3-9][0-9]{9}$/,
  /^1(?:3[0-9]|4[5-9]|5[0-9]|6[12456]|7[0-8]|8[0-9]|9[0-9])[0-9]{8}$/
]

const landlinePhoneNumber: IPhoneNumber = [
  /^(?:0[1-9][0-9]{1,2}-)?[2-8][0-9]{6,7}$/,
  /^0[1-9][0-9]{1,2}-[2-8][0-9]{6,7}$/
]

interface IIsChinesePhoneNumber {
  /**
   * 中国电话号码验证
   *
   * @param phoneNumber 手机号码或座机号码
   * @param strict 是否严格模式
   * @returns 是（true）或否（false）
   */
  (phoneNumber: string | number, strict?: boolean): boolean;
  /**
   * 中国手机号码验证
   *
   * @param phoneNumber 手机号码
   * @param strict 是否严格模式
   * @returns 是（true）或否（false）
   */
  mobile(phoneNumber: string | number, strict?: boolean): boolean;
  /**
   * 中国座机号码验证
   *
   * @param phoneNumber 座机号码
   * @param strict 是否严格模式
   * @returns 是（true）或否（false）
   */
  landline(phoneNumber: string | number, strict?: boolean): boolean
}

const isChinesePhoneNumber = ((phoneNumber: string | number, strict: boolean = false): boolean => {
  const mode = strict ? 1 : 0
  return (
    mobilePhoneNumber[mode].test(phoneNumber as string)
      || landlinePhoneNumber[mode].test(phoneNumber as string)
  )
}) as IIsChinesePhoneNumber

isChinesePhoneNumber.mobile = (phoneNumber: string | number, strict: boolean = false): boolean => {
  const mode = strict ? 1 : 0
  return mobilePhoneNumber[mode].test(phoneNumber as string)
}

isChinesePhoneNumber.landline = (phoneNumber: string | number, strict: boolean = false): boolean => {
  const mode = strict ? 1 : 0
  return landlinePhoneNumber[mode].test(phoneNumber as string)
}

export default isChinesePhoneNumber
