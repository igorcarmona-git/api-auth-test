const User = require("../models/User");

const allUsers = async (req, res) => {
    try{
        const users = await User.findAll();
        return res.status(200).send(users);
    }catch(err){
        return res.status(500).send({msg: "Erro ao buscar usuários!"});
    }
}

const findOneUser = async (req, res) => {
    try{
        const { username } = req.params; // Use req.params para recuperar o parâmetro da URL

        const user = await User.findOne({
            where: { username }
        });

        if(!user) {
            return res.status(404).send({ msg: "Usuário não encontrado" });
        }

        return res.status(200).send(user);
    }catch(err){
        return res.status(500).send({msg: "Erro ao buscar usuário!"});
    }
}

const registerUser = async (req, res) => {
    try{
        const {username, email, password} = req.body;
    
        const user = await User.create({
            username, 
            email, 
            password,
        });
        return res.status(200).send(user);
    }catch(err){
        return res.status(500).send({msg: "Erro ao registrar usuário!"});
    }
}

const deleteUser = async (req, res) => {
    try{
        const {username} = req.params;
    
        const user = await User.destroy({
            where: {username}
        });
        return res.status(200).send({msg: "Usuário deletado com sucesso!"});
    }catch(err){
        return res.status(500).send({msg: "Erro ao deletar usuário!"});
    }
}

const alterUser= async (req, res) => {
    const {userQuery} = req.params;
    console.log(userQuery);

    try{
        const {email, password} = req.body;
        console.log(`{username, email, password} = ${username}, ${email}, ${password}`);
        console.log(userQuery);
    
        const user = await User.update({
            email,
            password,
        }, {
            where: {userQuery}
        });
        return res.status(200).send(user);
    }catch(err){
        return res.status(500).send({msg: "Erro ao alterar usuário!"});
    }
}

module.exports = { registerUser, deleteUser, alterUser, allUsers, findOneUser }