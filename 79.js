// import striptags
const striptags = require('striptags');

// export function showBoldName that accept name variable
// set innerHTML of element with id name to bold plus striptags of name
// return undefined
module.exports = function showBoldName(name) {
  document.getElementById('name').innerHTML = '<b>' + striptags(name) + '</b>';
}