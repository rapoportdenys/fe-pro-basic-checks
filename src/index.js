/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) =>
  string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString(string) {
  let FenceString = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      FenceString = FenceString + string.charAt(i).toLowerCase();
    } else {
      FenceString = FenceString + string.charAt(i).toUpperCase();
    }
  }
  return FenceString;
}

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action, string) {
  if (action === 'uppercase') {
    return string.toUpperCase();
  } else if (action === 'lowercase') {
    return string.toLowerCase();
  } else if (action === 'capitalize') {
    return capitalizeString(string);
  } else if (action === 'fence') {
    return fenceString(string);
  } else {
    return string;
  }
};
/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
  switch (action) {
    case 'uppercase':
      return string.toUpperCase();
    case 'lowercase':
      return string.toLowerCase();
    case 'capitalize':
      return capitalizeString(string);
    case 'fence':
      return fenceString(string);
    default:
      return string;
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
  for (let item of string) {
    console.log(item);
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
  for (let i = 0; i < string.length; i++) {
    console.log(string.charAt(i));
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
  let i = 0;
  while (i < string.length) {
    console.log(string.charAt(i));
    i++;
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
  string.split('').forEach((elem) => console.log(elem));
};
