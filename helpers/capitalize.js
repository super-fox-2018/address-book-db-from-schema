function capitalize(str) {
  str = str.replace(/_/g, ' ');
  return str[0].toUpperCase() + str.slice(1);
}

module.exports = capitalize;