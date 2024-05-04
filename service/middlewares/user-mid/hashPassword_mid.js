const bcrypt = require('bcrypt');

const hashPasswordMiddleware = (req, res, next) => {
    const { password } = req.body; 
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    req.body.password = hashedPassword;
    
    next();
};

module.exports = hashPasswordMiddleware;
