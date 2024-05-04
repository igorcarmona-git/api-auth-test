const User = require("../../../models/User");

const checkUserExists = async (req, res, next) => {
    const { username } = req.params;
    
    const userExists = await User.findOne({
        where: {username}
    });
    
    if(!userExists){
        return res.status(401).send({ msg: "Usuário não existe!" });
    };
    next();
}

module.exports = checkUserExists;