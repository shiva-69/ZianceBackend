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
    users.forEach((item) => {
        console.log(item)
        delete item.password;
        console.log(item)
    })

    return res.status(200).send(users);
}

const deleteUser = async(req, res, next) => {
    const {id }= req.params;
    console.log(id);

    const user = await Users.findByIdAndDelete(id);
    delete user.password;
    return res.status(200).send(user);
}


const updateUser = async (req, res, next) => {
    const {name, email, contact} = req.body;
    const user = await Users.findOneAndUpdate({email: email}, {name, contact});

    res.status(200).send(user);
}

const fetchOne = async (req, res, next) => {
    const {id }= req.params;
    const user = await Users.findById(id);
    res.status(200).send(user);
}


module.exports = {
    create,
    fetchAll,
    deleteUser,
    updateUser,
    fetchOne
}