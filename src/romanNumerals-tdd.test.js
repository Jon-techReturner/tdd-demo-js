import { convertRomanNumerals } from './romanNumerals-tdd';

fdescribe("Convert the Arabic number to Roman numeral", () => {
    test("return I to 1", () => {
        expect(convertRomanNumerals("I")).toBe(1);
    });
    test("return II to 2", () => {
        expect(convertRomanNumerals("II")).toBe(2);
    });
    test("return III to 3", () => {
        expect(convertRomanNumerals("III")).toBe(3);
    });
    test("return IV to 4", () => {
        expect(convertRomanNumerals("IV")).toBe(4);
    });
    test("return VI to 6", () => {
        expect(convertRomanNumerals("VI")).toBe(6);
    });
    test("return MMDX to 2510", () => {
        expect(convertRomanNumerals("MMDX")).toBe(2510);
    });
});
