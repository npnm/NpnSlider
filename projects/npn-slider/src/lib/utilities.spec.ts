import { Utilities } from './utilities';

describe('Utilities', () => {
  let util: Utilities;

  beforeAll(() => {
    util = new Utilities();
  });

  it('"isNullOrEmpty()" method should work as expected', () => {
    const temp = undefined; // undefined variable
    expect(util.isNullOrEmpty({ id: 1 })).toBe(false, 'It should return false for a valid object');
    expect(util.isNullOrEmpty('name')).toBe(false, 'It should return false for a valid string');
    expect(util.isNullOrEmpty(null)).toBe(true, 'It should return true for NULL value');
    expect(util.isNullOrEmpty(temp)).toBe(true, 'It should return true for undefined value');
    expect(util.isNullOrEmpty('')).toBe(true, 'It should return true for empty string');
  });

  it('"findNextValidStepValue()" method should work as expected', () => {
    expect(util.findNextValidStepValue(1000, 125)).toBe(100, 'It should return correct next valid step value');
  });

  it('"isNumberArray()" method should work as expected', () => {
    expect(util.isNumberArray([2, 3, 4])).toBe(true, 'It should be return true for valid number array');
    expect(util.isNumberArray([2, undefined, 4])).toBe(false, 'It should be return false for invalid number array');
    expect(util.isNumberArray([])).toBe(false, 'It should be return false for a empty array');
    expect(util.isNumberArray(null)).toBe(false, 'It should be return false for null value');
  });

});
