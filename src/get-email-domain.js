const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let ind = email.lastIndexOf('@');
  const newStr = email.slice(ind + 1);
  return newStr;
}

module.exports = {
  getEmailDomain
};
