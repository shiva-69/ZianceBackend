const express = require("express");
const {create, fetchAll, deleteUser, updateUser, fetchOne} = require("../Handlers/UserHandler");

const UserRouter = express.Router();


UserRouter.post("/create", create);
UserRouter.get("/fetchAll", fetchAll);
UserRouter.post("/update", updateUser);
UserRouter.get("/delete/:id", deleteUser);
UserRouter.get("/:id", fetchOne)

module.exports = {
    UserRouter
}