const {Users} = require("../Database/Users");

const create = async(req, res, next) => {
    let { email } = req.body;
    let body = req.body;
    let alreadyRegistered = await Users.findOne({email: email});
    if(alreadyRegistered){
        return res.status(400).send({message: "This user is already registered"});
    }
    else {
        await Users.create(body);
        return res.status(200).send({
        message : "User registered"
    })
    }
}

const fetchAll = async(req, res, next) => {
    let users = await Users.find();

    return res.status(200).send(users);
}


module.exports = {
    create,
    fetchAll
}