const bcrypt = require('bcrypt');

const comparePassword = (password, hash) => bcrypt.compare((password, hash));

module.exports = comparePassword;