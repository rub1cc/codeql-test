// function endsWith that accept x and y
// check last index of x is equal to x length - y length and return it
function endsWith(x, y) {
  return x.length - y.length === x.lastIndexOf(y);
}
