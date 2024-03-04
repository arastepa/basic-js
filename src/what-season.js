const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined)
    return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || date[Symbol.toStringTag] === 'Date')
    throw new Error('Invalid date!');
  const res = date.getMonth();
  if (res < 2 || res === 11)
    return 'winter';
  else if (res >=2 && res <= 4)
    return 'spring';
  else if (res > 4 && res <= 7)
    return 'summer';
  else if (res > 7 && res <= 10)
    return 'fall';
}

module.exports = {
  getSeason
};
