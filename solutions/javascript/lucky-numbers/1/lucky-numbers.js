// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const num1 = Number(array1.join(''))
  const num2 = Number(array2.join(''))
  return num1 + num2
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const convertedToString = value.toString();
  const reversedNumber = convertedToString.split('').reverse('').join('');
  return reversedNumber === convertedToString
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === '' || input === null || input === undefined) {
        return 'Required field';
    }

    // تبدیل ورودی به عدد
    const num = Number(input.trim()); // .trim() برای حذف فاصله‌های اضافی

    // بررسی اینکه ورودی یک عدد معتبر است (و نه NaN) و صفر نیست
    if (isNaN(num) || num === 0) {
        return 'Must be a number besides 0';
    }

    // در غیر این صورت، ورودی صحیح است
    return '';
  // return input ? 'Required field' : typeof input !== 'number' || input === 0 ? 'Must be a number besides 0' : ''
}
