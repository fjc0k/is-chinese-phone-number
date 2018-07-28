interface IIsChinesePhoneNumber {
    /**
     * 中国电话号码验证（固定电话号码及移动电话号码）
     *
     * @param phoneNumber 电话号码
     * @param strict 是否严格模式
     */
    (phoneNumber: string | number, strict?: boolean): boolean;
    /**
     * 中国电话号码验证（移动电话号码）
     *
     * @param phoneNumber 移动电话号码
     * @param strict 是否严格模式
     */
    mobile(phoneNumber: string | number, strict?: boolean): boolean;
    /**
     * 中国电话号码验证（固定电话号码）
     *
     * @param phoneNumber 固定电话号码
     * @param strict 是否严格模式
     */
    landline(phoneNumber: string | number, strict?: boolean): boolean;
}
declare const isChinesePhoneNumber: IIsChinesePhoneNumber;
export default isChinesePhoneNumber;
