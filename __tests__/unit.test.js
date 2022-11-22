// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test('isPhoneNumber true1', () => {
    expect(functions.isPhoneNumber('012-345-6789')).toBe(true);
});
test('isPhoneNumber true2', () => {
    expect(functions.isPhoneNumber('(012)-345-6789')).toBe(true);
});
test('isPhoneNumber false1', () => {
    expect(functions.isPhoneNumber('123')).toBe(false);
});
test('isPhoneNumber false2', () => {
    expect(functions.isPhoneNumber('abc')).toBe(false);
});

// isEmail
test('isEmail true1', () => {
    expect(functions.isEmail('jhw009@ucsd.edu')).toBe(true);
});
test('isEmail true2', () => {
    expect(functions.isEmail('abc@gmail.com')).toBe(true);
});
test('isEmail false1', () => {
    expect(functions.isEmail('abc')).toBe(false);
});
test('isEmail false2', () => {
    expect(functions.isEmail('@abc')).toBe(false);
});

// isStrongPassword
test('isStrongPassword true1', () => {
    expect(functions.isStrongPassword('abcd1234')).toBe(true);
});
test('isStrongPassword true2', () => {
    expect(functions.isStrongPassword('a111')).toBe(true);
});
test('isStrongPassword false1', () => {
    expect(functions.isStrongPassword('1a')).toBe(false);
});
test('isStrongPassword false2', () => {
    expect(functions.isStrongPassword('abcdefghijklmnopqrstuvwxyz')).toBe(false);
});

// isDate
test('isDate true1', () => {
    expect(functions.isDate('01/01/2022')).toBe(true);
});
test('isDate true2', () => {
    expect(functions.isDate('1/1/2022')).toBe(true);
});
test('isDate false1', () => {
    expect(functions.isDate('1/1/1')).toBe(false);
});
test('isDate false2', () => {
    expect(functions.isDate('01012022')).toBe(false);
});

// isHexColor
test('isHexColor true1', () => {
    expect(functions.isHexColor('#000')).toBe(true);
});
test('isHexColor true2', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test('isHexColor false1', () => {
    expect(functions.isHexColor('#0')).toBe(false);
});
test('isHexColor false2', () => {
    expect(functions.isHexColor('0')).toBe(false);
});