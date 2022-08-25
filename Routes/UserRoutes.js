const express = require("express");
const {create, fetchAll} = require("../Handlers/UserHandler");

const UserRouter = express.Router();


UserRouter.post("/create", create);
UserRouter.get("/fetchAll", fetchAll)

module.exports = {
    UserRouter
}