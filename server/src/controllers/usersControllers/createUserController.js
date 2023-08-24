const {User} = require('../../db.js');

const createUserController = async (name,lastName,country,email,password,profile,address)=>{
    const newUserData = {
        name,
        lastName,
        country,
        email,
        password,
        profile,
        address,
    };
    const newUser = await User.create(newUserData);
    return newUser;
};

module.exports = createUserController;