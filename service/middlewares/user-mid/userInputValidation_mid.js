const userInputValidate = async (req, res, next) => {
    const { username, email, password } = req.body;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const isValidPassword = passwordRegex.test(password);
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
        return res.status(400).send({ msg: "Email inválido!"});
    }

    if (!isValidPassword) {
        return res.status(400).send({ msg: "Senha inválida! A senha deve conter pelo menos 1 caractere maiúsculo, 1 minúsculo, 1 caractere especial e 1 número, com um comprimento mínimo de 8 caracteres." });
    }

    if(password.length <= 6){
        return res.status(400).send({ msg: "A senha deve ter no mínimo 6 caracteres!"});
    }

    if(username && (username.length < 5 || username.length > 15)){
        return res.status(400).send({ msg: "O nome de usuário deve ter entre 5 e 15 caracteres!"});
    }

    if(!username || !email || !password){
        return res.status(400).send({ msg: "Todos os campos devem ser preenchidos!"});
    }

    next();
}

module.exports = userInputValidate;
