const {User} = require('../../db.js');

const createUserController = async (name)=>{
    const newUserData = {
        name,
        
    };
    const newUser = await User.create(newUserData);
    return newUser;
};

module.exports = createUserController;