const {User} = require ('../../db.js');

const getUsersController = async()=>{
    const users = await User.findAll();
    return users;
};

module.exports = getUsersController;