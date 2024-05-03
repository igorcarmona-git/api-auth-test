const bcrypt = require('bcrypt');

const hashedPassword = (pass) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(pass, salt);
};

module.exports = {hashedPassword}