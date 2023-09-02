const {Router} = require('express');
const getUsersHandler = require('../handlers/usersHandlers/getUsersHandler.js');
const getUserByIdHandler = require('../handlers/usersHandlers/getUserByIdHandler.js');
const createUserHandler = require('../handlers/usersHandlers/createUserHandler.js');
const updateUserHandler = require('../handlers/usersHandlers/updateUserHandler.js');
const deleteUserHandler = require('../handlers/usersHandlers/deleteUserHandler.js');

const userRouter = Router();

userRouter.get("/", getUsersHandler);
userRouter.get("/:id", getUserByIdHandler);
userRouter.post("/", createUserHandler);
userRouter.put("/:id", updateUserHandler);
userRouter.delete("/:id", deleteUserHandler);

module.exports = userRouter;