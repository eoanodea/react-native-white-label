const styles = require('./solarized-light').default;

module.exports = fileName => styles[fileName] || {};
