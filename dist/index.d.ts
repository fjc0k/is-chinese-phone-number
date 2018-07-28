interface IIsChinesePhoneNumber {
    /**
     * 中国电话号码验证
     *
     * @param phoneNumber 手机号码或座机号码
     * @param strict 是否严格模式
     */
    (phoneNumber: string | number, strict?: boolean): boolean;
    /**
     * 中国手机号码验证
     *
     * @param phoneNumber 手机号码
     * @param strict 是否严格模式
     */
    mobile(phoneNumber: string | number, strict?: boolean): boolean;
    /**
     * 中国座机号码验证
     *
     * @param phoneNumber 座机号码
     * @param strict 是否严格模式
     */
    landline(phoneNumber: string | number, strict?: boolean): boolean;
}
declare const isChinesePhoneNumber: IIsChinesePhoneNumber;
export default isChinesePhoneNumber;
